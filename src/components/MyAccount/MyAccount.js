import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import myAccountAPI from '../../api/myAccountAPI';
import './MyAccount.css';


const mapStateToProps = state =>{
    return{
        email: state.loginFields.email,
        password: state.loginFields.password
    }
} 

function MyAccount({email,password}){

    const [accountInfo,setAccountInfo] = useState([{
        name:'',
        lastName:'',
        email:'',
        birthday:'',
        age:0
    }]);

    useEffect(async() =>{
        const account = await myAccountAPI({email,password});
        setAccountInfo(account);
    },[]);

    return(<div id='myAccount' className='fullScreen'>
        <div>
            <h1>My Account</h1>
            <p>Name: {accountInfo[0].name}</p>
            <p>Last Name: {accountInfo[0].lastName}</p>
            <p>Birthday: {accountInfo[0].birthday}</p>
            <p>Age: {accountInfo[0].age}</p>
            <p>Email: {accountInfo[0].email}</p>
        </div>
    </div>);

}

export default connect(mapStateToProps,null)(MyAccount);