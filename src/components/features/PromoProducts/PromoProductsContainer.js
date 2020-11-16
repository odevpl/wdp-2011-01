import { connect } from 'react-redux';

import PromoProducts from './PromoProducts';
import {
  getPromo,
  getHotDeal,
  handleFavourite,
  changeHotDeal,
} from '../../../redux/productsRedux';

const mapStateToProps = state => {
  const promoProducts = getPromo(state);
  const hotDealProducts = getHotDeal(state);

  return {
    ...promoProducts,
    hotDealProducts,
  };
};

const mapDispatchToProps = dispatch => ({
  changeHotDeal: value => dispatch(changeHotDeal(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoProducts);
