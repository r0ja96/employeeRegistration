import {useState,Fragment} from 'react';
import "./Navigation.css";



function Navigation({setRoute, setRouteDisplay}){

   var [displayNavbar,setDisplayNavbar] = useState(false);

    return(<Fragment>
    {displayNavbar ? 
   <nav>
    <button className="deleteBtn" onClick={()=>setDisplayNavbar(false)}>X</button>
        <ul>
            <li onClick={()=>setRouteDisplay('myAccount')}>My Account</li>
            <li onClick={()=>setRouteDisplay('employees')}>Employees</li>
            <li onClick={()=>setRouteDisplay('departments')}>Deparments</li>
            <li onClick={()=>setRouteDisplay('jobTitles')}>Job titles</li>
            <li onClick={()=>setRouteDisplay('chart')}>Chart</li>
            <li onClick={()=>setRouteDisplay('reports')}>Report</li>
            <li onClick={()=>setRoute('login')}>Logout</li>
        </ul>
    </nav>:<button id='menuButton' onClick={()=>setDisplayNavbar(true)}>Menu</button>}
    </Fragment>
    )
}

export default Navigation;
