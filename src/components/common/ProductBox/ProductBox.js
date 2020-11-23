import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt, faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import Stars from '../Stars/StarsContainer';

const ProductBox = ({
  image,
  name,
  price,
  promo,
  heart,
  arrow,
  stars,
  olderPrice,
  handleFavourite,
  id,
  handleStar,
  handleStyle,
  starChange,
  handleCompare,
  compare,
}) => {
  const favouriteHandler = e => {
    e.preventDefault();
    handleFavourite(id);
  };
  const compareHandler = e => {
    e.preventDefault();
    handleCompare(id);
  };
  return (
    <div className={styles.root}>
      <Link to={`/product/${id}`}>
        <div className={styles.photo}>
          <img src={image} />
          {promo && <div className={styles.sale}>{promo}</div>}
          <div className={styles.buttons}>
            <Link className={styles.quickView}>
              <Button variant='small' className={styles.quickView}>
                Quick View
              </Button>
            </Link>
            <Link className={styles.quickView}>
              <Button variant='small' className={styles.quickView}>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
            </Link>
          </div>
        </div>
      </Link>
      <div className={styles.content}>
        <Link to={`/product/${id}`}>
          <h5>{name}</h5>
        </Link>
        <Stars
          rate={stars}
          handleStar={handleStar}
          id={id}
          handleStyle={handleStyle}
          starChange={starChange}
        />
      </div>
      <div className={styles.line}></div>
      <div className={styles.actions}>
        <div className={styles.outline}>
          <Button className={heart ? styles.heart : ''} variant='outline'>
            <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
          </Button>
        </div>
        <div className={styles.outline}>
          <Button
            className={compare ? styles.compare : ' '}
            variant='outline'
            onClick={compareHandler}
          >
            <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
          </Button>
        </div>

        <div className={styles.outline}></div>
        <div className={styles.outline}></div>

        <div className={styles.olderPrice}>
          <span className='text-right'>{olderPrice}</span>
        </div>
        <div className={styles.price}>
          <Button noHover variant='small'>
            <h5>$ {price}</h5>
          </Button>
        </div>
      </div>
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  olderPrice: PropTypes.string,
  promo: PropTypes.string,
  stars: PropTypes.number,
  image: PropTypes.node,
  handleFavourite: PropTypes.func.isRequired,
  handleCompare: PropTypes.func.isRequired,
  heart: PropTypes.bool,
  handleStar: PropTypes.func,
  handleStyle: PropTypes.func,
  starChange: PropTypes.bool,
  compare: PropTypes.bool,
  arrow: PropTypes.bool,
};

export default ProductBox;
