import React, { useRef, useState } from 'react';
import MoreIcon from '@material-ui/icons/MoreHoriz';
import { IconButton, Menu, MenuItem } from '@material-ui/core';

const Actions = ({ children }) => {
  const moreRef = useRef(null);
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(true);
  };

  const handleMenuClose = () => {
    setOpenMenu(false);
  };
  return (
    <>
      <IconButton onClick={handleMenuOpen} ref={moreRef} size="small">
        <MoreIcon />
      </IconButton>
      <Menu
        anchorEl={moreRef.current}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
        elevation={1}
        onClose={handleMenuClose}
        open={openMenu}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left'
        }}
      >
        {React.Children.map(children, (child) => (
          <MenuItem>{React.cloneElement(child)}</MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default Actions;
