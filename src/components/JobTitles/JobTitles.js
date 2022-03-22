import JobTitleTable from "../JobTitleTable/JobTitleTable";

function JobTitles(){

    return(<div>
        <div>
            <h1>JobTitles</h1>
            <form>
                <input type={'text'}/>
                <input type={'submit'} value={'search'}/>
            </form>
            <JobTitleTable/>
        </div>
    </div>);

}

export default JobTitles;