import { connect } from 'react-redux';
import Sale from './Sale';
import { getSale } from '../../../redux/saleRedux';

const mapStateToProps = state => ({
  saleContent: getSale(state),
});

export default connect(mapStateToProps)(Sale);
