
import './App.scss'
import Bepul from './Components/Bepul/Bepul'
import Qish from './Components/Qish/Qish'
import Yuz from './Components/Yuz/Yuz'
import { useEffect } from 'react';
import Yuzfoiz from "./Components/Yuzfoiz/Yuzfoiz"
import Kuz from './Components/Kuz/Kuz';
import Yashil from './Components/Yashil/Yashil';
import Yoz from './Components/Yoz/Yoz';
import Yangiliklar from './Components/Yangiliklar/Yangiliklar';
import { useTranslation } from 'react-i18next';
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({
        duration: 900,
        offset: 50,
        easing: 'ease-in-out', 
    });
}, []);

  const {t} = useTranslation()

  return (
    <>
    <div className='contain'>
      <div className ='contain__rasm'  data-aos="fade-down">
        <img className='contain__pic'  data-aos="fade-down" src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-copy.png" alt="" />
        <div className='contain__tekst'  >
          <h3 className='contain__h3'  data-aos="fade-right">{t("Buxoro")}</h3>
          <h2 className='contain__h2' data-aos="fade-right">{t("Tabiiy")}</h2>
          <h1 className='contain__h1' data-aos="fade-right">{t("Mahsuloti")}</h1>
        </div>
      </div>
    </div>
    <Bepul/>
    <Yuz/>
    <Qish/>
    <Yuzfoiz/>
    <Kuz/>
    <Yashil/>
    <Yoz/>
    <Yangiliklar/>
   
    
     
    </>
  )
}

export default App
