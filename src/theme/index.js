import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          padding: 0,
          margin: 0,
          fontSize: '14px',
          backgroundColor: '#F5F7FB'
        },
        'ol, ul': {
          paddingLeft: 0
        },
        li: {
          listStyle: 'none'
        },
        a: {
          textDecoration: 'none',
          color: 'inherit'
        }
      }
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none'
        }
      }
    }
  }
});

export default theme;
