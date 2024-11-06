import "./Toplam.scss"
import SearchIcon from '@mui/icons-material/Search';
import data from "../../data";
import { ChangeEvent,useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Toplam = () => {
  const navigate = useNavigate();
  
  const bedsHandler = (id:number) => {
    navigate(`/bed/${id}`)
  }
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

  // const btnsHandler = (btnName:string) => {
  //   const existingBtn = beds.filter(btn => btn.category === btnName);
  // };


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
            <h2  className="toplam__qora">Yoz kolleksiyasi</h2>
          
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