// #region Imports

/* React */
import { useState } from 'react';

/* Classnames */
import classnames from 'classnames';

// #endregion Imports

// #region Component

export function CaseHeader() {
  // #region Focus

  const [hasFocus, setHasFocus] = useState<boolean>(false);

  // #endregion Focus

  return (
    <div
      className={classnames(
        'pb-2 flex flex-row gap-4',
        'border-b-2',
        hasFocus ? 'border-orange-700' : 'border-black',
      )}
    >
      {/* Label */}
      <span
        className={classnames('px-2 border border-black', 'text-xl font-bold')}
      >
        A
      </span>

      {/* Input */}
      <input
        className={classnames(
          'flex-1',
          'outline-none',
          'text-xl text-blue-700 tracking-wider font-[family-name:var(--handwriting-font)]',
        )}
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
