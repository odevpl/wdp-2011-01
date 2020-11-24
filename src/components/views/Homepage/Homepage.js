import React from 'react';
import Sale from '../../common/Sale/SaleContainer';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';
import Gallery from '../../common/Gallery/GalleryContainer';
import PromoProducts from '../../features/PromoProducts/PromoProductsContainer';

const Homepage = () => (
  <div className={styles.root}>
    <PromoProducts />
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <Gallery />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
