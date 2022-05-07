function AddEmployeeButton({setDisplayEmployeeForm}){

    

    return(
        <div>
        <button onClick ={()=>{setDisplayEmployeeForm('addEmployeeForm')}}>Add Employee</button>       
        </div>
        );

}

export default AddEmployeeButton;