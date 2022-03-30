function DeparmentTable(){
    return (<table>
      <thead>
        <tr>
          <th>ID Number</th>
          <th>Deparment</th>
          <th>Modifie</th>
    <th>Delete</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>12345</td>
          <td>Human resource</td>
          <td><button className='modifieBtn'>Modifie</button></td>
    <td><button className='deleteBtn'>Delete</button></td>
        </tr>
        </tbody>
      </table>);
}

export default DeparmentTable;