import React from 'react'
const Button=React.lazy(()=>import("HostComponent/Button"))
function App() {
  return (
    <div>
      This is App Components from MFE01
      <Button buttonName={"Clickhere"}></Button>
    </div>
  )
}

export default App
