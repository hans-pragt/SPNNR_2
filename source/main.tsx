// #region Imports

/* React */
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

/* SPNNR */
import { Application } from './Application.tsx'

// #endregion Imports

// #region Application Root

ReactDOM
  .createRoot(document.getElementById('root')!)
  .render(
    <StrictMode>
      <Application />
    </StrictMode>
  );

// #endreion Application root