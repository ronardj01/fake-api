import React from 'react';
import UserLine from './UserLine';

const GetUsers = ({ results }) => {
  const header = results.users[0];
  const userInfo = results.users;

  console.log(userInfo)

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