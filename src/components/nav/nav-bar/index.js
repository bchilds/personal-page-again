import { useState, useContext } from 'react';
import { PageContext } from '../../../contexts/page-context';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { makeStyles } from '@material-ui/core/styles';

import { emptyArray } from '../../../prop-types/empty';
import style from './style.module.scss';

const useMenuStyles = makeStyles({
  list: {
    minWidth: '10rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
});

const useListItemStyles = makeStyles({
  button: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  }
});

const NavBar = ({ children }) => {
  const { currentPageName } = useContext(PageContext);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const listItemStyles = useListItemStyles();

  return (
    <div>
      <AppBar position='static'>
        <Toolbar className={style['bar-container']}>
          <div className={style['generic-section']}>
            <IconButton
              edge='start'
              color='inherit'
              aria-label='menu'
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id='menu-appbar'
              anchorEl={anchorEl}
              keepMounted
              open={open}
              onClose={handleClose}
              classes={useMenuStyles()}
            >
              {children.map((child, index) => (
                <MenuItem
                  key={index}
                  onClick={handleClose}
                  className={style['menu-item']}
                  disableGutters
                  button
                  ListItemClasses={listItemStyles}
                >
                  {child}
                </MenuItem>
              ))}
            </Menu>
            <Typography variant='h6'>{currentPageName}</Typography>
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
