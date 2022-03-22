import EmployeeTable from "../EmployeeTable/EmployeeTable";

function Employees(){

    return(<div>
        <div>
            <h1>Employees</h1>
            <form>
            <input type={'text'}/>
            <input type={'submit'} value={'Search'}/>
            </form>
            <button>Add Employee</button>
            < EmployeeTable />
        </div>
    </div>);

}

export default Employees;