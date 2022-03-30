import DeparmentTable from "../DepartmentTable/DepartmentTable";

function Deparments(){

    return(<div>
        <div className="jobDepartment">
            <h1>Deparments</h1>
            <div>
            <form>
                <input type={'text'} placeholder='Seach'/>
                <input type={'submit'} value={'search'}/>
            </form>
            <form>
                <input type={'text'} placeholder='ID Number'/>
                <input type={'text'} placeholder='Department'/>
                <input type={'submit'} value={'Add'}/>
            </form>
            </div>
            <DeparmentTable/>
        </div>
    </div>);

}

export default Deparments;