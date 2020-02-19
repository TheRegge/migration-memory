import { get_random_int } from "../utilities";

const appReducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_AUTOPLAY":
      return {
        ...state,
        autoplay: !state.autoplay
      };
    case "SET_AUTOPLAY_INDEX":
      let randomInt = get_random_int(action.max);
      while (randomInt === state.autoplay_index) {
        randomInt = get_random_int(action.max);
      }
      return {
        ...state,
        autoplay_index: randomInt
      };
    case "SET_CENTER":
      return {
        ...state,
        center: action.center
      };
    case "SET_FOCUSED_STUDENT":
      return {
        ...state,
        student_name: action.student_name
      };
    case "SET_ZOOM_LEVEL":
      return {
        ...state,
        zoom_level: action.zoom_level
      };
    default:
      return state;
  }
};
export { appReducer as default };
