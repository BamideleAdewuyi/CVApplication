import GeneralSection from "./GeneralSection";
import Submissions from "./Submissions";
import EducationSection from "./EducationSection";
import './CV.css'
import { useState } from "react";

function CV() {
    const [isFormVisible, setFormVisible] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [noOfSchools, setNoOfSchools] = useState(0);
    const [education, setEducation] = useState([]);

    const castArray = value => Array.isArray(value) ? value : [value];

    function addItem(item, stateFunction) {
        stateFunction(prevItems => [...prevItems, item]);
    };

    function addEducation(subjects, schools, years) {
        setEducation([]);
        for (let i = 0; i < noOfSchools; i++) {
            addItem({
                subject: subjects[0][i] ? subjects[0][i].value : subjects[i].value,
                school: schools[0][i] ? schools[0][i].value : schools[i].value,
                year: years[0][i] ? years[0][i].value : years[i].value
            }, setEducation);
        };
    };

    function handleSubmit(e) {
        e.preventDefault();
        setName(e.target.elements.name.value);
        setEmail(e.target.elements.email.value);
        setPhoneNumber(e.target.elements.phoneNumber.value);
        const subjects = castArray(e.target.elements.subject);
        const schools = castArray(e.target.elements.school);
        const years = castArray(e.target.elements.year);
        addEducation(subjects, schools, years);
        setFormVisible(false);
    }
    
    function editForm() {
        setFormVisible(true);
    }

   function addSchool() {
        setNoOfSchools(noOfSchools+1);
   };
   
    return (
        isFormVisible ? 
        <form action="" onSubmit={handleSubmit}>
        <GeneralSection
        name={name}
        email={email}
        phoneNumber={phoneNumber}/>
        <h2>Education</h2>
        {Array.from({length: noOfSchools}).map((_, index) => (
            <div className="educationSection" key={`eductionSection${index}`}>
                <EducationSection
                key={`education${index}`}
                school=""
                subject=""
                year=""/>
                <button type="button" key={`educationButton${index}`}>Delete</button>
            </div>

        ))}
        <button type="button" onClick={addSchool}>Add education</button>
        <h2>Experience</h2>
        <button type="button">Add experience</button>
        <button>Submit</button>
        </form>
        :
        <div>
            <Submissions
            name={name}
            email={email}
            phoneNumber={phoneNumber}
            education={education}/>
            <button onClick={editForm}>Edit</button>
        </div>
    )
}

export default CV;