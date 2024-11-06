import "./Toplam.scss"
import SearchIcon from '@mui/icons-material/Search';
import data from "../../data";
import { ChangeEvent,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Toplam = () => {
  const navigate = useNavigate();
  const beds : {id:number, img:string, name:string,category:string}[] = [
    {id:1, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-73-scaled-2550x1912.jpg", name:"Kvadratchalar",category:"qish"},
    {id:2, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-72-scaled-2550x1912.jpg", name:"Ikat",category:"qish"},
    {id:3, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-71-scaled-2550x1912.jpg", name:"Davralar",category:"qish"},
    {id:4, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-70-scaled-2550x1912.jpg", name:"Geometriya ko'k",category:"qish"},
    {id:5, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-69-1-scaled-2550x1912.jpg", name:"Tropik barglar",category:"qish"},
    {id:6, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-68-scaled-2550x1912.jpg", name:"Bambi",category:"qish" },
    {id:7, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-67-scaled-2550x1912.jpg", name:"Vizantiya",category:"qish" },
    {id:8, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-66-scaled-2550x1912.jpg", name:"Kechki bog`",category:"qish" },
    {id:9, img:"https://bnpfabri.vercel.app/assets/productImg9-DP-likxW.jpg", name:"Pat Markiz",category:"qish" },
    {id:10, img:"https://www.bnpfabric.uz/wp-content/uploads/2024/02/diz-64-scaled-2550x1912.jpg", name:"Lavanda Atirgullari",category:"qish"} ,
    {id:11, img:"https://bnpfabri.vercel.app/assets/productImg21-C-p6aOaW.jpg", name:"Vintage uslubi",category:"qish"},
    {id:12, img:"https://bnpfabri.vercel.app/assets/productImg22-emL6vfU-.jpg", name:"Tebraniyotgan Karahindiba",category:"kuz"},
    {id:13, img:"https://bnpfabri.vercel.app/assets/productImg23-CL7pBMvF.jpg", name:"Fransuz Riviera",category:"kuz"},
    {id:14, img:"https://bnpfabri.vercel.app/assets/productImg24-B1gnyX0U.jpg", name:"  ",category:"qish"},
    {id:15, img:"https://bnpfabri.vercel.app/assets/productImg25-BvXKeYJI.jpg", name:"Alp tog'lari o'simliklari",category:"qish"},
    {id:16, img:"https://bnpfabri.vercel.app/assets/productImg26--z9MeTTg.jpg", name:"Ilhomlantiruvchi",category:"qish" },
    {id:17, img:"https://bnpfabri.vercel.app/assets/productImg27-DsTk7fxd.jpg", name:"Yashil lotus",category:"qish"},
    {id:18, img:"https://bnpfabri.vercel.app/assets/productImg28-DaHXHjbW.jpg", name:"Tog'li makkajo'xori",category:"yoz" },
    {id:19, img:"https://bnpfabri.vercel.app/assets/productImg29-UBLglkL9.jpg", name:"Sakura",category:"qish"},
    {id:20, img:"https://bnpfabri.vercel.app/assets/productImg30-DXgEC2ST.jpg", name:"Zaytun novdasi",category:"qish"} ,
    {id:21, img:"https://bnpfabri.vercel.app/assets/productImg11-4aXKsJZC.jpg", name:"Safari",category:"qish"},
    {id:22, img:"https://bnpfabri.vercel.app/assets/productImg12-DxA5ccVB.jpg", name:"Ko'p rangli ametist",category:"qish"},
    {id:23, img:"https://bnpfabri.vercel.app/assets/productImg13-LbBmrKZ2.jpg", name:"Shivali bizak",category:"qish"},
    {id:24, img:"https://bnpfabri.vercel.app/assets/productImg14-DDwESftW.jpg", name:"Zumrad AB",category:"qish"},
    {id:25, img:"https://bnpfabri.vercel.app/assets/productImg15-Bu3C84nj.jpg", name:"Malahit qutisi",category:"qish"},
    {id:26, img:"https://bnpfabri.vercel.app/assets/productImg16-CrmeMFF3.jpg", name:"Bahorning hidlari",category:"qish"},
    {id:27, img:"https://bnpfabri.vercel.app/assets/productImg17-DYqc_VJQ.jpg", name:"Kuzgi barglar tushishi",category:"qish" },
    {id:28, img:"https://bnpfabri.vercel.app/assets/productImg18-DuuQsd8S.jpg", name:"Moviy shabada",category:"qish"},
    {id:29, img:"https://bnpfabri.vercel.app/assets/productImg19-p6tq_Bf2.jpg", name:"Moviy suv",category:"qish"},
    {id:30, img:"https://bnpfabri.vercel.app/assets/productImg20-CerQyIaR.jpg", name:"Plaid",category:"qish" } 
  ]


  
  const bedsHandler = (id:number) => {
    navigate(`/bed/${id}`)
  }



  const btns:string[] = ["Qish","Kuz","Yoz"];

  const [activeBtn, setActiveBtn] = useState<string[]>([])

  const [inputData, setInputData] = useState({
    beds:data,
    search:"",
    titles:"",
    category:"",
  });
  console.log(inputData);

  const inputHandler = (e:ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target
    setInputData((prev) => ({...prev, [name]:value}));
  };

  const btnsHandler = (btnName:string) => {
    const existingBtn = beds.filter(btn => btn.category === btnName);
  };


  const filter = () => {
    let tempData = [...data];

    tempData = tempData.filter((beds) =>
    beds.title.toLowerCase().includes(inputData.search));

    // tempData = tempData.filter((beds) =>
    // beds.category.toLowerCase().includes(inputData.search));


    
    setInputData((prev) => ({...prev,beds:tempData }) );
    if(inputData.category !== '') {
      tempData = tempData.filter(
        (beds) => beds.category === inputData.category
      );
    }
    if(inputData.titles !=='') {
      tempData = tempData.filter(
        (beds) => beds.title === inputData.titles
      )
    }

  };

   
  useEffect(() => {
    filter();

  }, [inputData.search, inputData.category, inputData.titles])
  
  return (
    <div className="toplam">
      <div className="toplam__div">
          <div className="toplam__icon">
          <input  className="toplam__input" onChange={inputHandler}  type="text" name="search" placeholder="Bu yerda qidiring" />
          <SearchIcon className="toplam__search"/>
          </div>
        <div className="toplam__one">
          <div className="toplam__hamma">
            {/* <h1 className="toplam__h1" aria-label="Filtr by Qish kolleksiyasi">To'plam</h1> */}
            <h2 className="toplam__qizil">Barcha kategoriyalar</h2>
            <h2 className="toplam__qora">Qish kolleksiyasi</h2>
            <h2 className="toplam__qora">Kuz kolleksiyasi</h2>
            <h2 onClick={()=>btnsHandler('yoz')}  className="toplam__qora">Yoz kolleksiyasi</h2>
          
          </div>
        </div>
      </div>
        <div className="toplam__data">
        {
            inputData.beds.map((beds,id) =>(
           <div key={id}>
            <img onClick={()=>bedsHandler(id)} className="toplam__rasm" src={beds.img} alt="" />
            <h2>{beds.title}</h2>

           </div>
            )
            )
          }
        </div>
    </div>
  )
}

export default Toplam