import "./Layout.scss"
import { Outlet } from "react-router-dom"
import Navigation from "../../Components/Navigation/Navigation"
import Footer from "../../Components/Footer/Footer"




const Layout = () => {
  return (
    <div className="container">
        <Navigation/>
        {/* <App/> */}
<Outlet />
        <Footer/> 
        <div className="qora">
           <div className="qora__one">
            <h3 className="qora__biz">© 2024 MChJ "BUXORA NATURAL PRODUCT". Barcha huquqlar himoyalangan.</h3>
           </div>
        </div>
      
    </div>
  )
}

export default Layout