import { connect } from 'react-redux';
import PromoProductBox from './PromoProductBox';
import { getNew, getHotDeal, handleFavourite } from '../../../redux/productsRedux';
import { getAll } from '../../../redux/categoriesRedux.js';

const mapStateToProps = state => ({
  categories: getAll(state),
  products: getNew(state),
  hotDeal: getHotDeal(state),
});

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PromoProductBox);
