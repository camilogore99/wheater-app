import {FaTemperatureLow} from 'react-icons/fa'
const Humidity = ({humidity}) => {
      return(
            <div className=" box box-clear"><FaTemperatureLow /> Humidity : { humidity }%</div>
      )
}
export default Humidity;