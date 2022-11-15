import { useReducer } from 'react'

const initialValue = {
  value: '',
  touched: false,
  error: null,
}

const reducer = (state, { type, payload }) => {
  switch (type) {
    case 'update':
      return {
        ...state,
        value: payload.value,
        touched: true,
        error: payload.error,
      }
    case 'reset':
      return initialValue
    default:
      throw new Error(`Unknown action type: ${type}`)
  }
}

const InputTouched = () => {
  const [state, dispatch] = useReducer(reducer, initialValue)

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <input
        className={state.error ? 'error' : ''}
        value={state.value}
        onChange={(event) =>
          dispatch({
            type: 'update',
            payload: {
              value: event.target.value,
              error: state.touched ? event.target.value.length === 0 : null,
            },
          })
        }
      />
      <button onClick={() => dispatch({ type: 'reset' })} style={{ padding: '8px' }}>
        Reset
      </button>
    </div>
  )
}

export default InputTouched
