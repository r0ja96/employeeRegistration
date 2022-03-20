import "./Navigation.css";

function Navigation({setRoute}){
    return(
    <nav>
        <ul>
            <li>My info</li>
            <li>about</li>
            <li>home</li>
            <li>My info</li>
            <li>about</li>
            <li onClick={()=>setRoute('login')}>logout</li>
        </ul>
    </nav>)
}

export default Navigation;