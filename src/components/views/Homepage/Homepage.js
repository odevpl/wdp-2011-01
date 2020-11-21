import React from 'react';
import Sale from '../../common/Sale/SaleContainer';
<<<<<<< HEAD
=======
import Gallery from '../../common/Gallery/GalleryContainer';
>>>>>>> a074401... status after resolved problems to do task
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <Gallery />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
