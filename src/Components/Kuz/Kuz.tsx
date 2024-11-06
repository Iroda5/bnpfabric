import "./Kuz.scss"
import { useNavigate } from "react-router-dom";

const Kuz = () => {
    const navigate = useNavigate();
    const beds : {id:number, img:string, name:string}[] = [
        {id:1, img:"https://bnpfabri.vercel.app/assets/productImg11-4aXKsJZC.jpg", name:"Safari"},
        {id:2, img:"https://bnpfabri.vercel.app/assets/productImg12-DxA5ccVB.jpg", name:"Ko'p rangli ametist"},
        {id:3, img:"https://bnpfabri.vercel.app/assets/productImg13-LbBmrKZ2.jpg", name:"Shivali bizak"},
        {id:4, img:"https://bnpfabri.vercel.app/assets/productImg14-DDwESftW.jpg", name:"Zumrad AB"},
        {id:5, img:"https://bnpfabri.vercel.app/assets/productImg15-Bu3C84nj.jpg", name:"Malahit qutisi", },
        {id:6, img:"https://bnpfabri.vercel.app/assets/productImg16-CrmeMFF3.jpg", name:"Bahorning hidlari", },
        {id:7, img:"https://bnpfabri.vercel.app/assets/productImg17-DYqc_VJQ.jpg", name:"Kuzgi barglar tushishi", },
        {id:8, img:"https://bnpfabri.vercel.app/assets/productImg18-DuuQsd8S.jpg", name:"Moviy shabada", },
        {id:9, img:"https://bnpfabri.vercel.app/assets/productImg19-p6tq_Bf2.jpg", name:"Moviy suv", },
        {id:10, img:"https://bnpfabri.vercel.app/assets/productImg20-CerQyIaR.jpg", name:"Plaid", } 
      ]
      const bedsHandler = (id:number) => {
        navigate(`/bed/${id}`)
      }
    
  return (
    <div className="kuz">
        <div className="kuz__col">
            <h1 className="kuz__mahsulot">Kuz kolleksiyasi</h1>
            <p className="kuz__tabiiy">Buxoro tabiiy mahsuloti</p>
        </div>
        <div className="kuz__map">
          {
            beds.map( bed => (
              <div onClick={() => bedsHandler(bed.id)} className="kuz__bed" key={bed.id}>
                <img className="kuz__image" src={bed.img} alt="" />
                <h2 className="kuz__name">{bed.name}</h2>
              </div>
            ))
          }
        </div>

    </div>
  )
}

export default Kuz