const City = ({city}) => {
      console.log(city)
      return (
            <h3>{city.name}, {city.sys.country}</h3>
      )
}
export default City;