function register({setRoute}){
    return(
        <div className="fullScreen formLoginRegister">
            <form onSubmit={()=>setRoute('login')}>
                <h1>Register</h1>
                <label>Email</label>
                <input type='text'/>
                <label>Password</label>
                <input type='text'/>
                <input type='submit'  value='Register'/>
                <a onClick={()=>setRoute('login')}>Back to Login</a>            
            </form>
        </div>
    );
}

export default register;