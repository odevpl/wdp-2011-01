import { checkPropTypes } from 'prop-types';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const UserContext = React.createContext();

const getUserFromLocalStorage = () => {
  console.log('aa');
};

const UserProvider = ({ children }) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  let [data, setData] = useState('');

  const userLogin = (user, password) => {
    data = {
      name: setUser(user),
      password: setPassword(password),
    };

    console.log(data);
    return setData(data);
  };

  const userLogout = () => {
    setUser('');
  };

  return (
    <div>
      <UserContext.Provider
        value={{ user, password, setPassword, userLogin, userLogout }}
      >
        {children}
      </UserContext.Provider>
    </div>
  );
};

UserProvider.propTypes = {
  children: PropTypes.node,
};

export default UserProvider;
