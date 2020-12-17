import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './RatingFilters.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const RatingFilters = ({
  products,
  category,
  categoryProducts,
  setCategoryProducts,
  setRatingValues,
}) => {
  const [starRating, setStarRating] = useState(0);
  const handleStarRating = rating => {
    setStarRating(rating);
    setCategoryProducts(products.filter(item => item.category === category));
  };

  useEffect(() => {
    setRatingValues(starRating);
    const filteredProduct = categoryProducts.filter(
      product => product.stars >= starRating
    );
    setTimeout(() => {
      setCategoryProducts(filteredProduct);
    }, 500);
  }, [categoryProducts, setCategoryProducts, setRatingValues, starRating]);

  return (
    <div className={styles.root}>
      <h3 className={styles.header}> Avg. Customer Rating </h3>
      <div className={styles.starsContainer}>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(4)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(3)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(2)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
        <div className={styles.starsContainerInner} onClick={() => handleStarRating(1)}>
          <FontAwesomeIcon className={styles.stars} icon={faStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <FontAwesomeIcon className={styles.stars} icon={farStar} />
          <span>& Up</span>
        </div>
      </div>
    </div>
  );
};

RatingFilters.propTypes = {
  products: PropTypes.array,
  getProductByPrice: PropTypes.array,
  category: PropTypes.string,
  categoryProducts: PropTypes.array,
  setCategoryProducts: PropTypes.func,
  setRatingValues: PropTypes.func,
};

export default RatingFilters;
