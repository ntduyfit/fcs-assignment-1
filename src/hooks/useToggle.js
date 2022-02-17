import React, { useState } from 'react';

const useToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleOpen = () => {
    setIsOpen(true);
  };

  return { isOpen, handleOpen, handleClose };
};

export default useToggle;
