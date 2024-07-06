// #region Imports

/* React */
import { type MouseEvent, useContext, useRef, useState } from 'react';

/* Classnames */
import classnames from 'classnames';

/* SPNNR */
import { EntriesContext } from '../context';

// #endregion Imports

// #region Component

export function CaseHeader() {
  // #region Input Field

  const inputField = useRef<HTMLInputElement | null>(null);
  const [hasFocus, setHasFocus] = useState<boolean>(false);

  // #endregion Input Field

  // #region Entries

  const { addEntry } = useContext(EntriesContext);

  function onAddEntry(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();

    const input = inputField.current;
    if (!input) {
      return;
    }

    const entry = input.value;
    addEntry(entry);

    input.value = '';
    input.focus();
  }

  // #endregion Entries

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
        ref={inputField}
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
      <button type="button" onMouseDown={onAddEntry}>
        +
      </button>
    </div>
  );
}

// #endregion Component
