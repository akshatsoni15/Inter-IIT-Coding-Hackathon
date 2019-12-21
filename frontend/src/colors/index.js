import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#fff',
      main: '#fff',
      dark: '#fff',
      border: '#d4d5d9',
      text: '#686b78',
      bg: '#f1f3f6',
    },
    secondary: {
      light: '#6c6b99',
      main: '#525188',
      dark: '#39385f',
    },
    complementry: {
      light: '#ffff51',
      main: '#f8cd01',
      dark: '#c09d00',
    },
    success: {
      light: '#66bb6a',
      main: '#43a047',
      dark: '#1b5e20',
    },
    info: {
      light: '#4b9fea',
      main: '#1e88e5',
      dark: '#155fa0',
    },
    warning: {
      light: '#fba333',
      main: '#fb8c00',
      dark: '#af6200',
    },
  },
  typography: {
    useNextVariants: true,
  },
});

export default theme;