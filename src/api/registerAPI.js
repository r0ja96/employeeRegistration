
async function registerAPI(account){
try {
    
     const response = await fetch('https://employeeregistration.herokuapp.com/account',{
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