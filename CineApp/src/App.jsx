import Header from "./Componentes/Header"
import {Outlet} from "react-router-dom"

function App() {

  return (
    <>
    <div className="bg-quarternary-thompson">
      
     <Header/>
     <Outlet/>
    </div>
    </>
  )
}

export default App
