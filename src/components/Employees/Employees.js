import EmployeeTable from "../EmployeeTable/EmployeeTable";
import EmployeeForm from "../EmployeeForm/EmployeeForm";
import { useState } from "react";
import './Employees.css';

function Employees(){

    const [displayEmployeForm,setDisplayEmployeeForm] = useState('none');

    return(<div className='fullScreen divRelitive'>
        <div id="employees">
            <h1>Employees</h1>
            <div>
            <form>
            <input type={'text'} placeholder='Search'/>
            <input type={'submit'} value={'Search'} />
            </form>
            <button onClick ={()=>setDisplayEmployeeForm('block')}>Add Employee</button>
            </div>
            < EmployeeTable />
        </div>
        <EmployeeForm  displayEmployeForm = {displayEmployeForm}  setDisplayEmployeeForm = {setDisplayEmployeeForm}/>
    </div>);

}

export default Employees;