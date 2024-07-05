// #region Imports

/* React */
import { useState } from 'react';

// #endregion Imports

// #region Component

export function CaseHeader() {
  // #region Focus

  const [hasFocus, setHasFocus] = useState<boolean>(false);

  // #endregion Focus

  return (
    <div
      className={`pb-2 flex flex-row gap-2 border-b-2 ${hasFocus ? 'border-green' : 'border-black'}`}
    >
      {/* Label */}
      <span className="border border-black inline-block px-2 text-xl font-bold">
        A
      </span>

      {/* Input */}
      <input
        className="flex-1 outline-none"
        type="text"
        onFocus={() => setHasFocus(true)}
        onBlur={() => setHasFocus(false)}
      />

      {/* Add Item */}
      <button type="button">Add</button>
    </div>
  );
}

// #endregion Component
