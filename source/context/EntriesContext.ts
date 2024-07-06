// #region Imports

/* React */
import { createContext } from 'react';

// #endregion Imports

// #region Context

interface EntriesContextProperties {
  entries: Array<string>;

  addEntry: (name: string) => void;
}

const EntriesContextDefault: EntriesContextProperties = {
  entries: [],
  addEntry: () => {},
};

const EntriesContext = createContext<EntriesContextProperties>(
  EntriesContextDefault,
);

export { EntriesContext };

// #endregion Context
