
function Login({setRoute}){
    return(
        <div className="fullScreen formLoginRegister">
            <form onSubmit={()=>setRoute('home')}>
                <h1>LOGIN</h1>
                <input type='text' placeholder="E-MAIL"/>
                <input type='text' placeholder="PASSWORD"/>
                <input type='submit'  value='LOGIN' />
                <a onClick={()=>setRoute('register')}>REGISTER</a>            
            </form>
        </div>
    );
}

export default Login;