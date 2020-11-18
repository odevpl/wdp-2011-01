import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

import styles from './PromoProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
  faEye,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart } from '@fortawesome/free-regular-svg-icons';

class PromoProductBox extends React.Component {
  render() {
    const { name, price, olderPrice, image, imageAlt } = this.props;
    return (
      <div className={styles.root}>
        <div className={`${styles.photo}`}>
          <img src={image} alt={imageAlt} />
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
          <h5>{name}</h5>
          <div className={styles.stars}>
            {[1, 2, 3, 4, 5].map(i => (
              <a key={i} href='/'>
                {i <= 'stars' ? (
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
              //className={heart ? styles.heart : ' '}
              variant='outline'
              //onClick={favouriteHandler}
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
              $ {price}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}

PromoProductBox.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  olderPrice: PropTypes.string,
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default PromoProductBox;
