import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import temps from "../assets/navigation.png"
const Details = ({ citydata }) => {
    const [show, setShow] = useState(false);   //finding whether any data is passed or not
    useEffect(() => {
        if (citydata.length === 0) {   
            setShow(false);
        } else {
            setShow(true);
        }
    }, [citydata]);
    // console.log(citydata.wind.speed);
    // console.log(citydata.main.temp);

    return (
        <>
            {!show && (                        //if wrong city is entry then "No data" message will be shown
                <h1 style={{ paddingTop: "120px" }}>NO DATA</h1>
            )}
            {show && (                             //show details if length is not zero
                <div className="layout-Details">
                    <div className="name-Details">
                        <img src={temps} />
                        <h1>{citydata?.name}</h1>
                    </div>
                    <p style={{fontSize:"150%"}}>{citydata?.weather[0]?.description}</p>
                    <div className="temp-Details" >
                        <p>{(citydata.main.temp - 273.15).toFixed(2)}°C</p>
                    </div>
                    <div className="wind-Details">
                        <img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-wind-icon-png-image_4272368.jpg"/>
                        <p>{citydata?.wind?.speed}&nbsp;m/s</p>
                    </div>
                    <div className="wind-Details">
                        <img src="https://png.pngtree.com/png-clipart/20190630/original/pngtree-vector-humidity-icon-png-image_4161830.jpg"/>
                        <p>{citydata?.main?.humidity}&nbsp;%</p>

                        </div>
                </div>
            )}
        </>
    );
};

Details.propTypes = {
    citydata: PropTypes.object.isRequired,
};

export default Details