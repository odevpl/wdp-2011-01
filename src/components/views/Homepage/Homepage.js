import React from 'react';
import Sale from '../../common/Sale/SaleContainer';
import ProductMore from '../../common/ProductMore/ProductMoreContainer';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import PromoProducts from '../../features/PromoProducts/PromoProductsContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromoProducts />
    <FeatureBoxes />
    <Sale />
    <ProductMore />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
