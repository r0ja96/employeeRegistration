async function insert(jobTitle){
    try {

         const response = await fetch('https://employeeregistration.herokuapp.com/jobTitle',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(jobTitle)
            });
    
        const data = await response.json();
    
        return (data.message);
        }catch (error) {
    
            return(error);
        }
    }

    async function read({email, password}){
        try {
            
             const response = await fetch('https://employeeregistration.herokuapp.com/jobTitle/info',{
                    method: 'post',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({email, password})
                });
        
            const data = await response.json();
        
            return (data.message);
            }catch (error) {
        
                return(error);
            }
        }    
    
        async function del(jobTitle){
            try {
        
                 const response = await fetch('https://employeeregistration.herokuapp.com/jobTitle',{
                        method: 'delete',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(jobTitle)
                    });
            
                const data = await response.json();
            
                return (data.message);
                }catch (error) {
            
                    return(error);
                }
            }

            async function update(jobTitle){
                try {
            
                     const response = await fetch('https://employeeregistration.herokuapp.com/jobTitle',{
                            method: 'put',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(jobTitle)
                        });
                
                    const data = await response.json();
                
                    return (data.message);
                    }catch (error) {
                
                        return(error);
                    }
                }

export default  { insert, read, del, update};