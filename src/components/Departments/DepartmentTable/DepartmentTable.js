
function DeparmentTable({departments,email,password,departmentAPI,setDepartments,setDisplayModifieDepartmentForm,setDepartmentIDFormField}){

    const deleteDepartment = async (departmentID)=>{

      const response = await departmentAPI.del({email,password,departmentID});
      
      if(response === 'deleted'){
        const departments = await departmentAPI.read({email,password});
        setDepartments(departments);
      } 
    
    }  
  
    const modifieDepartment = depID =>{
      setDepartmentIDFormField(depID);
      setDisplayModifieDepartmentForm('block');
    }

    const allDepartments = departments.map((dep) =>{

        return (<tr key={dep.departmentID}>
          <td>{dep.departmentID}</td>
          <td>{dep.department}</td>
          <td><button onClick={()=>modifieDepartment(dep.departmentID)} className='modifieBtn'>Modifie</button></td>
          <td><button onClick={()=>deleteDepartment(dep.departmentID)} className='deleteBtn'>Delete</button></td>
        </tr>);
      
    });

    return (<table>
      <thead>
        <tr>
          <th>Department ID</th>
          <th>Deparment</th>
          <th>Modifie</th>
          <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        {allDepartments}
        </tbody>
      </table>);
}

export default DeparmentTable;