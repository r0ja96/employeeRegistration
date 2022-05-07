import loginAPI from "../../api/loginAPI";
import { connect } from 'react-redux';
import { setLoginFields } from '../../redux/actions/loginActions';

const mapDispatchToProps = (dispatch) =>{
    return {
        setLoginFields: (loginFields) => dispatch(setLoginFields(loginFields))
    }
}


function Login(props){
    

    const handleSubmit = async (event) =>{
        event.preventDefault();
        const{ email, password} = event.target.elements;
        const loginFields = { email: email.value,password: password.value}
        const response = await loginAPI(loginFields);
        if(response === 'access'){
            props.setLoginFields(loginFields);
            props.setRoute('home');
        }
        console.log(response);
    }

    return(
        <div className="fullScreen formLoginRegister">
            <form onSubmit={ handleSubmit}>
                <h1>LOGIN</h1>
                <input type='email' name='email' placeholder="E-MAIL" maxLength={'40'} required/>
                <input type='password' name='password'placeholder="PASSWORD" maxLength={'40'} required/>
                <input type='submit'  value='LOGIN' />
                <a onClick={()=>props.setRoute('register')}>REGISTER</a>            
            </form>
        </div>
    );
}

export default connect(null, mapDispatchToProps)(Login);