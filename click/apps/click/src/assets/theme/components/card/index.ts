// React TS Base Styles
import colors from '../../base/colors';
import borders from '../../base/borders';
import boxShadows from '../../base/boxShadows';

// React Helper Functions
import rgba from '../../functions/rgba';

const { black, white } = colors;
const { borderWidth, borderRadius } = borders;
const { md } = boxShadows;

// types
type CardTypes = any;

const card: CardTypes = {
  styleOverrides: {
    root: {
      display: 'flex',
      flexDirection: 'column',
      position: 'relative',
      minWidth: 0,
      wordWrap: 'break-word',
      backgroundColor: white.main,
      backgroundClip: 'border-box',
      border: `${borderWidth[0]} solid ${rgba(black.main, 0.125)}`,
      borderRadius: borderRadius.xl,
      boxShadow: md,
      overflow: 'visible',
    },
  },
};

export default card;
