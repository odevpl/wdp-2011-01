import React from 'react';
import styles from './ColorFilter.module.scss';

const ColorFilter = () => (
  <div className={styles.filterWrapper}>
    <h6>FILTER BY COLOR</h6>
    <hr></hr>
    <div className={styles.colorWrapper_active}>
      <span className={styles.red}></span>
      <p>Red</p>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.black}></span>
      <p>Black</p>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.yellow}></span>
      <p>Yellow</p>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.blue}></span>
      <p>Blue</p>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.pink}></span>
      <p>Pink</p>
    </div>
    <div className={styles.colorWrapper}>
      <span className={styles.green}></span>
      <p>Green</p>
    </div>
  </div>
);

export default ColorFilter;
