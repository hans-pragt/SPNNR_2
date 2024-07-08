// #region Imports

/* SPNNR */
import { CasetteCase } from './components/CasetteCase';
import { EntriesContext } from './context';
import { useEntries } from './hooks';

// #endregion Imports

// #region Component

export function Application() {
  // #region Entries

  const entriesHook = useEntries();

  // #endregion Entries

  return (
    <EntriesContext.Provider value={entriesHook}>
      <div className="container mx-auto">
        {/* Casette Case */}
        <CasetteCase />

        {/* Tape Player */}
        <div>tape player</div>
      </div>
    </EntriesContext.Provider>
  );
}

// #endregion Component
