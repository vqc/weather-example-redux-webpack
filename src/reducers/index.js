import { combineReducers } from 'redux';

import reducerWeather from './reducer_weather';

const rootReducer = combineReducers({
  weather: reducerWeather
});

export default rootReducer;
