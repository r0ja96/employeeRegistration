import chartAPI from '../../../api/chartAPI';

function DepartmentSelect({email, password, setChartData, departments, initialChartData}){

    const departmentOption = departments.map( dep =>{
        return (<option key={dep.departmentID} value={dep.departmentID}>{dep.department}</option>)
      });  

    const handleSubmit = async (event) => {
        event.preventDefault();
        const department = event.target.elements.department.value;
        const response = await chartAPI.info({email,password,department});
        setDataToChart(response);
     }

     const setDataToChart = (response) => {
       
       if(response.length === 0) return setChartData(initialChartData );
       const findMale = response.find(male => male.gender === 'M' );
       const findFemale = response.find(female => female.gender === 'F' );
       const male = undefined === findMale?initialChartData[1]:findMale;
       const female = undefined === findFemale?initialChartData[0]:findFemale;
      return setChartData([female,male]);

     }

     return(
        <form onSubmit={handleSubmit}>
        <label>Select Department:</label>
        <select name='department' required>
          {departmentOption}
        </select>
        <input type={'submit'} value ='Enter'/>
      </form>
     )

}

export default DepartmentSelect;