function AddJobTitleButton({setDisplayAddJobTitleForm}){
    return(<div>
        <button onClick={()=>{setDisplayAddJobTitleForm('block')}}>Add Job Title</button>
    </div>);
    }
    
    export default AddJobTitleButton;