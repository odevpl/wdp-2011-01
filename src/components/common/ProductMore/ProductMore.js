import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductMore.module.scss';

class ProductMore extends React.Component {
  state = {
    activeCart: 'reviews(0)',
  };

  render() {
    const { more } = this.props;
    const { activeCart } = this.state;

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {more.map(item => {
                for (let key in item) {
                  const preparedClass =
                    item[key].id === activeCart ? styles.active : '';
                  return <li className={preparedClass}>{item[key].id}</li>;
                }
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

ProductMore.propTypes = {
  more: PropTypes.array.isRequired,
};

export default ProductMore;
