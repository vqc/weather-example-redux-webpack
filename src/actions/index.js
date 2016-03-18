import axios from 'axios';

const API_KEY='d7103e6ee0028782009a473e51bdca4d';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;
  //axios returns a promise
  const request = axios.get(url);

  console.log('request: ', request);

  return {
    type: FETCH_WEATHER,
    payload: request,
  }
}
