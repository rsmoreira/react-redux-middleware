// This is our ActionCreator

import axios from 'axios';

const WEATHERMAP_API_KEY= '18d44d41a7e22a47ceb4ee9a2b8f87a9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${WEATHERMAP_API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const URL = `${ROOT_URL}&q=${city},br`;
    const request = axios.get(URL);

    // Our ActionCreator returns an Action
    return {
        type: FETCH_WEATHER,
        payload: request
    };
}