const GradeButton = ({ grade }) => {
      const gradsCe = Math.trunc(grade -273.15)
      return(
            <div>{(gradsCe)} C° </div>
      );
};
export default GradeButton;