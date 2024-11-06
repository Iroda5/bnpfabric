import "./Yashil.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Yashil = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);
  return (
    <div className="yashil">
    <div className="yashil__contact">
        <div className="yashil__material">
            <h1 className="yashil__foiz" data-aos="fade-up">100%</h1>
            <p className="yashil__sifat" data-aos="fade-up">Material sifati</p>
        </div>
        <img className="yashil__rasm" src="https://bnpfabri.vercel.app/assets/quality__img3-Dcb3hveR.png" alt="" />
        <div className="yashil__buxo">
            <h1 className="yashil__tab" data-aos="fade-up">"Buxoro Tabiiy Mahsuloti"</h1>
            <p className="yashil__kop" data-aos="fade-up">Ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan</p>
            <button className="yashil__btn">To'plam</button>
        </div>
    </div>
</div>
  )
}

export default Yashil