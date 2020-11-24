import React from 'react';
import PropTypes from 'prop-types';
import styles from './TagsFilters.module.scss';
import Tags from '../Tags/TagsContainer';

const TagFilter = () => (
  <div className={styles.filterWrapper}>
    <h6>FILTER BY TAG</h6>
    <hr></hr>
    <Tags></Tags>
  </div>
);

export default TagFilter;
