import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  handleFavourite,
  handleStar,
  handleStyle,
  handleCompare,
  getProduct,
} from '../../../redux/productsRedux';

const mapStateToProps = (state, product) => ({
  product: getProduct(state, product.id),
});

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
  handleStar: value => dispatch(handleStar(value)),
  handleStyle: value => dispatch(handleStyle(value)),
  handleCompare: value => dispatch(handleCompare(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ProductBox);
