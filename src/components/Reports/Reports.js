import employeeAPI from '../../api/employeeAPI';
import EmployeeSelect from './EmployeeSelect/EmployeeSelect';
import {useState,useEffect} from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state =>{
    return{
        email: state.loginFields.email,
        password: state.loginFields.password
    }
} 

function Reports({email, password}){


   const [employees,setEmployees] = useState([]);
   const [report,setReport] = useState('');

    useEffect(async () => {

        const response = await employeeAPI.read({email,password});
        setEmployees(response);

    },[]);

  

    return(<div className='fullScreen reportChart'>
            <div>
            <h1>Reports</h1>
            </div>
            < EmployeeSelect email={email} password={password} setReport={setReport} employees={employees}/>
            <div>
                <object  type="application/pdf" data={report}>
                    <p>Select an employee</p>
                </object>
            </div>
        
    </div>);

}

export default connect(mapStateToProps,null)(Reports);