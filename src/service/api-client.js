import axios from "axios";
async function getdata({cityname}){  //fetching data arounding to cityname
    // console.log(cityname);
    const URL=`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}`;
    const response= await axios.get(URL);
    // console.log(response.data);
    return response.data;
}
export {getdata};
