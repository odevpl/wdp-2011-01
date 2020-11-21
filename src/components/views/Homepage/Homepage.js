import React from 'react';
import Sale from '../../common/Sale/SaleContainer';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import Feedback from '../../features/Feedback/FeedbackContainer';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <Sale />
    <NewFurniture />
    <Feedback />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
