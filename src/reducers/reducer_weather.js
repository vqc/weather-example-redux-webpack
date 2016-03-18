import { FETCH_WEATHER } from '../actions/index';

export default function(state=[], action){
  switch(action.type){
    case FETCH_WEATHER:
      console.log([action.payload.data].concat(state));
      return [action.payload.data].concat(state);
      //order matters
      /*
      return state.concat([ action.payload.data ]);
      */
      /* OR ES6
      return [ action.payload.data, ...state ]
      */
  }
  return state;
}
