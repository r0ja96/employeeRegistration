function SearchDepartmentField({setSearchField}){

    const onSearchChange = (e) =>{
        setSearchField(e.target.value);
    }

 return(<form>
    <input type={'text'} placeholder='Search(DepartmentID,Department)' onChange={onSearchChange}/>
</form>);
}

export default SearchDepartmentField;