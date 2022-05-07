async function insert(employee){
    try {

         const response = await fetch('http://173.230.148.27:4400/employee',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(employee)
            });
    
        const data = await response.json();
    
        return (data.message);
        }catch (error) {
    
            return(error);
        }
    }

    async function read({email, password}){
        try {
            
             const response = await fetch('http://173.230.148.27:4400/employee/info',{
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
    
        async function del(employee){
            try {
        
                 const response = await fetch('http://173.230.148.27:4400/employee',{
                        method: 'delete',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(employee)
                    });
            
                const data = await response.json();
            
                return (data.message);
                }catch (error) {
            
                    return(error);
                }
            }

            async function update(employee){
                try {
            
                     const response = await fetch('http://173.230.148.27:4400/employee',{
                            method: 'put',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(employee)
                        });
                
                    const data = await response.json();
                
                    return (data.message);
                    }catch (error) {
                
                        return(error);
                    }
                }

export default  { insert, read, del, update};