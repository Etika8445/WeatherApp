import { useRef } from "react";
import propTypes from "prop-types";
import find from "../assets/search.png"
const Search = ({ setcityname }) => {
    const City = useRef();                  //handling user input and sending data
    // console.log(City.current.value);
    return (
        <>
            <div className="layout-Search">
                <input ref={City} type='text' placeholder="City Name" />
                <img src={find} onClick={()=>{setcityname(City.current.value)}} className="input-Search"/>
            </div>
        </>
    )
}
Search.propTypes = {
    setcityname: propTypes.func
}
export default Search