import { useState } from 'react';

function AddJobTitleForm({displayAddJobTitleForm,setDisplayAddJobTitleForm,email,password,jobTitleAPI,setJobTitles}){

    const [error, setError] = useState('none');
    const [jobTitleID,setJobTitleID] = useState('');
    const [jobTitle,setJobTitle] = useState('');

    const addJobTitle = async(event) =>{
        
        event.preventDefault();
        
        const jobT = {
            email,
            password,
            jobTitleID,
            jobTitle}

        const response = await jobTitleAPI.insert(jobT);
        
        if(response === 'Job Title ID already exist'){ 
            setError('block');
        }

        if(response === 'register'){ 
            setError('none');
            setDisplayAddJobTitleForm('none')
            setJobTitleID('');
            setJobTitle('');
            
            const jobTitles = await jobTitleAPI.read({email,password});
            setJobTitles(jobTitles);
        }

    }

    const closeForm = () => {
        setDisplayAddJobTitleForm('none');
        setError('none');
        setJobTitleID('');
        setJobTitle('');

    }

    return(<div className='forms' style={{display: displayAddJobTitleForm}}>
        
    <div>

        <div>
        <button className='deleteBtn' onClick={()=>closeForm()}>close</button>
        </div>
         <form onSubmit={addJobTitle}>
                <input type={'number'} min = {0} name={'jobTitleID'} value={jobTitleID} onChange={(e) => setJobTitleID(e.target.value)} placeholder='Job TItle ID' maxLength={'40'} required/>
                <p style={{color: "rgb(200, 0, 0)", display: error}}>JobTitle ID already exist</p>
                <input type={'text'} name={'jobTitle'} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}  placeholder='Job Title' maxLength={'40'} required/>
                <input type={'submit'} value={'Add'}/>
        </form>

    </div>
    </div>);

}

export default AddJobTitleForm;