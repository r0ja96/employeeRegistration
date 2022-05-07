async function loginAPI(loginFields){
    try {
        
         const response = await fetch('http://173.230.148.27:4400/account/signin',{
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