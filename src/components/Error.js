import React, { useState, useRef, useEffect } from 'react';

//Redux
import { useSelector } from 'react-redux';

//Material ui
import Snackbar from '@material-ui/core/Snackbar';

export default function Error() {
  //state
  const [isOpen, setIsOpen] = useState(false);

  //redux selector
  const error = useSelector((state) => state.chatsStore.error);

  //ref
  const first = useRef(true);

  //Error snackbar timer for disappearing
  useEffect(() => {
    if (first.current) {
      first.current = false;
    } else if (error !== null) {
      setIsOpen(true);
      const timer = setTimeout(() => {
        setIsOpen(false);
      }, 5000);
      return () => clearTimeout(timer);
    } else {
      setIsOpen(false);
    }
  }, [error]);

  return (
    <Snackbar
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isOpen}
      autoHideDuration={3000}
      message={error}
    />
  );
}
