import Chart from '../Chart/Chart';
import Departments from '../Departments/Departments';
import Employees from '../Employees/Employees';
import JobTitles from '../JobTitles/JobTitles';
import MyAccount from '../MyAccount/MyAccount';
import Reports from '../Reports/Reports';


function Display({routeDisplay}){

    const renderSwitch = (route) =>{

        switch(route){
            case 'chart':
                return <Chart />;
            case 'departments':
                   return <Departments />
            case 'employees':
                return <Employees />
            case 'jobTitles':
                return <JobTitles />;
            case 'myAccount':
                return <MyAccount />
            case 'reports':
                return <Reports />
            default:
                return (<h1>Error: Something went wrong!!!</h1>);
        }

    }

    return(<div>
        {renderSwitch(routeDisplay)}
    </div>);
}

export default Display;