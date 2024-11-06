import "./Menu.scss"
import { Link } from "react-router-dom"

const Menu = () => {
  return (
    <div className="modalka">
    <ul className="modalka__menu">
      <Link to={"/uy"}>Uy</Link>
      <div className="modalka__line"></div>
      <Link to={"/haqimizda"}>Biz Haqimizda</Link>
      <div className="modalka__line"></div>
      <Link to={"/toplam"}>To'plam</Link>
      <div className="modalka__line"></div>
      <Link to={"/kontakt"}>Kontakt</Link>
    </ul>
 </div>
  )
}

export default Menu