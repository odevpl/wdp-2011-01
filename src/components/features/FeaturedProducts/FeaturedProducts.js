import React from 'react';
import styles from './FeaturedProducts.module.scss';
import Button from '../../common/Button/Button';

const FeaturedProducts = () => (
  <div className={styles.filterWrapper}>
    <div className={styles.title}>
      <h6>FEATURED PRODUCTS</h6>
    </div>
    <div className={styles.products}>
      <div className={styles.product}>
        <div className={styles.image}>
          <img
            src='https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg'
            alt=''
          />
        </div>
        <div className={styles.content}>
          <p>Office Chair</p>
          <h5>$350.00</h5>
          <Button className={styles.button} variant='outline'>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
    <div className={styles.products}>
      <div className={styles.product}>
        <div className={styles.image}>
          <img
            src='https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg'
            alt=''
          />
        </div>
        <div className={styles.content}>
          <p>Office Chair</p>
          <h5>$350.00</h5>
          <Button className={styles.button} variant='outline'>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
    <div className={styles.products}>
      <div className={styles.product}>
        <div className={styles.image}>
          <img
            src='https://images.pexels.com/photos/1957478/pexels-photo-1957478.jpeg'
            alt=''
          />
        </div>
        <div className={styles.content}>
          <p>Office Chair</p>
          <h5>$350.00</h5>
          <Button className={styles.button} variant='outline'>
            Add to cart
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default FeaturedProducts;
