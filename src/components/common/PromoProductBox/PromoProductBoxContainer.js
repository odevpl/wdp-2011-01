import { connect } from 'react-redux';
import PromoProductBox from './PromoProductBox';
import { handleFavourite } from '../../../redux/productsRedux';

const mapDispatchToProps = dispatch => ({
  handleFavourite: value => dispatch(handleFavourite(value)),
});

export default connect(null, mapDispatchToProps)(PromoProductBox);
