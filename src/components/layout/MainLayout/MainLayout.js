import React, { useState, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StickyBar from '../StickyBar/StickyBarContainer';
import Sale from '../../common/Sale/SaleContainer';

const MainLayout = ({ children }) => {
  const [sale, setSale] = useState(true);
  const history = useHistory();

  history.listen(() => {
    setSale(true);
  });

  return (
    <div>
      <Header />
      {children}
      <StickyBar />
      <Footer />
      <Sale sale={sale} setSale={setSale} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
