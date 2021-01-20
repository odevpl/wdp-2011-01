import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import {
  handleAddToCart,
  handleStar,
  handleStyle,
  handleCompare,
} from '../../../redux/productsRedux';
import { handleCompareValue } from '../../../redux/compareRedux';

const mapDispatchToProps = dispatch => ({
  handleAddToCart: value => dispatch(handleAddToCart(value)),
  handleStar: value => dispatch(handleStar(value)),
  handleStyle: value => dispatch(handleStyle(value)),
  handleCompare: value => dispatch(handleCompare(value)),
  handleCompareValue: value => dispatch(handleCompareValue(value)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
