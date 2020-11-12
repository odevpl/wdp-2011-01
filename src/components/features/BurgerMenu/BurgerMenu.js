import React from 'react';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import HamburgerMenu from 'react-hamburger-menu';
import { NavLink } from 'react-router-dom';
import styles from './BurgerMenu.module.scss';

const BurgerMenu = () => {
  return (
    <Menu
      menuButton={
        <MenuButton>
          {' '}
          <HamburgerMenu />{' '}
        </MenuButton>
      }
    >
      <MenuItem>
        <NavLink exact to='/'>
          Home
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/'>
          Furniture
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/'>
          Chair
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/'>
          Table
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/'>
          Sofa
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/'>
          Bedroom
        </NavLink>
      </MenuItem>
      <MenuItem>
        <NavLink exact to='/'>
          Blog
        </NavLink>
      </MenuItem>
    </Menu>
  );
};

export default BurgerMenu;
