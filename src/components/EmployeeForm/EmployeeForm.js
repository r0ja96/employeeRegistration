import './EmployeeForm.css';

function EmployeeForm({displayEmployeForm,setDisplayEmployeeForm}){
    
    return(<div id='employeeForm' style={{display: displayEmployeForm}}>
        
    <div>

        <div>
        <button onClick={()=>setDisplayEmployeeForm('none')}>close</button>
        </div>
        <form>
            <h1>Employee Informartion</h1>
            <input type={'text'} placeholder={'ID Number'}/>
            <input type={'text'} placeholder={'Name'}/>
            <input type={'text'} placeholder={'Last Name'}/>
            <label>Day of birth</label>
            <input type={'date'}/>
            <label>Sex</label>
            <select>
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
            </select>
            <label>Department</label>
            <select>
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
            </select>
            <label>Job Title</label>
            <select>
                <option value="volvo">Male</option>
                <option value="saab">Female</option>
            </select>
            <input type={'submit'} value={'Register'}/>
        </form>

    </div>
    </div>);
        
    }

export default EmployeeForm;