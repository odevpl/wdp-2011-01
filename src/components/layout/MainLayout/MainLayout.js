import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import StickyBar from '../StickyBar/StickyBarContainer';
import Sale from '../../common/Sale/SaleContainer';

const MainLayout = ({ children }) => {
  const [sale, setSale] = useState(true);
  let history = useHistory();
  useEffect(() => {
    console.log(history.location.pathname);
    setSale(true);
  }, [history.location.pathname]);

  const closeSale = () => {
    setSale(false);
  };
  return (
    <div>
      <Header />
      {children}
      <StickyBar />
      <Footer />
      <Sale closeSale={closeSale} sale={sale} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
