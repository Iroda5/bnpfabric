import "./Haqimizda.scss"
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const Haqimizda = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);

  return (
    <div className="about">
      <div className="about__div">
        <div className="about__one">
          <h1 className="about__h1" data-aos="fade-left">Buxoro tabiiy mahsuloti</h1>
          <p className="about__p"  data-aos="fade-left">Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Fabrikamiz ko'p yillar davomida butun dunyoda foydalanish uchun paxta matolarini ishlab chiqaradigan kompaniya bo'lib kelgan.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Ushbu kompaniya 17 yildan beri mijozlarga xizmat ko'rsatadi.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Ushbu kompaniyaning asosiy maqsadi yuqori sifatli va tejamkor mahsulotlar ishlab chiqarishdir.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Ushbu kompaniyaning ishlab chiqarish jarayoni butunlay ekologik toza.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Korxonada xaridorlarning talab va takliflari asosida har qanday turdagi paxta xomashyosi ishlab chiqarilishi mumkin.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Kompaniya DongJia to'quv mashinalarining O'zbekistondagi rasmiy dileri hisoblanadi.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Ayni paytda 80 dan ortiq oila o'z oilasini moddiy jihatdan ta'minlab, korxona nufuzi va muvaffaqiyatiga hissa qo'shmoqda.
Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Bu talabni qondirish uchun 50 ta to'quv dastgohi to'xtovsiz yuqori tezlikda ishlamoqda.

Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Oyiga 200-250 ming metr gazlama to'qish quvvatiga egamiz.

Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar Mijozlarning yuqori talabidan kelib chiqib, korxonada yuqori sifatli yuqori sifatli eko-sumkalar ishlab chiqarish yo'lga qo'yildi.

Buxoro matolari, Eko sumkalar, Buxoro matolari, Eko sumkalar “Bukhara Natural Product” kompaniyasi o'z sodiq mijozlariga istalgan vaqtda xizmat ko'rsatishdan mamnun.
demo-ilova-586-noutbukda-ishlaydigan-yosh-ishbilarmonlar-guruhi-8SHTZUN
logotip.2230098a
“Bukhara Natural Product” ko'p yillardan buyon butun dunyoda foydalanish uchun paxta matolari ishlab chiqaradigan kompaniya hisoblanadi.

menyu</p>
        </div>
<img className="about__img" src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/group-of-young-businesspeople-with-laptop-working-8SHTZUN.png" alt="" />
      </div>
    </div>
  )
}

export default Haqimizda