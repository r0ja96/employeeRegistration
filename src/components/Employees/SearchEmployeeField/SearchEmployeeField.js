function SearchEmployeeField({setSearchField}){

    const onSearchChange = (e) =>{
        setSearchField(e.target.value);
    }

    return(
        <form>
            <input type={'text'} placeholder='Search(EmplyeeID,Name,LastName)' onChange={onSearchChange}/>
       </form>
    );
}

export default SearchEmployeeField;