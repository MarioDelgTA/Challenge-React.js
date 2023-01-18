import React, { useContext } from 'react';
import * as styles from '../layouts/public.module.css';
import NavItem from './NavItem';
import { AuthContext } from '../lib/contexts/AuthContext';
import { LOG_OUT } from '../lib/reducers/constants';
import { useNavigate } from 'react-router-dom';

const HeaderMenu = () => {
  console.info('render');
  const { dispatch, state } = useContext(AuthContext);
  const navigate = useNavigate();
  return state.user ? (
    <ul className={styles.headerMenu}>
      <NavItem to="/search" label="Search" />
      <NavItem to="/profile" label="Profile" />
      <NavItem
        to="search"
        label="Logout"
        clickHandler={(e) => {
          e.preventDefault();
          dispatch({
            type: LOG_OUT
          });
          navigate('/login');
        }}
      />
    </ul>
  ) : null;
};

export default HeaderMenu;
