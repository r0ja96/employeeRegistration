async function insert(department){
    try {

         const response = await fetch('http://localhost:4400/department',{
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify(department)
            });
    
        const data = await response.json();
    
        return (data.message);
        }catch (error) {
    
            return(error);
        }
    }

    async function read({email, password}){
        try {
            
             const response = await fetch('http://localhost:4400/department/info',{
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
    
        async function del(department){
            try {
        
                 const response = await fetch('http://localhost:4400/department',{
                        method: 'delete',
                        headers: {'Content-Type':'application/json'},
                        body: JSON.stringify(department)
                    });
            
                const data = await response.json();
            
                return (data.message);
                }catch (error) {
            
                    return(error);
                }
            }

            async function update(department){
                try {
            
                     const response = await fetch('http://localhost:4400/department',{
                            method: 'put',
                            headers: {'Content-Type':'application/json'},
                            body: JSON.stringify(department)
                        });
                
                    const data = await response.json();
                
                    return (data.message);
                    }catch (error) {
                
                        return(error);
                    }
                }

export default  { insert, read, del, update};