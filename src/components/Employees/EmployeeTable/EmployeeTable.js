

function EmployeeTable({employees,email,password,employeeAPI,setEmployees,setDisplayEmployeeForm,setEmployeeFormFields}){

  const deleteEmployee = async (employeeID)=>{

    const response = await employeeAPI.del({email,password,employeeID});
    
    if(response === 'deleted'){
      const ems = await employeeAPI.read({email,password});
      setEmployees(ems);
    } 

  }

  const modifieEmployee = (em) =>{
    setEmployeeFormFields(em);
    setDisplayEmployeeForm('modifieEmployeeForm');
  }

  const allEmployees = employees.map((em)=>{
    return(<tr key={em.employeeID}>
    <td>{em.employeeID}</td>
    <td>{em.name}</td>
    <td>{em.lastName}</td>
    <td>{em.gender}</td>
    <td>{em.birthday}</td>
    <td>{em.age}</td>
    <td>{em.department}</td>
    <td>{em.jobTitle}</td>
    <td><button onClick={()=>modifieEmployee(em)} className='modifieBtn'>Modifie</button></td>
    <td><button onClick={()=>deleteEmployee(em.employeeID)} className='deleteBtn'>Delete</button></td>
  </tr>);
  });




  return (<table>
    <thead> 
  <tr>
    <th>Employee ID</th>
    <th>Name</th>
    <th>Last Name</th>
    <th>Gender</th>
    <th>Date of birth</th>
    <th>Age</th>
    <th>Department</th>
    <th>Job title</th>
    <th>Modifie</th>
    <th>Delete</th>
  </tr>
  </thead>
  <tbody>
    {allEmployees}
  </tbody>
</table>);
}

export default EmployeeTable;