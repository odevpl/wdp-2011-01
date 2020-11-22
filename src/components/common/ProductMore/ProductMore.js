import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductMore.module.scss';

class ProductMore extends React.Component {
  state = {
    activeCart: 'reviews(0)',
  };

  handleCartChange(newCart) {
    this.setState({ activeCart: newCart });
  }

  render() {
    const { more } = this.props;
    const { activeCart } = this.state;

    const showCart = more.filter(item => {
      for (let key in item) {
        return item[key].show === true;
      }
    });

    console.log(showCart);

    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.wrapper}>
            <ul className={styles.list}>
              {more.map(item => {
                for (let key in item) {
                  const preparedClass =
                    item[key].id === activeCart ? styles.active : styles.item;
                  return (
                    <li
                      className={preparedClass}
                      onClick={() => {
                        this.handleCartChange(item[key].id);
                      }}
                    >
                      {item[key].id}
                    </li>
                  );
                }
              })}
            </ul>
            {more.map(item => {
              for (let key in item) {
                const preparedClass =
                  item[key].id === activeCart ? styles.show : styles.hide;
                return <div className={preparedClass}>{item[key].id}</div>;
              }
            })}
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
