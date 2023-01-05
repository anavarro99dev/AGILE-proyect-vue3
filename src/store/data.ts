import axios from "axios";

const geocodeAPI = axios.create({
  baseURL: "https://geocoding-api.open-meteo.com/v1/",
});

const openMeteorAPI = axios.create({
  baseURL: "https://api.open-meteo.com/v1/",
});

async function geocode(name: string) {
  const res = await geocodeAPI.get("search?name=" + name);
  const data = await res.data.results[0];
  return {
    id: data.id,
    name: data.name,
    country: data.country,
    latitude: data.latitude,
    longitude: data.longitude,
    CC: data.country_code,
  };
}

async function openMeteor(
  latitude: number,
  longitude: number,
) {
  const resTC = await openMeteorAPI.get(`forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m&past_days=1&temperature_unit=celsius`);
  const resTF = await openMeteorAPI.get(`forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,relativehumidity_2m&past_days=1&temperature_unit=fahrenheit`);

  return {
    dataTC: getData( await resTC.data ),
    dataTF: getData( await resTF.data )
  }

}

// Funcion para obtener los datos necesarios de la tabla.
function getData(data:any) {
  const time_data: string[] = data.hourly.time;
  const temperature_data: number[] = data.hourly.temperature_2m;
  const relativehumidity_data: number[] = data.hourly.relativehumidity_2m;

  //   Crear tabla
  const table: (string | number)[][] = [];

  //   Agregar elementos a la tabla
  for (let i = 0; i < time_data.length; i++) {
    table.push([time_data[i] , temperature_data[i], relativehumidity_data[i]]);
  }

  //   Reducir tabla con el promedio de los dias.
  const day: Object[] = [];
  const temp: any = [];

  for (let i = 1; i < 6; i++) {
    // Obtencion de los datos dividos por dias.
    temp.push(table.slice(i * 24, (i + 1) * 24));
    day.push({
      temperature_media: Math.round(// Promedio de la temperatura del dia.
        temp[i - 1].map((val: any) => val[1]).reduce((a:number, b:number) => a + b) / 24
      ),
      relativehumidity: Math.round(// Promedio de la humedad ralatica del dia.
        temp[i - 1].map((val: any) => val[2]).reduce((a:number, b:number) => a + b) / 24
      ),
      day: new Date( temp[i-1][0][0] ).getUTCDay() // Obtencion del dia de la semana.
    });
  }
  return day;
}

export { geocode, openMeteor };
