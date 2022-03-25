function DepartmentForm({displayDepartmentForm,setDisplayDepartmentForm}){
    
    return(<div className="registrationForm" style={{display: displayDepartmentForm}}>
        
    <div>

        <div>
        <button onClick={()=>setDisplayDepartmentForm('none')}>close</button>
        </div>
        <form>
            <h1>Department Registration</h1>
            <input type={'text'} placeholder={'ID Number'}/>
            <input type={'text'} placeholder={'Department'}/>
            <input type={'submit'} value={'Register'}/>
        </form>

    </div>
    </div>);
        
    }

export default DepartmentForm;