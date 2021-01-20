import { connect } from 'react-redux';
import PromoProducts from './PromoProducts';

import { getAll } from '../../../redux/categoriesRedux.js';
import {
  getNew,
  getHotDeal,
  getPromo,
  getPromoCategory,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => {
  const products = getNew(state);
  const categories = getAll(state);
  const hotDeal = getHotDeal(state);
  const getPromos = getPromo(state);
  const promoCategory = getPromoCategory(state);
  return {
    products,
    categories,
    hotDeal,
    promoCategory,
    ...getPromos,
  };
};

export default connect(mapStateToProps)(PromoProducts);
