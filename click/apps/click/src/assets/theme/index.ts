// @mui components
import { createTheme } from '@mui/material';

// React TS Base Styles
import colors from './base/colors';
import breakpoints from './base/breakpoints';
import typography from './base/typography';
import boxShadows from './base/boxShadows';
import borders from './base/borders';

//  React TS Helper Functions
import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';

// React TS components base styles for @mui material components
import input from './components/form/input';
import inputLabel from './components/form/inputLabel';
import inputOutlined from './components/form/inputOutlined';
import textField from './components/form/textField';

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  boxShadows: { ...boxShadows },
  borders: { ...borders },
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
  components: {
    MuiInput: { ...input },
    MuiInputLabel: { ...inputLabel },
    MuiOutlinedInput: { ...inputOutlined },
    MuiTextField: { ...textField },
  },
});
