import { connect } from 'react-redux';
import Cart from './Cart';
import {
  getAll,
  handleCartCounterChange,
  resetCounter,
  resetAllCounters,
} from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

const mapDispatchToProps = dispatch => ({
  handleCartCounterChange: (value, id) => dispatch(handleCartCounterChange(value, id)),
  resetCounter: id => dispatch(resetCounter(id)),
  resetAllCounters: () => dispatch(resetAllCounters()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
