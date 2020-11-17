import React from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import Banner from '../../features/Banner/BannerContainer';

const ProductList = () => (
  <div>
    <div className={styles.root}>This is ProductList</div>
    <Banner></Banner>
  </div>
);

// ProductList.propTypes = {};

export default ProductList;
