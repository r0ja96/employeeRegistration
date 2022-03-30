import JobTitleTable from "../JobTitleTable/JobTitleTable";

function JobTitles(){

    return(<div>
        <div className="jobDepartment">
            <h1>JobTitles</h1>
            <div>
            <form>
                <input type={'text'} placeholder='Search'/>
                <input type={'submit'} value={'search'}/>
            </form>
            <form>
                <input type={'text'} placeholder='ID Number'/>
                <input type={'text'} placeholder='Job title'/>
                <input type={'submit'} value={'Add'}/>
            </form>
            </div>
            <JobTitleTable/>
        </div>
    </div>);

}

export default JobTitles;