// src/theme/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ff3040',
    },
    background: {
      default: '#000000',
      paper: '#121212',
    },
    text: {
      primary: '#ffffff',
      secondary: '#8e8e8e',
    },
  },
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: '#ffffff',
        },
      },
    },
  },
});