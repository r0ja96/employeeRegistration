import { useState } from 'react';


function ModifieDepartmentForm({displayModifieDepartmentForm,setDisplayModifieDepartmentForm,email,password,departmentAPI,setDepartments,departmentIDFormField}){

    const [department,setDepartment] = useState('');

    const modifieDepartment = async(event) =>{
        
        event.preventDefault();
        
        const dep = {
            email,
            password,
            departmentID: departmentIDFormField,
            department}

        const response = await departmentAPI.update(dep);


        if(response === 'modifie'){ 
            
            setDisplayModifieDepartmentForm('none');
    
            setDepartment('');
            
            const departments = await departmentAPI.read({email,password});
            setDepartments(departments);
        }

    }

    const closeForm = () => {
        setDisplayModifieDepartmentForm('none');
        
        setDepartment('');

    }
    
    return(<div className='forms' style={{display: displayModifieDepartmentForm}}>
        
    <div>

        <div>
        <button className='deleteBtn' onClick={()=>closeForm()}>close</button>
        </div>
         <form onSubmit={modifieDepartment}>
                <input type={'number'} min = {0} name={'departmentID'} value={departmentIDFormField} placeholder='Department ID' maxLength={'40'} disabled required/>
                <input type={'text'} name={'department'} value={department} onChange={(e) => setDepartment(e.target.value)}  placeholder='Department' maxLength={'40'} required/>
                <input type={'submit'} value={'Modifie'} />
        </form>

    </div>
    </div>);
        
    }

export default ModifieDepartmentForm;