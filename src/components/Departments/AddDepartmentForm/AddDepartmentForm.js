import { useState } from 'react';


function AddDepartmentForm({displayAddDepartmentForm,setDisplayAddDepartmentForm,email,password,departmentAPI,setDepartments}){

    const [error, setError] = useState('none');
    const [departmentID,setDepartmentID] = useState('');
    const [department,setDepartment] = useState('');

    const addDepartment = async(event) =>{
        
        event.preventDefault();
        
        const dep = {
            email,
            password,
            departmentID,
            department}

        const response = await departmentAPI.insert(dep);
        
        if(response === 'department ID already exist'){ 
            setError('block');
        }

        if(response === 'register'){ 
            setError('none');
            setDisplayAddDepartmentForm('none')
            setDepartmentID('');
            setDepartment('');
            
            const departments = await departmentAPI.read({email,password});
            setDepartments(departments);
        }

    }

    const closeForm = () => {
        setDisplayAddDepartmentForm('none');
        setError('none');
        setDepartmentID('');
        setDepartment('');

    }
    
    return(<div className='forms' style={{display: displayAddDepartmentForm}}>
        
    <div>

        <div>
        <button className='deleteBtn' onClick={()=>closeForm()}>close</button>
        </div>
         <form onSubmit={addDepartment}>
                <input type={'number'} min = {0} name={'departmentID'} value={departmentID} onChange={(e) => setDepartmentID(e.target.value)} placeholder='Department ID' maxLength={'40'}required/>
                <p style={{color: "rgb(200, 0, 0)", display: error}}>Department ID already exist</p>
                <input type={'text'} name={'department'} value={department} onChange={(e) => setDepartment(e.target.value)}  placeholder='Department' maxLength={'40'} required/>
                <input type={'submit'} value={'Add'}/>
        </form>

    </div>
    </div>);
        
    }

export default AddDepartmentForm;