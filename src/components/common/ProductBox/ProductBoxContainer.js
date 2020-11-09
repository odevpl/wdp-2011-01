import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { handleFavourite, handleStar, handleStyle } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
  handleStar: value => dispatch(handleStar(value)),
  handleStyle: value => dispatch(handleStyle(value)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
