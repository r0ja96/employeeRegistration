import departmentAPI from '../../api/departmentAPI';
import { useState,useEffect} from 'react';
import { connect } from 'react-redux';
import DepartmentSelect from './DepartmentSelect/DepartmentSelect';
import GenderChart from './GenderChart/GenderChart';

const mapStateToProps = state =>{
  return{
      email: state.loginFields.email,
      password: state.loginFields.password
  }
} 

function Chart ({email, password}) {

  const initialChartData =[{
    "gender": "F",
    "amount": 0
},
{
    "gender": "M",
    "amount": 0
}];

  const [chartData,setChartData] = useState(initialChartData);
  const [departments,setDepartments] = useState([]);
  
  useEffect(async() =>{
    
      const deps =  await departmentAPI.read({email,password});
      setDepartments(deps);  

  });
   
      return (
        <div className='fullScreen reportChart'>
        <div><h1>Department Chart by Gender</h1></div>
        <div>
          <DepartmentSelect email={email} password={password} setChartData={setChartData} departments ={departments} initialChartData ={initialChartData}/>
        </div>
        <div>
          <GenderChart chartData={chartData}/>
        </div>
        </div>
      );
    
  }

export default connect(mapStateToProps,null)(Chart);