import React from 'react'

const UserLine = ({ user }) => {
  return (
    <tr>
      {Object.values(user).map((element, index) => (
        <td key={`td-${index}`}>
          {element}
        </td>
      ))}
    </tr>
  )
}
export default UserLine