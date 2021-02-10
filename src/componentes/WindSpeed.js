import { FaWind } from 'react-icons/fa'
const WindSpeed = ( { wind } ) => {
      return (
            <div className=" box box-wind"><FaWind /> Wind Speed : { wind }</div>
      )
}
export default WindSpeed;