import { useEffect, useState } from "react";
import City from "./city";
import Humidity from "./Humidity";
import Clouds from "./Cloud";
import GradeButton from "./GradeButton";
import ImageWather from "./ImageWather";
import Pressure from "./Pressure";
import Title from "./tittle";
import WindSpeed from "./WindSpeed";

const CardInfo = (data) => {
      const [coord, setCoord] = useState({});
      const [dats, setDats] = useState({ clouds : {all : 1} , sys  : {country : ' example ' },name : '  ',  wind : { speed : 0 }, main: { temp:0 }  } );
      
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

      // useEffect(() => {
      //       const cel = dats.main.temp;
      //       console.log(cel)
      
      //       // const one = ((cel -273.15))
      //       // console.log(dats.main.temp)
      //       const [ state, setState ] = useState(cel)
      // }, [])
      // const handleClicl = () => {
      //       console.log(state)
      // }
      return(
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
                                    <GradeButton grade={dats.main.temp}/>
                              </div>
                              <div className="box-content">
                                    <Humidity humidity={dats.main.humidity} />
                                    <WindSpeed wind={dats.wind.speed}/>
                                    <Clouds  clouds={dats.clouds.all}/>
                                    <Pressure pressure={dats.main.pressure}/>
                              </div>
                        </div>
                        <button className="button">DEGREES °F / °C</button>
                  </div>
            </div>
      )
}
export default CardInfo;