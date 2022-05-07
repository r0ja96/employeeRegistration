
async function registerAPI(account){
try {
    
     const response = await fetch('http://173.230.148.27:4400/account',{
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(account)
        });

    const data = await response.json();

    return (data.message);
    }catch (error) {

        return(error);
    }
}

export default registerAPI;