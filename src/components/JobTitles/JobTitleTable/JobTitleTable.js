
function JobTitleTable({jobTitles,email,password,jobTitleAPI,setJobTitles,setDisplayModifieJobTitleForm,setJobTitleIDFormField}){
   
  const deleteJobTitle = async (jobTitleID)=>{

    const response = await jobTitleAPI.del({email,password,jobTitleID});
    
    if(response === 'deleted'){
      const jobTitles = await jobTitleAPI.read({email,password});
      setJobTitles(jobTitles);
    } 
  
  }  

  const modifieJobTitle = jobTID =>{
    setJobTitleIDFormField(jobTID);
    setDisplayModifieJobTitleForm('block');
  }
   
  const allJobTitles = jobTitles.map((jobT) =>{

    return (<tr key={jobT.jobTitleID}>
      <td>{jobT.jobTitleID}</td>
      <td>{jobT.jobTitle}</td>
      <td><button onClick={()=>modifieJobTitle(jobT.jobTitleID)} className='modifieBtn'>Modifie</button></td>
      <td><button onClick={()=>deleteJobTitle(jobT.jobTitleID)} className='deleteBtn'>Delete</button></td>
    </tr>);
  
});

   
   
   return (<table>
     <thead>
        <tr>
          <th>Job Title ID</th>
          <th>Job Title</th>
          <th>Modifie</th>
          <th>Delete</th>
        </tr>
      </thead> 
      <tbody>
          {allJobTitles}
      </tbody>
      </table>);
}

export default JobTitleTable;