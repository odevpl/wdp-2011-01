import React from 'react';
import PropTypes from 'prop-types';

import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
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
  </div>
);

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
