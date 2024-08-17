import axios from "axios";
async function getdata({cityname}){  //fetching data arounding to cityname
    // console.log(cityname);
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=dc344b58cab262d0b9a1628081caf913`;
    const response= await axios.get(URL);
    // console.log(response.data);
    return response.data;
}
export {getdata};