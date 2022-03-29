import './EmployeeTable.css';

function EmployeeTable(){
  return (<table>
    <thead> 
  <tr>
    <th >ID Number</th>
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
  <tr>
    <td>12345</td>
    <td>Maria </td>
    <td>Gonzales</td>
    <td>F</td>
    <td>60-19-1996</td>
    <td>25</td>
    <td>Human resource</td>
    <td>Recurter</td>
    <td><button>Modifie</button></td>
    <td><button>Delete</button></td>
  </tr>
  </tbody>
</table>);
}

export default EmployeeTable;