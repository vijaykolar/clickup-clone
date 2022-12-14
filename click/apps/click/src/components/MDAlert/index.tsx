import { useState, ReactNode } from 'react';

// @mui material components
import Fade from '@mui/material/Fade';

// React TS components
import MDBox from '../MDBox';

// Custom styles for the MDAlert
import MDAlertRoot from './MDAlertRoot';
import MDAlertCloseIcon from './MDAlertCloseIcon';

// Declaring props types for MDAlert
type ColorTypes =
  | 'primary'
  | 'secondary'
  | 'info'
  | 'success'
  | 'warning'
  | 'error'
  | 'light'
  | 'dark';
interface Props {
  color?: ColorTypes;
  dismissible?: boolean;
  children: ReactNode;
  [key: string]: any;
}

function MDAlert({
  color,
  dismissible,
  children,
  ...rest
}: Props): JSX.Element | null {
  const [alertStatus, setAlertStatus] = useState('mount');

  const handleAlertStatus = () => setAlertStatus('fadeOut');

  // The base template for the alert
  const alertTemplate: any = (mount: boolean = true) => (
    <Fade in={mount} timeout={300}>
      <MDAlertRoot ownerState={{ color }} {...rest}>
        <MDBox display="flex" alignItems="center" color="white">
          {children}
        </MDBox>
        {dismissible ? (
          <MDAlertCloseIcon onClick={mount ? handleAlertStatus : undefined}>
            &times;
          </MDAlertCloseIcon>
        ) : null}
      </MDAlertRoot>
    </Fade>
  );

  switch (true) {
    case alertStatus === 'mount':
      return alertTemplate();
    case alertStatus === 'fadeOut':
      setTimeout(() => setAlertStatus('unmount'), 400);
      return alertTemplate(false);
    default:
      alertTemplate();
      break;
  }

  return null;
}

// Declaring default props for MDAlert
MDAlert.defaultProps = {
  color: 'info',
  dismissible: false,
};

export default MDAlert;
