import { useState } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import useCurrentPageName from '../../../hooks/use-current-page-name';

import { emptyArray } from '../../../prop-types/empty';
import style from './style.module.scss';

const NavBar = ({ children }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  // const currentPage =
  useCurrentPageName();
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={style['bar-container']}>
          <div className={style['generic-section']}>
            <IconButton edge='start' color='inherit' aria-label='menu'>
              <MenuIcon />
            </IconButton>
            <Typography variant='h6'>Photos</Typography>
          </div>
          <div className={style['generic-section']}>
            <IconButton
              aria-label='account of current user'
              aria-controls='menu-appbar'
              aria-haspopup='true'
              onClick={handleMenu}
              color='inherit'
            >
              <AccountCircle />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={open}
              onClose={handleClose}
            >
              {children.map((child, index) => (
                <MenuItem key={index} onClick={handleClose}>{child}</MenuItem>
              ))}
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  children: PropTypes.arrayOf(PropTypes.node),
};

NavBar.defaultProps = {
  children: emptyArray,
};

export default NavBar;
