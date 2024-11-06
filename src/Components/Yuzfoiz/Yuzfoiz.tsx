import "./Yuzfoiz.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Yuzfoiz = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);
  return (
    <div className="butun">
        <div className="butun__contact">
            <div className="butun__material">
                <h1 className="butun__foiz" data-aos="fade-up">100%</h1>
                <p className="butun__sifat" data-aos="fade-up">Material sifati</p>
            </div>
            <img className="butun__rasm" src="https://www.bnpfabric.uz/wp-content/uploads/2024/02/111-1.png" alt="" />
            <div className="butun__buxo">
                <h1 className="butun__tab" data-aos="fade-up">"Buxoro Tabiiy Mahsuloti"</h1>
                <p className="butun__kop" data-aos="fade-up">Ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan</p>
                <button className="butun__btn">To'plam</button>
            </div>
        </div>
    </div>
  )
}

export default Yuzfoiz