// #region Imports

/* React */
import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

/* SPNNR */
import { Application } from './Application.tsx';

// #endregion Imports

// #region Application Root

const mountPoint = document.getElementById('root');
if (mountPoint) {
  ReactDOM.createRoot(mountPoint).render(
    <StrictMode>
      <Application />
    </StrictMode>,
  );
}

// #endregion Application root
