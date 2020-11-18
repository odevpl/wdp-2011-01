import { connect } from 'react-redux';
import PromoProducts from './PromoProducts';
import { handleFavourite } from '../../../redux/productsRedux';

import { getAll } from '../../../redux/categoriesRedux.js';
import { getNew, getHotDeal, getPromo } from '../../../redux/productsRedux.js';

const mapStateToProps = state => {
  const products = getNew(state);
  const categories = getAll(state);
  const hotDeal = getHotDeal(state);
  const getPromos = getPromo(state);
  return {
    products,
    categories,
    hotDeal,
    ...getPromos,
  };
};

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoProducts);
