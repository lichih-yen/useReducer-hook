import React, { useReducer } from 'react'

const initialState = { count: 0 }

// const ACTION = [(INCREMENT = 'increment'), (DECREMENT = 'decrement')]

// const reducer = (state, action) => {
// refactor the code:
const reducer = ({ count }, { type, payload }) => {
  switch (type) {
    case 'increment':
      //   return { ...state, count: state.count + action.payload }
      // refactor the code:

      return { count: count + payload }
    case 'decrement':
      //   return { ...state, count: state.count - action.payload }
      // refactor the code:

      return { count: count - payload }
    case 'reset':
      return { count: 0 }
    default:
      //   throw new Error(`Unknown action type: ${action.type}`)
      // refactor the code:

      throw new Error(`Unknown action type: ${type}`)
  }
}

const UseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      <h1>useReducer Exercise</h1>
      <div
        style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignContent: 'center' }}
      >
        <div style={{ fontSize: '20px', textAlign: 'center' }}>Count: {state.count}</div>
        <button onClick={() => dispatch({ type: 'increment', payload: 1 })} style={{ margin: '5px' }}>
          +
        </button>
        <button onClick={() => dispatch({ type: 'decrement', payload: 1 })} style={{ margin: '5px' }}>
          -
        </button>
        <button onClick={() => dispatch({ type: 'reset' })} style={{ margin: '5px' }}>
          Reset
        </button>
      </div>
    </div>
  )
}

export default UseReducer
