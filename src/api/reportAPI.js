async function getReport({email, password, employeeID}){
    try {
        
         const response = await fetch('http://173.230.148.27:4400/report',{
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