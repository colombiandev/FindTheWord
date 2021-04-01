import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#80deea',
      light: '#b4ffff',
      dark: '#4bacb8'
    },
    secondary: {
        main: '#0096a5',
        light: '#56c7d6',
        dark: '#006876'
      }
  }
});

export default theme;