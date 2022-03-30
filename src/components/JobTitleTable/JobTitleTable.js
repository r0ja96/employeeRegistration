function JobTitleTable(){
    return (<table>
        <tr>
          <th>ID Number</th>
          <th>Job Title</th>
          <th>Modifie</th>
          <th>Delete</th>
        </tr>
        <tr>
          <td>12345</td>
          <td>recruiter</td>
          <td><button className='modifieBtn'>Modifie</button></td>
    <td><button className='deleteBtn'>Delete</button></td>
        </tr>
      </table>);
}

export default JobTitleTable;