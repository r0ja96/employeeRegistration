import "./Navigation.css";

function Navigation({setRoute, setRouteDisplay}){
    return(
    <nav>
        <ul>
            <li onClick={()=>setRouteDisplay('myAccount')}>My Account</li>
            <li onClick={()=>setRouteDisplay('employees')}>Employees</li>
            <li onClick={()=>setRouteDisplay('departments')}>Deparments</li>
            <li onClick={()=>setRouteDisplay('jobTitles')}>Job titles</li>
            <li onClick={()=>setRouteDisplay('dashboard')}>Dashboard</li>
            <li onClick={()=>setRouteDisplay('reports')}>Report</li>
            <li onClick={()=>setRoute('login')}>logout</li>
        </ul>
    </nav>)
}

export default Navigation;