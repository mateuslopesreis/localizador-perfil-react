
import { teal } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';

type ThemeProps = {
    children:React.ReactNode
}


const theme = createTheme({
  palette: {
    primary: {
      main: '#4caf50',
      light: '#6fbf73',
      dark: '#357a38'
    },

    secondary:{
        main:'#00e676',
        light: '#33eb91',
        dark: '#00a152'

    }
  },
});



export function Theme({children}:ThemeProps) {
  return <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>;
}