import "./Footer.scss"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer__div">
            <div className="footer__bukhara">
                <img className="footer__icon" src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                <p className="footer__pi">“Bukhara Natural Product” ko'p yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.</p>
            </div>
            <div className="footer__menyu">
                <ul className="footer__ul">Menyu
                <Link className="footer__li" to={"/uy"}>Uy</Link>
                <Link className="footer__li" to={"/toplam"}>To'plam</Link>
                <Link className="footer__li" to={"/haqimizda"}>Biz Haqimizda</Link>
                <Link className="footer__li" to={"/kontakt"}>Kontaktlar</Link>
                </ul>
            </div>
            <div className="footer__con">
                <ul className="footer__kontakt">
                    <li>Buxoro, st. Alpomish 80.</li>
                    <li>Bnpuz@bk.ru</li>
                    <li>bnp_fabrik</li>
                    <li>info@bnpfabric.com</li>
                    <li>+998 93 383 75 85</li>
                    <li>+998 93 960 78 00</li>
                </ul>
            </div>
        </div>
       
    </div>
  )
}

export default Footer