import reportAPI from '../../../api/reportAPI';

function EmployeeSelect ({email,password,setReport,employees}){

    const onSubmit =  async (event) =>{
        event.preventDefault();
        const {employeeID} = event.target.elements;
        const response = await reportAPI.getReport({email, password, employeeID: employeeID.value})
        setReport(response);
     }

     const employeeOption = employees.map(employee =>{

        const {employeeID,name,lastName} = employee;

        return (<option key = {employeeID} value = {employeeID}>{employeeID+'-'+lastName+' '+name}</option>);
    });

    return(<div>
        <form onSubmit={onSubmit}>
            <label>Select an employee:</label>
            <select name='employeeID' required>
                {employeeOption}
            </select>
            <input type={'submit'} value='Enter'/>
        </form>
    </div>);

}

export default EmployeeSelect;