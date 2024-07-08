// #region Hook

import { useState } from 'react';

export function useEntries() {
  // #region Entries

  const [entries, setEntries] = useState<Array<string>>([]);

  function addEntry(entry: string) {
    setEntries([...entries, entry]);
  }

  // #endregion Entries

  return {
    entries,
    addEntry,
  };
}

// #endregion Hook
