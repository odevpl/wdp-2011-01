import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import TagFilter from '../../features/TagFilter/TagFilter';
import ColorFilter from '../../features/ColorFilter/ColorFilter';

const ProductList = () => (
  <div>
    <div className={styles.root}>This is ProductList</div>
    <ColorFilter />
    <TagFilter />
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
