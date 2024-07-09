// #region Imports

/* React */
import { useContext } from 'react';

/* SPNNR */
import { EntriesContext } from '@/context';
import { TrackItem } from './TrackItem';

// #endregion Imports

// #region Component

export function CaseTracksList() {
  // #region Entries

  const { entries } = useContext(EntriesContext);

  // #endregion Entries

  return (
    <div className="h-full overflow-auto">
      <div className="min-h-full dashed-background">
        {entries.map((entry) => (
          <TrackItem key={entry} />
        ))}
      </div>
    </div>
  );
}

// #endregion Component
