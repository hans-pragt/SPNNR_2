// #region Imports

/* Telestream */
import { CaseHeader } from './case/CaseHeader';
import { CaseTracksList } from './case/CaseTracksList';

// #endregion Imports

// #region Component

export function CasetteCase() {
  return (
    <div className="w-[30vw] h-[14vw] p-2 border-2 border-black rounded flex flex-col">
      {/* Header */}
      <CaseHeader />

      {/* Entries */}
      <CaseTracksList />
    </div>
  );
}

// #endregion Component
