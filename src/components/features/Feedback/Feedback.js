import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Feedback.module.scss';

class Feedback extends React.Component {
  state = {
    activePage: 0,
  };

  handlePageChange(no) {}

  render() {
    const { feedback, count } = this.props;
    const { activePage } = this.state;
    const item = feedback[0];

    const dots = [];
    for (let i = 0; i < count; i++) {
      dots.push(
        <li key={i}>
          <a
            href='/'
            onClick={() => this.handlePageChange(i)}
            className={i === activePage ? styles.active : ''}
          >
            page {i}
          </a>
        </li>
      );
    }

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-12 ' + styles.heading}>
                <h3>Client feedback</h3>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
            <div key={item.id} className={'row justify-content-center ' + styles.item}>
              <div className='row justify-content-center'>
                <div className={'col-2 ' + styles.subitem}>
                  <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
                </div>
                <div className={'col-12 ' + styles.subitem}>{item.content}</div>
              </div>
              <div className={'row subitem justify-content-center ' + styles.subitem}>
                <img className='col-1' src={item.photo} alt='' />
                <div className='col-2'>
                  <h3>{item.name}</h3>
                  <h4>{item.position}</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Feedback.propTypes = {
  feedback: PropTypes.array.isRequired,
  count: PropTypes.number.isRequired,
};

export default Feedback;
