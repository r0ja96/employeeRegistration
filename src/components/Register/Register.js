function register({setRoute}){
    return(
        <div className="fullScreen formLoginRegister">
            <form onSubmit={()=>setRoute('login')}>
                <h1>REGISTER</h1>
                <input type='text'placeholder="NAME"/>
                <input type='text' placeholder="LAST NAME"/>
                <input type='date' placeholder="BIRTHDAY"/>
                <input type='text' placeholder="E-MAIL"/>
                <input type='text' placeholder="PASSWORD"/>
                <input type='submit'  value='REGISTER'/>
                <a onClick={()=>setRoute('login')}>BACK TO LOGIN</a>            
            </form>
        </div>
    );
}

export default register;