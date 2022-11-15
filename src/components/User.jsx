import React, { useReducer } from 'react'

const initialState = {
  username: '',
  email: '',
}

const reducer = (state, action) => {
  switch (action.type) {
    // case 'username':
    //   return { ...state, username: action.payload }
    // case 'email':
    //   return { ...state, email: action.payload }

    // refactor the code:
    case 'textInput':
      return { ...state, [action.payload.key]: action.payload.value }
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

const User = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <input
        // type="text"
        value={state.username}
        style={{ margin: '5px', padding: '5px' }}
        // onChange={(event) => dispatch({ type: 'username', payload: event.target.value })}

        // refactor the codes => (key, value)
        onChange={(event) => dispatch({ type: 'textInput', payload: { key: 'username', value: event.target.value } })}
      />
      <input
        // type="email"
        value={state.email}
        style={{ margin: '5px', padding: '5px' }}
        // onChange={(event) => dispatch({ type: email, paylaoad: event.target.value })}

        // refactor the codes => (key, value)
        onChange={(event) => dispatch({ type: 'textInput', payload: { key: 'email', value: event.target.value } })}
      />
    </div>
  )
}

export default User
