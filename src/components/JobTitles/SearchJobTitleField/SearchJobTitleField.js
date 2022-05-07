function SearchJobTitleField({setSearchField}){
    const onSearchChange = (e) =>{
        setSearchField(e.target.value);
    }

 return(<form>
    <input type={'text'} placeholder='Search(Job Title ID, Job Title)' onChange={onSearchChange}/>
</form>);
}

export default SearchJobTitleField;