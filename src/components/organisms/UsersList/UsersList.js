import React, { useState, useEffect } from 'react';
import { users as usersData } from 'data/users';
import UsersListItem from 'components/molecules/UsersListItem/UsersListItem';
import { Wrapper, StyledList } from './UsersList.styles';

const mockAPI = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usersData) {
        resolve([...usersData]);
      } else {
        reject({ message: 'Error' });
      }
    }, 2000);
  });
};

const UsersList = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoadingState] = useState([]);

  useEffect(() => {
    setLoadingState(true);
    mockAPI()
      .then((data) => {
        setLoadingState(false);
        setUsers(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteUser = (name) => {
    const filteredUsers = users.filter((user) => user.name !== name);

    setUsers(filteredUsers);
  };

  return (
    <Wrapper>
      <h1>{isLoading ? 'Loading...' : 'Users List'}</h1>
      <StyledList>
        {users.map((userData) => (
          <UsersListItem deleteUser={deleteUser} key={userData.name} userData={userData} />
        ))}
      </StyledList>
    </Wrapper>
  );
};

export default UsersList;

// For example - class component:

// class UsersList extends React.Component {
//   state = {
//     users: [],
//     isLoading: false,
//   };

//   componentDidMount() {
//     this.setState({ isLoading: true });
//     mockAPI()
//       .then((data) => {
//         this.setState({ isLoading: false });
//         this.setState({ users: data });
//       })
//       .catch((err) => console.log(err));
//   }

//   componentDidUpdate(prevState) {
//     if (prevState.isLoading !== this.state.isLoading) {
//       console.log('Loading state has changed');
//     }
//   }

//   deleteUser = (name) => {
//     const filteredUsers = this.state.users.filter((user) => user.name !== name);

//     this.setState({ users: filteredUsers });
//   };

//   render() {
//     return (
//       <Wrapper>
//         <h1>{this.state.isLoading ? 'Loading...' : 'Users List'}</h1>
//         <StyledList>
//           {this.state.users.map((userData) => (
//             <UsersListItem deleteUser={this.deleteUser} key={userData.name} userData={userData} />
//           ))}
//         </StyledList>
//       </Wrapper>
//     );
//   }
// }
