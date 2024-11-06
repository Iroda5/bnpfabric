import "./Navigation.scss"
import {Link}  from "react-router-dom"
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import Menu from "../Menu/Menu";
import { useTranslation } from "react-i18next";
import { ChangeEvent } from "react";


const Navigation = () => {
  const {t, i18n} = useTranslation()
  const [menuModel, setMenuModel] = useState<boolean>(false);
  const selectHandler = (e:ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(e.target.value)
  }

  return (
    <div className="cont">
        <div className="cont__nav">
            <ul className="cont__menu">
                <img className="cont__img" src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/logo.2230098a.png" alt="" />
                <Link className="cont__link" to={"/uy"}>{t("Uy")}</Link> 
                <Link className="cont__link" to={"/toplam"}>{t("To'plam")}</Link>
                <Link className="cont__link" to={"/haqimizda"}>{t("Haqimizda")}</Link>
                <Link className="cont__link" to={"/kontakt"}>{t("Kontaktlar")}</Link>
            </ul>
            <select onChange={selectHandler} className="cont__sel" name="" id="">
                <option value="en">English</option>
                <option value="ru">Russian</option>
                <option value="uz">Uzbek</option>
            </select>
            <button className="con__modalbtn">
            <MenuIcon  onClick={() => setMenuModel(prev => !prev)} />
            </button>
           {menuModel && <Menu/>}
        </div>
    </div>
  )
}

export default Navigation