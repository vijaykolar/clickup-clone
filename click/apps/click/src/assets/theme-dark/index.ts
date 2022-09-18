// @mui material components
import { createTheme } from '@mui/material/styles';
// import Fade from "@mui/material/Fade";

// React TS Base Styles
import colors from './base/colors';
import breakpoints from './base/breakpoints';
import typography from './base/typography';
import boxShadows from './base/boxShadows';
import borders from './base/borders';
import globals from './base/globals';

// React TS Helper Functions
import boxShadow from './functions/boxShadow';
import hexToRgb from './functions/hexToRgb';
import linearGradient from './functions/linearGradient';
import pxToRem from './functions/pxToRem';
import rgba from './functions/rgba';

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
});
