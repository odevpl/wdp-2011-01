import React from 'react';
import Sale from '../../common/Sale/SaleContainer';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import FeaturedProducts from '../../features/FeaturedProducts/FeaturedProducts';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <FeaturedProducts />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
