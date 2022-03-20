import Display from "./components/Display/Display";
import Navigation from "./components/Navigation/Navigation.js";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./App.css";
import { useState } from "react";

function App(){

    const [routes,setRoute] = useState('login');

   const renderSwitch = (route) =>{

        console.log(route);

        switch(route){
            case 'login':
                return <Login setRoute={setRoute}/>;
            case 'home':
                return (
                <div id = "mainApp" className="fullScreen">
                    <Navigation setRoute={setRoute}/>
                    <Display/>
                </div>);
            case 'register':
                return <Register setRoute={setRoute}/>
            default:
                return (<h1>Error: Something went wrong!!!</h1>);
        }

    }

    return(
        <div>
            {renderSwitch(routes)}
        </div>
    )
}

export default App;