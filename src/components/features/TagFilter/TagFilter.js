import React from 'react';
import PropTypes from 'prop-types';
import styles from './TagFilter.module.scss';
import Tags from '../Tags/Tags';

const TagFilter = () => (
  <div className={styles.filterWrapper}>
    <h6>FILTER BY TAG</h6>
    <hr></hr>
    <Tags></Tags>
  </div>
);

export default TagFilter;
