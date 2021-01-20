import { connect } from 'react-redux';
import CompanyClaim from './CompanyClaim';
import { getAll } from '../../../redux/productsRedux.js';

const mapStateToProps = state => ({
  products: getAll(state),
});

export default connect(mapStateToProps)(CompanyClaim);
