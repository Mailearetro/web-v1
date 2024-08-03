
import { Outlet } from 'react-router-dom'
import {Header} from './components/index'
import {Footer} from './components/index'

function App() {
  return (
    <div  >
      dsds
    <Header/>
        <Outlet />
    <Footer/>
    </div>
  )
}

export default App
