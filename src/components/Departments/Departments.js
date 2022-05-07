import DeparmentTable from "./DepartmentTable/DepartmentTable";
import AddDepartmentForm from "./AddDepartmentForm/AddDepartmentForm";
import SearchDepartmentField from "./SearchDepartmentField/SearchDepartmentField";
import AddDepartmentButton from "./AddDepartmentButton/AddDepartmentButton";
import ModifieDepartmentForm from "./ModifieDepartmentForm/ModifieDepartmentForm";
import departmentAPI from "../../api/departmentAPI";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

const mapStateToProps = state =>{
    return{
        email: state.loginFields.email,
        password: state.loginFields.password
    }
} 

function Deparments({email, password}){

    const [departments, setDepartments] = useState([]);
    const [displayAddDepartmentForm,setDisplayAddDepartmentForm] = useState('none');
    const [displayModifieDepartmentForm,setDisplayModifieDepartmentForm] = useState('none');
    const [departmentIDFormField,setDepartmentIDFormField] = useState('');
    const [searchField,setSearchField] = useState('');

    useEffect(async() =>{
        const dep = await departmentAPI.read({email,password});
        setDepartments(dep);
    },[]);
 
    const filteredDepartments = departments.filter( department => {
            const dep = department.departmentID+" "+department.department
        return dep.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return(<div className='fullScreen divRelitive'>
        <div className="jobDepEm ">
            <div>
            <h1>Deparments</h1>
            </div>
            <div className="addSearch">
            <SearchDepartmentField setSearchField={setSearchField}/>
            <AddDepartmentButton setDisplayAddDepartmentForm={setDisplayAddDepartmentForm}/>
            </div>
            <div>
            <DeparmentTable departments = {filteredDepartments} departmentAPI={departmentAPI} email={email} password={password} setDepartments={setDepartments} setDisplayModifieDepartmentForm={setDisplayModifieDepartmentForm} setDepartmentIDFormField={setDepartmentIDFormField}/>
            </div>
           </div>
    
        <AddDepartmentForm displayAddDepartmentForm={displayAddDepartmentForm} setDisplayAddDepartmentForm ={setDisplayAddDepartmentForm} 
            email={email} password={password} departmentAPI={departmentAPI} setDepartments={setDepartments}/>
        
        <ModifieDepartmentForm displayModifieDepartmentForm={displayModifieDepartmentForm} setDisplayModifieDepartmentForm ={setDisplayModifieDepartmentForm} 
            email={email} password={password} departmentAPI={departmentAPI} setDepartments={setDepartments} departmentIDFormField={departmentIDFormField}/>
    
    </div>);

}

export default connect(mapStateToProps,null)(Deparments);