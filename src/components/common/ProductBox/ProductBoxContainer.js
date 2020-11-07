import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { handleFavourite, handleCompare } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
  handleCompare: value => dispatch(handleCompare(value)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
