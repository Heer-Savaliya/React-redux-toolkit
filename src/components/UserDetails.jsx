  import React from 'react'
import DeleteAllUser from './DeleteAllUser'

const UserDetails = () => {
  return (
    <div>
      {/* Admin table */}
      <div>
      <div>
        <div>List of User Details</div>
        <button>Add New Users</button>
      </div>
      <ul>
        {/* <li>Hii</li>
        <li>Hyyyy</li> */}
      </ul>
      <hr />
      <DeleteAllUser />
      </div>
    </div>
  )
}

export default UserDetails
