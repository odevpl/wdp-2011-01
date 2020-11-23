import React from 'react';
import PropTypes from 'prop-types';
import styles from './CategoryFilter.module.scss';

const CategoryFilter = ({ categories }) => {
  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}> Filter by categories </h3>
        <ul className={styles.list}>
          {categories.map(category => (
            <li key={category.id} className={styles.item}>
              &gt; {category.id}
              <span className={styles.amount}>{category.amount}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

CategoryFilter.propTypes = {
  categories: PropTypes.array,
};

export default CategoryFilter;
