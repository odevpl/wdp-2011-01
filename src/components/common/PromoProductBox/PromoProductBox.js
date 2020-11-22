import React from 'react';
import PropTypes from 'prop-types';

import styles from './PromoProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';

const PromoProductBox = ({
  id,
  name,
  price,
  promo,
  stars,
  olderPrice,
  handleFavourite,
  heart,
}) => {
  const favouriteHandler = e => {
    e.preventDefault();
    handleFavourite(id);
  };
  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <div className={styles.buttons}>
          <Button variant='small' className={styles.btnAddToCart}>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
          </Button>
        </div>
        <div className={styles.timersContainer}>
          <div className={styles.timerContainer}>
            <div className={styles.timerDescription}>
              <p>25</p>
              <p>days</p>
            </div>
          </div>
          <div className={styles.timerContainer}>
            <div className={styles.timerDescription}>
              <p>10</p>
              <p>hrs</p>
            </div>
          </div>
          <div className={styles.timerContainer}>
            <div className={styles.timerDescription}>
              <p>25</p>
              <p>min</p>
            </div>
          </div>
          <div className={styles.timerContainer}>
            <div className={styles.timerDescription}>
              <p>25</p>
              <p>sec</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <h5>lalala</h5>
        <div className={styles.stars}>
          {[1, 2, 3, 4, 5].map(i => (
            <a key={i} href='/'>
              {i <= stars ? (
                <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
              )}
            </a>
          ))}
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outlines}>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faEye}>Add to compare</FontAwesomeIcon>
          </Button>
          <Button
            className={heart ? styles.heart : ' '}
            variant='outline'
            onClick={favouriteHandler}
          >
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
          <Button variant='outline'>
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.olderPrice}>{olderPrice}</div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            $ 300.00
          </Button>
        </div>
      </div>
    </div>
  );
};

PromoProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  olderPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  handleFavourite: PropTypes.func.isRequired,
  heart: PropTypes.bool,
};

export default PromoProductBox;
