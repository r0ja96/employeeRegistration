import DeparmentTable from "../DepartmentTable/DepartmentTable";

function Deparments(){

    return(<div>
        <div>
            <h1>Deparments</h1>
            <form>
                <input type={'text'}/>
                <input type={'submit'} value={'search'}/>
            </form>
            <DeparmentTable/>
        </div>
    </div>);

}

export default Deparments;