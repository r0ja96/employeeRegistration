async function loginAPI(loginFields){
    try {
        
         const response = await fetch('https://employeeregistration.herokuapp.com/account/signin',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(loginFields)
            });
    
        const data = await response.json();
    
        return (data.message);
        }catch (error) {
    
            return(error);
        }
    }
    
export default loginAPI;