function getState(state){
  return state.themeReducer;
}
export function isDarkTheme(state){
  return getState(state).isDarkTheme;
}
export function getPrimaryColor(state){
  return getState(state).primaryColor;
}
