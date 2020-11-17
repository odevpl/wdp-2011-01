import React from 'react';
import styles from './Banner.module.scss';
import ReactHtmlParser from 'react-html-parser';
import PropTypes from 'prop-types';

const Banner = ({ bannerData }) => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.bar}></div>
      <div className={styles.content}>
        <h1>{ReactHtmlParser(bannerData.description)}</h1>
        <h2>{ReactHtmlParser(bannerData.bargain)}</h2>
      </div>
      <div>
        <ul className={styles.breadcrumbs}>
          <li className={styles.item}>
            <a href='#' className={styles.link}>
              {bannerData.home}
            </a>
          </li>
          <li className={styles.item}>
            <a href='#' className={styles.link_active}>
              {bannerData.furniture}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
);

Banner.propTypes = {
  bannerData: PropTypes.node,
};

export default Banner;
