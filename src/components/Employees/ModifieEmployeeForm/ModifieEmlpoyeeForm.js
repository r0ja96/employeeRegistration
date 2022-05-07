import {useState, useEffect} from 'react';
import departmentAPI from '../../../api/departmentAPI';
import jobTitleAPI from '../../../api/jobTitleAPI';

function ModifieEmployeeForm({setDisplayEmployeeForm,email,password,employeeAPI,setEmployees,employeeFormFields,setEmployeeFormFields}){
    
    const [jobTitles, setJobTitles] = useState([]);
    const [departments,setDepartments] = useState([]);
    
    useEffect(async() =>{
        const jobDep =  await Promise.all([departmentAPI.read({email,password}),jobTitleAPI.read({email,password})]);
        setDepartments(jobDep[0]);
        setJobTitles(jobDep[1]);
    },[]);

    const jobTitleOption = jobTitles.map( jobTitle =>{
        return(<option key={jobTitle.jobTitleID} value = {jobTitle.jobTitleID} > {jobTitle.jobTitle} </option>);
    });

    const departmentOption = departments.map( dep =>{
        return(<option key={dep.departmentID} value = {dep.departmentID} > {dep.department} </option>);
    });

    const handleSubmit = async (event) =>{
        
        event.preventDefault();
        const{ employeeID, name, lastName, birthday, gender, department, jobTitle } = event.target.elements;
        const employee = {
            email,
            password,
            employeeID: employeeID.value,
            name: name.value,
            lastName: lastName.value,
            birthday: birthday.value,
            gender: gender.value,
            department: department.value,
            jobTitle: jobTitle.value
        }
        const response = await employeeAPI.update(employee);
        if(response === 'modifie'){
            const employees = await employeeAPI.read({email,password});
            setEmployees(employees);
            setDisplayEmployeeForm('none')
        }

    }

    const convertDateFormat = (date) => {
        const newFormat = date.replace(/(\d\d)\/(\d\d)\/(\d{4})/, "$3-$1-$2");
        return newFormat
    }

    return(<div className='forms' style={{display: 'block'}}>
        
    <div>

        <div>
        <button onClick={()=>setDisplayEmployeeForm('none')}>close</button>
        </div>
        <form onSubmit={handleSubmit}>
            <h1>Employee Informartion</h1>
            <input type={'text'} name = 'employeeID' value={employeeFormFields.employeeID} placeholder={'Employee ID'} maxLength={'40'} disabled required/>
            <input type={'text'} name = 'name' value={employeeFormFields.name} onChange ={(e)=>setEmployeeFormFields({...employeeFormFields,name:e.target.value})} placeholder={'Name'} maxLength={'40'} required/>
            <input type={'text'} name = 'lastName' value={employeeFormFields.lastName} onChange ={(e)=>setEmployeeFormFields({...employeeFormFields,lastName:e.target.value})} placeholder={'Last Name'} maxLength={'40'} required/>
            <label>Day of birth</label>
            <input type={'date'} name = 'birthday' value={convertDateFormat(employeeFormFields.birthday)} onChange ={(e)=>setEmployeeFormFields({...employeeFormFields,birthday:e.target.value})}required/>
            <label>Gender</label>
            <select name='gender' required>
                <option value={employeeFormFields.gender}>{employeeFormFields.gender}</option>
                <option value="M">M</option>
                <option value="F">F</option>
            </select>
            <label>Department</label>
            <select name='department' required>
                <option value={!employeeFormFields.departmentID?'null':employeeFormFields.departmentID}>{!employeeFormFields.department?'None':employeeFormFields.department}</option>
                <option value="Null">None</option>
                {departmentOption}
            </select>
            <label>Job Title</label>
            <select name='jobTitle' required>
            <option value={!employeeFormFields.jobTitleID?'null':employeeFormFields.jobTitleID}>{!employeeFormFields.jobTitle?'None':employeeFormFields.jobTitle}</option>
                <option value="Null">None</option>
                {jobTitleOption}
            </select>
            <input type={'submit'} value={'Modifie'}/>
        </form>

    </div>
    </div>);
        
    }

export default ModifieEmployeeForm;