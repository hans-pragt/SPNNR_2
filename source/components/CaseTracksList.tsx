// #region Component

import { useContext } from 'react';
import { EntriesContext } from '../context';

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
