import { connect } from 'react-redux';
import Sale from './Sale';
import {
  getBargain,
  getGoldenChair,
  getYellowChair,
  getBed,
  getContent1,
  getContent2,
  getContent3,
  getPrice,
  getInfo,
  getSofa,
} from '../../../redux/saleRedux';

const mapStateToProps = state => ({
  bargain: getBargain(state),
  goldenChair: getGoldenChair(state),
  yellowChair: getYellowChair(state),
  bed: getBed(state),
  content1: getContent1(state),
  content2: getContent2(state),
  content3: getContent3(state),
  price: getPrice(state),
  info: getInfo(state),
  sofa: getSofa(state),
});

export default connect(mapStateToProps)(Sale);
