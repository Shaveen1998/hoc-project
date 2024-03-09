import React from 'react'

function User() {

    const user = {
            name:'Shaveen',
            email:"shaveen@gmail.com"
    }
  return (
    <div>
      <p>{user.name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default User
