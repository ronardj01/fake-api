import React from 'react';
import UserLine from './UserLine';

const GetUsers = ({ users }) => {
  const header = users[0];
  const userInfo = users;

  return (
    <div>

      <table className='table'>
        <thead>
          <tr>
            {Object.keys(header).map((user, index) => (
              <th scope="col" key={`th-${index}`}>
                {user}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {userInfo.map((user, index) => (
            <UserLine user={user} key={'UserLine' + index}/>
          )) }
        </tbody>
      </table>

    </div>
  )
}

export default GetUsers