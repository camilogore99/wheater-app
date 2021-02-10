const GradeButton = ({ grade }) => {
      const num = grade -273.15;
      const num2 = Math.trunc(num)
      return(
            <div>{(num2)} C° </div>
      );
};
export default GradeButton;