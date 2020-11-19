import React from 'react';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';
import { Link } from 'react-router-dom';

const Button = ({
  children,
  variant,
  noHover,
  className: propClassName,
  product,
  id,
  ...props
}) => {
  const classes = [];

  if (propClassName) classes.push(propClassName);
  if (variant) classes.push(styles[variant]);
  else classes.push('main');
  let Comp = 'a';

  if (noHover) {
    classes.push(styles.noHover);
    Comp = 'div';
  }

  return (
    <Comp to={`${product}/${id}`} className={classes.join(' ')} {...props}>
      {children}
    </Comp>
  );
};

Button.propTypes = {
  children: PropTypes.node,
  noHover: PropTypes.bool,
  className: PropTypes.string,
  variant: PropTypes.string,
  id: PropTypes.node,
  product: PropTypes.node,
};

export default Button;
