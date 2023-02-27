import React from 'react'



function MyAccount(user) {
  return (
    <div>
        <p>votre Nom est : {user.username}</p>
        <p>votre mdp est : {user.password}</p>
    </div>
  )
}

export default MyAccount