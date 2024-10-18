import { Outlet } from "react-router-dom"
import Navbar from "../Pages/Navbar/Navbar"

function Root() {

  return (
    <div>
      <Navbar></Navbar>
      
      <Outlet/>
    </div>
  )
}

export default Root