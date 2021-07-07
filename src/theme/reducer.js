const initialState = {
  isDarkTheme: localStorage.getItem('isDarkTheme') || false,
  primaryColor: localStorage.getItem('primaryColor') || "ORANGE",
};

export function themeReducer(state=initialState, action){
  switch (action.type) {
    case "TOGGLE_DARK_THEME":
      localStorage.setItem('isDarkTheme', !state.isDarkTheme);
      return {
        ...state,
        isDarkTheme: !state.isDarkTheme
      }
    case "SET_PRIMARY_COLOR":
      localStorage.setItem('primaryColor', action.color);
      return {
        ...state,
        primaryColor: action.color,
      }
    default:
      return state;
  }
}
