import React from 'react'
import Delete from './components/Delete'
import InputTouched from './components/InputTouched'
import User from './components/User'
import UseReducer from './components/UseReducer'

function App() {
  return (
    <div>
      <Delete />
      <br />
      <hr />
      <UseReducer />
      <br />
      <hr />
      <User />
      <br />
      <hr />
      <InputTouched />
    </div>
  )
}

export default App
