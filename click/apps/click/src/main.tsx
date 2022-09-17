import * as ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// App
import App from './app/app';

// React TS Context Provider
import { MaterialUIControllerProvider } from './context';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <MaterialUIControllerProvider>
      <App />
    </MaterialUIControllerProvider>
  </BrowserRouter>
);
