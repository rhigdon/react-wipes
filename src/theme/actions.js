export function toggleDarkTheme(){
  return {
    type: 'TOGGLE_DARK_THEME',
  }
}

export function setPrimaryColor(color){
  return {
    type: 'SET_PRIMARY_COLOR',
    color,
  }
}
