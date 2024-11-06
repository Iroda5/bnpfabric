import "./Yoz.scss"
import { useNavigate } from "react-router-dom";

const Yoz = () => {
    const navigate = useNavigate();
    const beds : {id:number, img:string, name:string}[] = [
        {id:1, img:"https://bnpfabri.vercel.app/assets/productImg21-C-p6aOaW.jpg", name:"Vintage uslubi"},
        {id:2, img:"https://bnpfabri.vercel.app/assets/productImg22-emL6vfU-.jpg", name:"Tebraniyotgan Karahindiba"},
        {id:3, img:"https://bnpfabri.vercel.app/assets/productImg23-CL7pBMvF.jpg", name:"Fransuz Riviera"},
        {id:4, img:"https://bnpfabri.vercel.app/assets/productImg24-B1gnyX0U.jpg", name:"Qo'y dolli"},
        {id:5, img:"https://bnpfabri.vercel.app/assets/productImg25-BvXKeYJI.jpg", name:"Alp tog'lari o'simliklari", },
        {id:6, img:"https://bnpfabri.vercel.app/assets/productImg26--z9MeTTg.jpg", name:"Ilhomlantiruvchi", },
        {id:7, img:"https://bnpfabri.vercel.app/assets/productImg27-DsTk7fxd.jpg", name:"Yashil lotus", },
        {id:8, img:"https://bnpfabri.vercel.app/assets/productImg28-DaHXHjbW.jpg", name:"Tog'li makkajo'xori", },
        {id:9, img:"https://bnpfabri.vercel.app/assets/productImg29-UBLglkL9.jpg", name:"Sakura", },
        {id:10, img:"https://bnpfabri.vercel.app/assets/productImg30-DXgEC2ST.jpg", name:"Zaytun novdasi", } 
      ]
      const bedsHandler = (id:number) => {
        navigate(`/bed/${id}`)
      }
  return (
    <div className="yoz">
    <div className="yoz__col">
        <h1 className="yoz__mahsulot">Yozgi kolleksiyasi</h1>
        <p className="yoz__tabiiy">Buxoro tabiiy mahsuloti</p>
    </div>
    <div className="yoz__map">
      {
        beds.map( bed => (
          <div onClick={() => bedsHandler(bed.id)} className="yoz__bed" key={bed.id}>
            <img className="yoz__image" src={bed.img} alt="" />
            <h2 className="yoz__name">{bed.name}</h2>
          </div>
        ))
      }
    </div>

</div>
  )
}

export default Yoz