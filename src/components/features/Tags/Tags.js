import React from 'react';
import propTypes from 'prop-types';
import styles from './Tags.module.scss';
import Button from '../../common/Button/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTag } from '@fortawesome/free-solid-svg-icons';

const Tags = ({ tagsContent }) => (
  <div className={styles.buttons}>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>{tagsContent.firstTag}</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>{tagsContent.secondTag}</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>{tagsContent.thirdTag}</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>{tagsContent.forthTag}</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>{tagsContent.fifthTag}</p>
      </Button>
    </div>
    <div className={styles.button}>
      <Button className={styles.button} variant='outline'>
        <FontAwesomeIcon className={styles.icon} icon={faTag}></FontAwesomeIcon>
        <p>{tagsContent.sixthTag}</p>
      </Button>
    </div>
  </div>
);

Tags.propTypes = {
  tagsContent: propTypes.object,
};

export default Tags;
