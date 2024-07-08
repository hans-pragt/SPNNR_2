// #region Imports

/* React */
import { useContext } from 'react';

/* SPNNR */
import { EntriesContext } from '@/context';

// #endregion Imports

// #region Component

export function CaseTracksList() {
  // #region Entries

  const { entries } = useContext(EntriesContext);

  // #endregion Entries

  return (
    <div>
      {entries.map((entry) => (
        <div key={entry}>{entry}</div>
      ))}
    </div>
  );
}

// #endregion Component
