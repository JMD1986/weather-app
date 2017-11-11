const API_KEY = 'f6a6fec7e553937429cc047053a9c580';

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather() {
  return {
    type: FETCH_WEATHER
  }
}
