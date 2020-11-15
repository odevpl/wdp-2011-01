import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.content}>
        <h1>
          Bedroom <span>Furniture</span>
        </h1>
        <h2>
          Always <span>25%</span> off or more
        </h2>
      </div>
      <div>
        <ul className={styles.breadcrumbs}>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              Home{' '}
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link_active}>
              Furniture
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

export default Banner;
