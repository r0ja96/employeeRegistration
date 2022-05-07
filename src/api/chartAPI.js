async function info({email, password,department}){
    try {
        
         const response = await fetch('http://localhost:4400/chart/info',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({email, password, department})
            });
    
        const data = await response.json();
    
        return (data.message);
        }catch (error) {
    
            return(error);
        }
    } 

export default {info};