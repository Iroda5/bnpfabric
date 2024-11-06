import "./Qish.scss"
import { useNavigate } from "react-router-dom";

const Qish = () => {

  const navigate = useNavigate();
    const beds : {id:number, img:string, name:string}[] = [
        {id:1, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled-2550x1912.jpg", name:"Kvadratchalar"},
        {id:2, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-scaled-2550x1912.jpg", name:"Ikat"},
        {id:3, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled-2550x1912.jpg", name:"Davralar"},
        {id:4, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled-2550x1912.jpg", name:"Geometriya ko'k"},
        {id:5, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled-2550x1912.jpg", name:"Tropik barglar", },
        {id:6, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled-2550x1912.jpg", name:"Bambi", },
        {id:7, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled-2550x1912.jpg", name:"Vizantiya", },
        {id:8, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled-2550x1912.jpg", name:"Kechki bog`", },
        {id:9, img:"https://bnpfabri.vercel.app/assets/productImg9-DP-likxW.jpg", name:"Pat Markiz", },
        {id:10, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled-2550x1912.jpg", name:"Lavanda Atirgullari", } 
      ]
      const bedsHandler = (id:number) => {
        navigate(`/bed/${id}`)
      }
    

    
  return (
    <div className="qish">
        <div className="qish__kal">
            <h1 className="qish__mah">Qish kolleksiyasi</h1>
            <p className="qish__tabi">Buxoro tabiiy mahsuloti</p>
        </div>
        <div className="qish__map">
          {
            beds.map( bed => (
              <div >
                <img onClick={() => bedsHandler(bed.id)} className="qish__bed qish__image" key={bed.id} src={bed.img} alt="" />
                <h2 className="qish__name">{bed.name}</h2>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default Qish