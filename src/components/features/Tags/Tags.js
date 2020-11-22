import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tags.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

const Tags = () => (
  <div className={styles.buttons}>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>Table</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>Chair</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>Hand Bag</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>Fashion</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>Women</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>Fashion</p>
      </Button>
    </div>
  </div>
);

export default Tags;
