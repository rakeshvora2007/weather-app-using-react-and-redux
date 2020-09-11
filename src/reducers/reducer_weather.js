import { FETCH_WEATHER } from "../actions/index";

let curr = 0;
export default function(state, action) {
  switch (action.type) {
    case FETCH_WEATHER:
    if(action.error) {
      curr++;
      return {
        error: {status: true, message: action.payload.response.data.message +"*"+ curr},
        data: state.data
      }
    } else if (action.payload.data !== undefined) {
       return {
         error: {status: false, message: ""},
         data: [action.payload.data, ...state.data]
       }
      }
  }

  return {
    error: {status: false, message: ""},
    data: []
  };
}
