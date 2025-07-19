import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5865F2',
    },
    secondary: {
      main: '#EB459E',
    },
    background: {
      default: '#2B2D31',
      paper: '#313338',
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#B9BBBE',
    },
  },
  typography: {
    fontFamily: '"Segoe UI", "Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#313338',
        },
      },
    },
  },
});

export { theme };
