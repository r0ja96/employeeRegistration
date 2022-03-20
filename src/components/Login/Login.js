
function Login({setRoute}){
    return(
        <div className="fullScreen formLoginRegister">
            <form onSubmit={()=>setRoute('home')}>
                <h1>Login</h1>
                <label>Email</label>
                <input type='text'/>
                <label>Password</label>
                <input type='text'/>
                <input type='submit'  value='Login' />
                <a onClick={()=>setRoute('register')}>Register</a>            
            </form>
        </div>
    );
}

export default Login;