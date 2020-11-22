import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import CategoryFilter from '../../features/CategoryFilter/CategoryFilterContainer';

const ProductList = () => (
  <div>
    <div className={styles.root}>
      This is ProductList
      <CategoryFilter />
    </div>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
