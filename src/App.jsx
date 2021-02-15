import React from 'react'
import Component1 from './Component1'

function App() {

  return (
    <div className="App">
      <h1>Pass a value to the component via props below!</h1>
      <h5>TODO 1 = define a props value as a attribute of Component1</h5>

      <Component1 myFirstPropsAttribute="100"/>
    </div>
  )
}

export default App
