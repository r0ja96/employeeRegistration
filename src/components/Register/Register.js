import { useState } from "react";
import registerAPI from "../../api/registerAPI";

function Register({setRoute}){

    const [error, setError] = useState('none');

    const handleSubmit = async (event) =>{
        
        event.preventDefault();
        const{ email, password, name, lastName, birthday, gender } = event.target.elements;
        const account = {
            email: email.value,
            password: password.value,
            name: name.value,
            lastName: lastName.value,
            birthday: birthday.value,
            gender: gender.value
        }

    const response = await registerAPI(account);
    if(response === "register" ) setRoute('login');
    if(response === "Email already exist") setError('block');
    
}
    
    const focus = (event)=>{
        event.currentTarget.type = "date";
    }
    
    return(
        <div className="fullScreen formLoginRegister">
            <form onSubmit={handleSubmit}>
                <h1>REGISTER</h1>
                <input type='text'placeholder="NAME" name='name' maxLength={'40'} required/>
                <input type='text' placeholder="LAST NAME" name='lastName' maxLength={'40'} required/>
                <select placeholder="Gender" name="gender"defaultValue="" required>
                <option disabled={true} value="">GENDER</option>
                <option value="M">Male</option>
                <option value="F">Female</option>
                </select>
                <input type='text' onFocus= {focus}  placeholder="BIRTHDAY" name='birthday'required/>
                <input type='email' placeholder="E-MAIL" name = 'email' maxLength={'40'} required/>
                <p style={{color: "rgb(200, 0, 0)", display: error}}>Email already exist</p>
                <input type='password' placeholder="PASSWORD" name='password' maxLength={'40'} required/>
                <input type='submit'  value='REGISTER'/>
                <a onClick={()=>setRoute('login')}>BACK TO LOGIN</a>            
            </form>
        </div>
    );
}

export default Register;