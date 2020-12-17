import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './CompanyFilter.module.scss';

const CompanyFilter = ({
  products,
  category,
  companies,
  categoryProducts,
  setCategoryProducts,
  setCompanyValues,
}) => {
  const [filteredCompany, setFilteredCompany] = useState([]);
  const [chosenCompany, setChosenCompany] = useState(false);
  const noDuplicateCompanies = {};
  for (let i = 0; i < companies.length; i++) {
    noDuplicateCompanies[companies[i]] = (noDuplicateCompanies[companies[i]] || 0) + 1;
  }

  const uniqueCompany = [];
  for (let key in noDuplicateCompanies) {
    const productByManufacturer = products.filter(product => {
      return product.manufacturer === key && product.category === category;
    });
    uniqueCompany.push({
      name: key,
      amount: productByManufacturer.length,
    });
  }

  const handleChange = e => {
    setChosenCompany(!chosenCompany);
    setCategoryProducts(products.filter(item => item.category === category));
    if (e.target.checked) {
      if (filteredCompany.indexOf(e.target.name) === -1) {
        filteredCompany.push(e.target.name);
      }
    } else {
      if (filteredCompany.indexOf(e.target.name) > -1) {
        const index = filteredCompany.indexOf(e.target.name);
        filteredCompany.splice(index, 1);
      }
    }
  };

  useEffect(() => {
    setCompanyValues(filteredCompany);
    if (filteredCompany.length === 0) {
      setCategoryProducts(products.filter(item => item.category === category));
    } else {
      let filteredProductList = categoryProducts.filter(product =>
        filteredCompany.includes(product.manufacturer)
      );
      setTimeout(() => {
        setCategoryProducts(filteredProductList);
      }, 500);
    }
  }, [
    category,
    categoryProducts,
    chosenCompany,
    filteredCompany,
    products,
    setCategoryProducts,
    setCompanyValues,
  ]);

  return (
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}> Filter by Company </h3>
        <form className={styles.list}>
          {uniqueCompany.map((company, index) => {
            return (
              <div key={index}>
                <input
                  type='checkbox'
                  id={company.name}
                  name={company.name}
                  //checked={products[company.name]}
                  onChange={e => handleChange(e)}
                />
                <label htmlFor={company.name}>
                  {company.name} <span>({company.amount})</span>
                </label>
              </div>
            );
          })}
        </form>
      </div>
    </div>
  );
};

CompanyFilter.propTypes = {
  products: PropTypes.array,
  category: PropTypes.string,
  companies: PropTypes.array,
  categoryProducts: PropTypes.array,
  setCategoryProducts: PropTypes.func,
  setCompanyValues: PropTypes.func,
};

export default CompanyFilter;
