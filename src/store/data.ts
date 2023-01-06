import axios from "axios";
// TODO: Agregar validacion a la API => no lo logre porque a pesar que los parametros esten mal el status siempre es OK

// GeocodeAPI => obtener la latitud y longitud a partir del nombre de la ciudad
const geocodeAPI = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1/",
});

// Open-Meteo-API => obtner datos meteorologicos
const openMeteoAPI = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
});

// Retornar datos importantes GeocodeAPI
async function geocode(name: string) {
  const res = await geocodeAPI.get(`search?name=${name}&count=1`);

  const data = await res.data.results[0];
  return {
    id: data?.id,
    name: data?.name,
    country: data?.country,
    latitude: data?.latitude,
    longitude: data?.longitude,
    CC: data?.country_code,
  };
}

// Retornar datos importantes Open-Meteo-API
async function openMeteo(latitude: number, longitude: number) {
  // Obtener datos en C y F
  const resTC = await openMeteoAPI.get(
    `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m&past_days=1&temperature_unit=celsius&current_weather=true`
  );
  const resTF = await openMeteoAPI.get(
    `forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m&past_days=1&temperature_unit=fahrenheit&current_weather=true`
  );

  return {
    dataTC: getData(await resTC.data),
    dataTF: getData(await resTF.data),
  };
}

// Funcion para obtener los datos necesarios de Open-Meteo-API.
function getData(data: any) {
  const time_data: string[] = data.hourly.time;
  const temperature_data: number[] = data.hourly.temperature_2m;
  const relativehumidity_data: number[] = data.hourly.relativehumidity_2m;

  // Crear tabla
  const table: (string | number)[][] = [];

  // Agregar elementos a la tabla
  for (let i = 0; i < time_data.length; i++) {
    table.push([time_data[i], temperature_data[i], relativehumidity_data[i]]);
  }

  // Reducir tabla con el promedio de los dias
  const day: Object[] = [];
  const temp: any = [];

  for (let i = 1; i < 6; i++) {
    // Obtencion de los datos dividos por dias
    temp.push(table.slice(i * 24, (i + 1) * 24));
    day.push({
      temperature_media: Math.round(
        // Promedio de la temperatura del dia
        temp[i - 1]
          .map((val: any) => val[1])
          .reduce((a: number, b: number) => a + b) / 24
      ),
      relativehumidity: Math.round(
        // Promedio de la humedad ralatica del dia
        temp[i - 1]
          .map((val: any) => val[2])
          .reduce((a: number, b: number) => a + b) / 24
      ),
      day: new Date(temp[i - 1][0][0]).getUTCDay(), // Obtencion del dia de la semana actual
      weathercode: data.current_weather.weathercode, // Obtencion del whatercode del dia de la semana actual
    });
  }
  return day;
}

export { geocode, openMeteo as openMeteor };
