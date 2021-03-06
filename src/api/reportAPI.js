async function getReport({email, password, employeeID}){
    try {
        
         const response = await fetch('https://employeeregistration.herokuapp.com/report',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({email, password, employeeID})
            });
            const blob = await response.blob()
        const data = URL.createObjectURL(blob);
    
        return (data);
        }catch (error) {
    
            return(error);
        }
    } 

export default {getReport};