import { connect } from 'react-redux';
import ProductBox from './ProductBox';
import { handleFavourite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
});

export default connect(null, mapDispatchToProps)(ProductBox);
