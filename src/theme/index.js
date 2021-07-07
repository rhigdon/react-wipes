import { createMuiTheme } from '@material-ui/core';
// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });
// import purple from '@material-ui/core/colors/purple';
// import green from '@material-ui/core/colors/green';
// import orange from '@material-ui/core/colors/orange';
// import red from '@material-ui/core/colors/red';
import { colors } from '@material-ui/core';
import brown from '@material-ui/core/colors/brown';

export const darkTheme = createMuiTheme({
  palette: {
    primary: colors.orange,
    // secondary: green,
    type: 'dark',
  },
});
export const theme = createMuiTheme({
  zIndex: {
    appBar: 1200,
    drawer: 1100
  },
  palette: {
    primary: colors.orange,
    type: 'light',
  },
});


export const generateTheme = (primaryColor, isDarkTheme) => {
  let color = colors.orange
  if (primaryColor === "GREEN"){
    color = colors.green;
  } else if (primaryColor === "LIGHT_GREEN"){
    color = colors.lightGreen;
  } else if (primaryColor === "BLUE"){
    color = colors.blue;
  } else if (primaryColor === "PURPLE"){
    color = colors.purple;
  } else if (primaryColor === "ORANGE"){
    color = colors.orange;
  } else if (primaryColor === "LIME") {
    color = colors.lime;
  } else if (primaryColor === "RED"){
    color = colors.red;
  } else if (primaryColor === "LIGHT_BLUE"){
    color = colors.lightBlue;
  } else if (primaryColor === "BLUE_GREY"){
    color = colors.blueGrey;
  } else if (primaryColor === "LIGHT_BROWN"){
    color = {main:brown[300]};
  }
  return createMuiTheme({
    zIndex: {
      appBar: 1200,
      drawer: 1100
    },
    palette: {
      primary: color,
      // secondary: green,
      type: isDarkTheme ? 'dark' : 'light',
    },
  })
}
