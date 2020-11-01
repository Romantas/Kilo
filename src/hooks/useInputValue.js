/*
 Custom hook for inserting and changing input value
*/

import { useState } from 'react';

export default function useInputValue(initialState = '') {
  const [value, setValue] = useState(initialState);

  const onChange = (e) => {
    //To clean up value after input submission
    if (e === undefined) {
      setValue('');
      return;
    }
    setValue(e.target.value);
  };

  return {
    value,
    onChange,
  };
}
