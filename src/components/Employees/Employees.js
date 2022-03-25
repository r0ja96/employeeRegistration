import EmployeeTable from "../EmployeeTable/EmployeeTable";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useState } from "react";

function Employees(){

    const [displayEmployeForm,setDisplayEmployeeForm] = useState('none');

    return(<div className='fullScreen relativeDiv'>
        <div>
            <h1>Employees</h1>
            <form>
            <input type={'text'}/>
            <input type={'submit'} value={'Search'}/>
            </form>
            <button onClick ={()=>setDisplayEmployeeForm('block')}>Add Employee</button>
            < EmployeeTable />
        </div>
        <EmployeeForm  displayEmployeForm = {displayEmployeForm}  setDisplayEmployeeForm = {setDisplayEmployeeForm}/>
    </div>);

}

export default Employees;