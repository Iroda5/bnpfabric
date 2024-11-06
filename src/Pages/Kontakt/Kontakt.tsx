import "./Kontakt.scss"
import { ChangeEvent,  useEffect, useState } from 'react';
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";

const Kontakt = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh()
  }, []);
  const TOKEN = "7446356293:AAEARkS6nUAeZ_LrMU-IsrqjL6-ZPVM0WGY";
  const CHAT_ID = 1403911900;

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    message:""
  });

  const [sumitted, setSubmitted] = useState(false);

  const [userInfoErr, setUserInfoErr] = useState<{ nameErr?: string, emailErr?: string}>({})

  const inputHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };
  const labelHandler = (e:ChangeEvent<HTMLTextAreaElement>) => {
    const {name, defaultValue} = e.target;
    setUserInfo(prev => ({...prev, [name]:defaultValue}))
  }
  

  

  const checkErr = (userInfo: { name: string; email: string; message:string;}) => {
    const err: { nameErr?: string; emailErr?: string; messageErr:string } = {}
console.log(userInfo.name)
    if (userInfo.name.length < 2) {
      err.nameErr = "Iltimos ismingizni kiriting";
    }
    if (!userInfo.email) {
      err.emailErr = "Iltimos Emailni to`g`ri kiriting";
    }
    if (userInfo.message.length < 2 ) {
      err.messageErr = "Iltimos xabarni to`liq yuboring"
    }
     return err
  };

  const submitHandler = (e) => {
    e.preventDefault()
    setSubmitted(true);
    setUserInfoErr(checkErr(userInfo))
  }
 
  
  useEffect(() => {
      if(sumitted && Object.keys(userInfoErr).length === 0) {
        const res =  axios.post(`https://api.telegram.org/bot${TOKEN}/sendMessage`,{
          chat_id: CHAT_ID,
          text:`Name ${userInfo.name}, Email: ${userInfo.email}, Message: ${userInfo.message}`
        })
      
    }
  }, [sumitted, userInfoErr.emailErr, userInfoErr.nameErr, userInfoErr.messageErr]);
  


  return (
   <div className='contact'>
        <h1 className="contact__aloqa">Aloqa</h1>
       <div className="contact__two" data-aos="fade-left">
       <form className='contact__div'>
       <div className='contact__input'>
       <input className={userInfoErr.nameErr && 'inputErr'} onChange={inputHandler} name='name' type="text" placeholder='Name' required/>
       {userInfoErr.nameErr && <span className='err'>Ismingizni yozing</span>}
       <input className={userInfoErr.emailErr && 'inputErr'} onChange={inputHandler} name="email" type="text"  placeholder='Email' required/>
       {userInfoErr.emailErr && <span className='err'>Emailni kiriting</span>}
       <label htmlFor="message"></label>
       <textarea className="text" onChange={labelHandler} name='message'required  placeholder="Xabaringizni yozing">Message</textarea>
       </div>
       <button  onClick={submitHandler}>Send</button>
    </form>
       <iframe className="contact__rasm" width="720" height="600" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Bukhara%20st.Alpomish%2080+(bnpfabric.uz)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/">gps vehicle tracker</a></iframe>
        </div>
     <div className="contact__info">
      <div className="contact__mal">
        <img className="contact__pochta" src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Email_254038.svg" alt="" />
        <h2 className="contact__h2">Email:info@bnpfabric.uz</h2>
      </div>
      <div className="contact__mal">
      <img className="contact__pochta" src="https://www.bnpfabric.uz/wp-content/uploads/2019/09/noun_Phone_17950751.svg" alt="" />
      <h2 className="contact__h2">Tel: +99893 383 75 85
                                       +99893 960 78 00</h2>
      </div>
      <div className="contact__mal">
        <img className="contact__pochta" src="https://www.bnpfabric.uz/wp-content/uploads/2019/10/noun_Location_19355641.svg" alt="" />
        <h2 className="contact__h2">Manzil: Buxoro, st.Alpomish 80</h2>
      </div>
     </div> 
  </div>
  
  )
}

export default Kontakt