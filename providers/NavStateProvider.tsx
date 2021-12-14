import React, { useState } from 'react';
import MenuContext from '../contexts/nav-context';

const NavState = ({ children }: any) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <MenuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>
      {children}
    </MenuContext.Provider>
  );
};

export default NavState;
