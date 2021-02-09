import { useEffect, useState } from "react";
import ButtonDegre from "./ButtonDegrees";
import City from "./city";
import ClearSky from "./ClearSky";
import Clouds from "./Cloud";
import GradeButton from "./GradeButton";
import ImageWather from "./ImageWather";
import Pressure from "./Pressure";
import Title from "./tittle";
import WindSpeed from "./WindSpeed";



const CardInfo = (data) => {
      const [coord, setCoord] = useState([])
      const [dats, setDats] = useState([])
      

      const successCallback = (position) => {
            const arr = {
                  lat: position.coords.latitude,
                  lon: position.coords.longitude
            }
      setCoord(arr)  
      }

      const errorCallback = (error) => {
            console.error(error);
      }

      const getData = async () => {
            await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${coord.lat}&lon=${coord.lon}&appid=90772b7ef524a0691210d29dfe1dd9d8`)
      .then(res => res.json())
      .then(data => setDats(data))
      }
      useEffect(() => {
            if(coord.lat === undefined && coord.lon === undefined) {
                  navigator.geolocation.getCurrentPosition( successCallback, errorCallback  );
            }
            else {
                  getData()
            }
      }, [coord.lat, coord.lon])

      return(
            <>
            <div className="container">
                  <div className="card">
                        <div className="title-weater">
                              <Title />
                        </div>
                        <div className="city">
                              <City city={dats}/>
                        </div>
                        <div className="card-body">
                              <div className="box-weather">
                                    <ImageWather />
                                    <GradeButton />
                              </div>
                              <div className="box-content">
                                    <ClearSky  />
                                    <WindSpeed />
                                    <Clouds  prop={data.clouds}/>
                                    <Pressure />
                              </div>
                        </div>
                        <ButtonDegre />
                  </div>
            </div>
            </>
      )
}
export default CardInfo;