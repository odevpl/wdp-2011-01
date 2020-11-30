import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faSearch,
  faShoppingCart,
  faLock,
} from '@fortawesome/free-solid-svg-icons';
import BurgerMenu from '../../features/BurgerMenu/BurgerMenu';
import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <div className={styles.wrapper}>
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <div className={styles.searchField}>
          <input placeholder='Search products...' type='text' />
          <Button className={styles.searchButton}>
            <FontAwesomeIcon className={styles.icon} icon={faSearch} />
          </Button>
        </div>
      </div>
    </form>
    <div className={styles.user}>
      <ul className={styles.list}>
        <li>
          <a href='/'>
            <FontAwesomeIcon className={styles.icon} icon={faUser} />
            <span className={styles.topMenuText}>Login</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon className={styles.icon} icon={faLock} />
            <span className={styles.topMenuText}>Register</span>
          </a>
        </li>
        <li>
          <a href='/'>
            <FontAwesomeIcon className={styles.icon} icon={faShoppingCart} />
            <span className={styles.topMenuText}>Cart</span>
          </a>
        </li>
      </ul>
    </div>
    <span className={styles.burgerWrapper}>
      {' '}
      <BurgerMenu className={styles.burger} />
    </span>
  </div>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
