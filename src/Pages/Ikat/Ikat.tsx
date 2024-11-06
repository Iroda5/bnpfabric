import "./Ikat.scss"
import {useParams} from "react-router-dom"



const beds : {id:string, img:string, name:string}[] = [
    {id:"1", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled-2550x1912.jpg", name:"Kvadratchalar"},
    {id:"2", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-scaled-2550x1912.jpg", name:"Ikat"},
    {id:"3", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled-2550x1912.jpg", name:"Davralar"},
    {id:"4", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled-2550x1912.jpg", name:"Geometriya ko'k"},
    {id:"5", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled-2550x1912.jpg", name:"Tropik barglar", },
    {id:"6", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled-2550x1912.jpg", name:"Bambi", },
    {id:"7", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled-2550x1912.jpg", name:"Vizantiya", },
    {id:"8", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled-2550x1912.jpg", name:"Kechki bog`", },
    {id:"9", img:"https://bnpfabri.vercel.app/assets/productImg9-DP-likxW.jpg", name:"Pat Markiz", },
    {id:"10", img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled-2550x1912.jpg", name:"Lavanda Atirgullari", } ,
    {id:"11", img:"https://bnpfabri.vercel.app/assets/productImg21-C-p6aOaW.jpg", name:"Vintage uslubi"},
    {id:"12", img:"https://bnpfabri.vercel.app/assets/productImg22-emL6vfU-.jpg", name:"Tebraniyotgan Karahindiba"},
    {id:"13", img:"https://bnpfabri.vercel.app/assets/productImg23-CL7pBMvF.jpg", name:"Fransuz Riviera"},
    {id:"14", img:"https://bnpfabri.vercel.app/assets/productImg24-B1gnyX0U.jpg", name:"Qo'y dolli"},
    {id:"15", img:"https://bnpfabri.vercel.app/assets/productImg25-BvXKeYJI.jpg", name:"Alp tog'lari o'simliklari", },
    {id:"16", img:"https://bnpfabri.vercel.app/assets/productImg26--z9MeTTg.jpg", name:"Ilhomlantiruvchi", },
    {id: "17", img:"https://bnpfabri.vercel.app/assets/productImg27-DsTk7fxd.jpg", name:"Yashil lotus", },
    {id:"18", img:"https://bnpfabri.vercel.app/assets/productImg28-DaHXHjbW.jpg", name:"Tog'li makkajo'xori", },
    {id:"19", img:"https://bnpfabri.vercel.app/assets/productImg29-UBLglkL9.jpg", name:"Sakura", },
    {id:"20", img:"https://bnpfabri.vercel.app/assets/productImg30-DXgEC2ST.jpg", name:"Zaytun novdasi", } ,
    {id:"21", img:"https://bnpfabri.vercel.app/assets/productImg11-4aXKsJZC.jpg", name:"Safari"},
    {id:"22", img:"https://bnpfabri.vercel.app/assets/productImg12-DxA5ccVB.jpg", name:"Ko'p rangli ametist"},
    {id:"23", img:"https://bnpfabri.vercel.app/assets/productImg13-LbBmrKZ2.jpg", name:"Shivali bizak"},
    {id:"24", img:"https://bnpfabri.vercel.app/assets/productImg14-DDwESftW.jpg", name:"Zumrad AB"},
    {id:"25", img:"https://bnpfabri.vercel.app/assets/productImg15-Bu3C84nj.jpg", name:"Malahit qutisi", },
    {id:"26", img:"https://bnpfabri.vercel.app/assets/productImg16-CrmeMFF3.jpg", name:"Bahorning hidlari", },
    {id:"27", img:"https://bnpfabri.vercel.app/assets/productImg17-DYqc_VJQ.jpg", name:"Kuzgi barglar tushishi", },
    {id:"28", img:"https://bnpfabri.vercel.app/assets/productImg18-DuuQsd8S.jpg", name:"Moviy shabada", },
    {id:"29", img:"https://bnpfabri.vercel.app/assets/productImg19-p6tq_Bf2.jpg", name:"Moviy suv", },
    {id:"30", img:"https://bnpfabri.vercel.app/assets/productImg20-CerQyIaR.jpg", name:"Plaid", } 
  ]

const Ikat = () => {
    const {id} = useParams()

    const bed = beds.find(bed => {
        return bed.id === id
    })
  return (
    <div className="card">
    <div className="card__cont" key={id}>
     <img className="card__image" src={bed?.img} alt="" />
     <h1>{bed?.name}</h1>
    </div>
    <table>
        
        <tr>
            <td>Material:</td>
            <td>100% Paxta Flanel</td>   
        </tr>
        <tr>
            <td>Yostiq kiyimi:</td>
            <td>50x70 sm (2dona)</td>   
        </tr>
        <tr>
           <td>Choyshab:</td>
           <td>260x280 (1 dona)</td>
        </tr>
        <tr>
           <td>Ko'rpa-to'shak</td>
           <td>160x220(2dona)</td>
        </tr>
        <tr>
           <td>Hajmi:</td>
           <td>Maxsus o'lcham</td>
        </tr>
        <tr>
           <td>Ishlab chiqaruvchi:</td>
           <td>Buxoro tabiiy mahsuloti</td>
        </tr>
        
    </table>
 </div>
  )
}

export default Ikat