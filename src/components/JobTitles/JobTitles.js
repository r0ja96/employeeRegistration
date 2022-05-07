import JobTitleTable from "./JobTitleTable/JobTitleTable";
import AddJobTitleButton from "./AddJobTitleButton/AddJobTitleButton";
import AddJobTitleForm from "./AddJobTitleForm/AddJobTitleForm";
import ModifieJobTitleForm from "./ModifieJobTitleForm/ModifieJobTitleForm";
import SearchJobTitleField from "./SearchJobTitleField/SearchJobTitleField";
import jobTitleAPI from "../../api/jobTitleAPI";
import { connect } from 'react-redux';
import { useState, useEffect } from "react";

const mapStateToProps = state =>{
    return{
        email: state.loginFields.email,
        password: state.loginFields.password
    }
} 


function JobTitles({email, password}){

    const [jobTitles, setJobTitles] = useState([]);
    const [displayAddJobTitleForm, setDisplayAddJobTitleForm] = useState('none');
    const [displayModifieJobTitleForm, setDisplayModifieJobTitleForm] = useState('none');
    const [jobTitleIDFormField, setJobTitleIDFormField] = useState('');
    const [searchField, setSearchField] = useState('');

    useEffect(async() =>{
        const jobTitle = await jobTitleAPI.read({email,password});
        setJobTitles(jobTitle);
    },[]);

    const filteredJobTitles = jobTitles.filter(jobTitle =>{
        const jt = jobTitle.jobTitleID+jobTitle.jobTitle
        return jt.toLocaleLowerCase().includes(searchField.toLocaleLowerCase());
    });

    return(<div className="fullScreen divRelitive">
        <div className="jobDepEm">
            <div>
            <h1>Job Titles</h1>
            </div>
            <div className="addSearch">
            <SearchJobTitleField setSearchField={setSearchField}/>
            <AddJobTitleButton setDisplayAddJobTitleForm={setDisplayAddJobTitleForm} />
            </div>
            <div>
            <JobTitleTable jobTitles = {filteredJobTitles} jobTitleAPI={jobTitleAPI} email={email} password={password} setJobTitles={setJobTitles} setDisplayModifieJobTitleForm={setDisplayModifieJobTitleForm} setJobTitleIDFormField={setJobTitleIDFormField}/>
            </div>
        </div>
        <AddJobTitleForm displayAddJobTitleForm={displayAddJobTitleForm} setDisplayAddJobTitleForm={setDisplayAddJobTitleForm}
        email={email} password={password} jobTitleAPI={jobTitleAPI} setJobTitles={setJobTitles}/>

        <ModifieJobTitleForm displayModifieJobTitleForm={displayModifieJobTitleForm} setDisplayModifieJobTitleForm={setDisplayModifieJobTitleForm}
        email={email} password={password} jobTitleAPI={jobTitleAPI} setJobTitles={setJobTitles} jobTitleIDFormField={jobTitleIDFormField}/>

    </div>);

}

export default connect(mapStateToProps,null)(JobTitles);