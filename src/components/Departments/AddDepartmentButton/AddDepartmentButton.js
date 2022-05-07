
function AddDepartmentButton({setDisplayAddDepartmentForm}){
return(<div>
    <button onClick={()=>{setDisplayAddDepartmentForm('block')}}>Add Deparment</button>
</div>);
}

export default AddDepartmentButton;