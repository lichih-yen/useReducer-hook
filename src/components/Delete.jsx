import React, { useState } from 'react'
import users from '../data'

function Delete() {
  const [data, setData] = useState(users)

  const handleRemove = (id) => {
    let newData = data.filter((item) => item.id !== id)
    setData(newData)
  }
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Practice</h1>
      <hr />
      <div>
        {data.map((user) => (
          <div
            key={user.id}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px' }}
          >
            {user.id + '. '}
            {user.username}
            <button onClick={() => handleRemove(user.id)} style={{ marginLeft: '50px', padding: '3px' }}>
              Remove
            </button>
          </div>
        ))}
      </div>
      <div>{data.length === 0 ? 'No more data can be removed.' : null}</div>
    </div>
  )
}

export default Delete
