import React from 'react'
import Component011 from '../components/Component01'
const Component01=React.lazy(()=>import("MicroFrontend1/Component01"))
const Component02=React.lazy(()=>import("MicroFrontend1/Component02"))
function App() {
  return (
    <div>
      This is App Components
      <Component01></Component01>
      <Component02></Component02>
      <Component011></Component011>
    </div>
  )
}

export default App
