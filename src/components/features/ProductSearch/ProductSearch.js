import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';
import BurgerMenu from '../../features/BurgerMenu/BurgerMenu';
import styles from './ProductSearch.module.scss';

const ProductSearch = () => (
  <div className={styles.wrapper}>
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <div className={styles.dropdown}>
          <div className={styles.dropdownContainer}>
            <span>select category</span>
          </div>
          <div className={styles.dropdownContent}>
            <a href='/shop/furniture'>furniture</a>
            <a href='#'>chair</a>
            <a href='#'>table</a>
            <a href='#'>sofa</a>
            <a href='#'>bedroom</a>
            <a href='#'>blog</a>
          </div>
        </div>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder='Search products...' type='text' />
        <Button className={styles.searchButton}>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </Button>
      </div>
    </form>
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
