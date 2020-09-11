import { FETCH_WEATHER } from "../actions/index";

export default function(state, action) {
  switch (action.type) {
    case FETCH_WEATHER:
    if(action.error) {
      return {
        error: {status: true, message: action.payload.response.data.message},
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
