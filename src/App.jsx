import Sidebar from "./layout/Sidebar/SideBar"
import Content from "./layout/Content/Content"

import './App.css'

const App = () => {
  return (
    <>
      <div className='app'>
        <Sidebar />
        <Content />
      </div>
    </>
  )
}

export default App
