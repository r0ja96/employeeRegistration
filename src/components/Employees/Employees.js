import EmployeeTable from "./EmployeeTable/EmployeeTable";
import AddEmployeeForm from "./AddEmployeeForm/AddEmployeeForm";
import SearchEmployeeField from "./SearchEmployeeField/SearchEmployeeField";
import AddEmployeeButton from "./AddEmployeeButton/AddEmployeeButton";
import ModifieEmployeeForm from "./ModifieEmployeeForm/ModifieEmlpoyeeForm";
import employeeAPI from "../../api/employeeAPI";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";


const mapStateToProps = state =>{
    return{
        email: state.loginFields.email,
        password: state.loginFields.password
    }
} 

function Employees({email, password}){

    const [displayEmployeeForm,setDisplayEmployeeForm] = useState('none');
    const [employees, setEmployees] = useState([]);
    const [employeeFormFields, setEmployeeFormFields] = useState({});
    const [searchField, setSearchField] = useState('');

    useEffect(async() =>{
        const employee = await employeeAPI.read({email,password});
        setEmployees(employee);
    },[]);

    const filteredEmployees = employees.filter(employee =>{
        const fullName = employee.employeeID+" "+employee.name+" "+employee.lastName;
        return fullName.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return(<div className='fullScreen divRelitive'>
        <div className="jobDepEm ">
            <div>
            <h1>Employees</h1>
            </div>
            <div className="addSearch">
            <SearchEmployeeField setSearchField={setSearchField}/>
            <AddEmployeeButton setDisplayEmployeeForm = {setDisplayEmployeeForm}/>
            </div>
            <div>
            <EmployeeTable employees ={filteredEmployees} employeeAPI={employeeAPI} email = {email} password = {password} setEmployees={setEmployees} setDisplayEmployeeForm={setDisplayEmployeeForm} setEmployeeFormFields ={setEmployeeFormFields}/>
            </div>
        </div>
        {
        {'addEmployeeForm':<AddEmployeeForm   setDisplayEmployeeForm = {setDisplayEmployeeForm}
         email={email} password={password} employeeAPI={employeeAPI} setEmployees={setEmployees}/>,
         'modifieEmployeeForm':<ModifieEmployeeForm setDisplayEmployeeForm={setDisplayEmployeeForm}
         email={email} password={password} employeeAPI={employeeAPI} setEmployees={setEmployees} employeeFormFields={employeeFormFields} setEmployeeFormFields={setEmployeeFormFields}/>
        }[displayEmployeeForm]
        }


    </div>);

}

export default connect(mapStateToProps,null)(Employees);