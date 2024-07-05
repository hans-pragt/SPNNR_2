// #region Imports

/* SPNNR */
import { CasetteCase } from './components/CasetteCase';

// #endregion Imports

// #region Component

export function Application() {
  return (
    <div className="container mx-auto">
      {/* Casette Case */}
      <CasetteCase />

      {/* Tape Player */}
      <div>tape player</div>
    </div>
  );
}

// #endregion Component
