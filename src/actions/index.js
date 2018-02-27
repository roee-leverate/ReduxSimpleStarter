import axios from 'axios'

const WEATHER_API_KEY= 'f7b760b99a727e73947e9e6572d757b8'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`

export const FETCH_WEATHER = 'FETCH-WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},il`
  const request = axios.get(url)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
