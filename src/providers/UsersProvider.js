import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const UsersContext = React.createContext({
  users: [],
  handleAddUser: () => {},
  deleteUser: () => {},
});

const UsersProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get('/students')
      .then(({ data }) => setUsers(data.students))
      .catch((err) => console.log(err));
  }, []);

  // User delete function
  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);

    setUsers(filteredUsers);
  };

  // Adding a new user
  const handleAddUser = (values) => {
    const newUser = {
      name: values.name,
      attendance: values.attendance,
      average: values.average,
    };

    setUsers([newUser, ...users]);
  };
  return (
    <UsersContext.Provider
      value={{
        users,
        handleAddUser,
        deleteUser,
      }}
    >
      {children}
    </UsersContext.Provider>
  );
};

export default UsersProvider;
