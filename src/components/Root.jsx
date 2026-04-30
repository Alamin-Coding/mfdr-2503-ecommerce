import { Outlet } from "react-router"
import Header from "./Header"
import Footer from "./Footer"
import { ToastContainer } from 'react-toastify';

const Root = () => {
  return (
    <main>
      <ToastContainer />
        <Header/>
        <Outlet/>
        <Footer/>
    </main>
  )
}

export default Root