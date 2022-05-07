import { useState } from 'react';

function ModifieJobTitleForm({displayModifieJobTitleForm,setDisplayModifieJobTitleForm,email,password,jobTitleAPI,setJobTitles,jobTitleIDFormField}){

    const [jobTitle,setJobTitle] = useState('');

    const modifieJobTitle = async(event) =>{
        
        event.preventDefault();
        
        const jobT = {
            email,
            password,
            jobTitleID: jobTitleIDFormField,
            jobTitle}

        const response = await jobTitleAPI.update(jobT);


        if(response === 'modifie'){ 
            
            setDisplayModifieJobTitleForm('none');
    
            setJobTitle('');
            
            const jobTitles = await jobTitleAPI.read({email,password});
            setJobTitles(jobTitles);
        }

    }

    const closeForm = () => {
        setDisplayModifieJobTitleForm('none');
        
        setJobTitle('');

    }

    return(<div className='forms' style={{display: displayModifieJobTitleForm}}>
        
    <div>

        <div>
        <button className='deleteBtn' onClick={()=>closeForm()}>close</button>
        </div>
         <form onSubmit={modifieJobTitle}>
                <input type={'number'} min = {0} name={'jobTitleID'} value={jobTitleIDFormField} placeholder='Job Title ID' maxLength={'40'} disabled required/>
                <input type={'text'} name={'jobTitle'} value={jobTitle} onChange={(e) => setJobTitle(e.target.value)}  placeholder='Job Title' maxLength={'40'} required/>
                <input type={'submit'} value={'Modifie'} />
        </form>

    </div>
    </div>);

}

export default ModifieJobTitleForm;