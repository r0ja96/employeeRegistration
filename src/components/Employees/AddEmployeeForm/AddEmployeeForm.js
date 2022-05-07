import {useState, useEffect} from 'react';
import departmentAPI from '../../../api/departmentAPI';
import jobTitleAPI from '../../../api/jobTitleAPI';

function AddEmployeeForm({setDisplayEmployeeForm,email,password,employeeAPI,setEmployees}){
    
    const [error, setError] = useState('none');
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
        const response = await employeeAPI.insert(employee);
        if(response === 'register'){
            const employees = await employeeAPI.read({email,password});
            setEmployees(employees);
            setDisplayEmployeeForm('none')
        }
        if(response === 'Employee ID already exist'){
            setError('block');
        }

    }

    return(<div className='forms' style={{display: 'block'}}>
        
    <div>

        <div>
        <button onClick={()=>setDisplayEmployeeForm('none')}>close</button>
        </div>
        <form onSubmit={handleSubmit}>
            <h1>Employee Informartion</h1>
            <input type={'text'} name = 'employeeID' placeholder={'Employee ID'} maxLength={'40'} required/>
            <p style={{color: "rgb(200, 0, 0)", display: error}}>Employee ID already exist</p>
            <input type={'text'} name = 'name' placeholder={'Name'} maxLength={'40'} required/>
            <input type={'text'} name = 'lastName' placeholder={'Last Name'} maxLength={'40'} required/>
            <label>Day of birth</label>
            <input type={'date'} name = 'birthday' required/>
            <label>Gender</label>
            <select name='gender' required>
                <option value="M">Male</option>
                <option value="F">Female</option>
            </select>
            <label>Department</label>
            <select name='department' required>
                <option value="Null">None</option>
                {departmentOption}
            </select>
            <label>Job Title</label>
            <select name='jobTitle' required>
                <option value="Null">None</option>
                {jobTitleOption}
            </select>
            <input type={'submit'} value={'Register'}/>
        </form>

    </div>
    </div>);
        
    }

export default AddEmployeeForm;