import { FaPrescriptionBottle } from 'react-icons/fa'
const Pressure = ( { pressure } ) => {
      return (
            <div className=" box box-pressure"> <FaPrescriptionBottle /> Pressure : { pressure } </div>
      )
}
export default Pressure;