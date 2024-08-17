import Search from "./Search"
import { useEffect, useState } from 'react';
import { getdata } from '../service/api-client';
import Details from "./Details";
const Card = () => {
    const[cityname,setcityname]=useState(null);   //getting cityname which user enter 
    const [citydata, setcitydata]= useState([]);  //sending citydata
    const loadCity=async()=>{                       //function called to get citydata
        setcitydata(await getdata({cityname}));
    }
    useEffect(()=>{
        loadCity();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[cityname]);

  return (
    <>
        <div className="layout-Card">
        <Search setcityname={setcityname}/> 
        <Details citydata={citydata}/>
        </div>
    </>
  )
}

export default Card