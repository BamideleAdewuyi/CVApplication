import GeneralSection from "./GeneralSection";
import Submissions from "./Submissions";
import EducationSection from "./EducationSection";
import './CV.css'
import { useState, useId, use } from "react";

function CV() {
    const [isFormVisible, setFormVisible] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [edId, setEdId] = useState(0);
    const [education, setEducation] = useState([]);

    function addItem(item, stateFunction) {
        stateFunction(prevItems => [...prevItems, item]);
    };

    function addEducation(subject, school, year) {

        addItem({id: edId,
            subject: subject,
            school: school,
            year: year
        }, setEducation)
        setEdId(edId+1);
    };

    function addSchool() {
        addEducation("", "", "");
    };

    function deleteSchool(id) {

        const newEducation = education.filter(ed => 
            ed.id != id
        );

        setEducation(newEducation);
    };

    function handleSubmit(e) {
        e.preventDefault();
        setName(e.target.elements.name.value);
        setEmail(e.target.elements.email.value);
        setPhoneNumber(e.target.elements.phoneNumber.value);
        setFormVisible(false);
    }
    
    function editForm() {
        setFormVisible(true);
    }

    function updateEducation(value, id, name) {

        const newEducation = education.map(ed => {
            if (ed.id == id) {
                return {...ed, [name]: value}
            } else {
                return {...ed}
            }
        })

        setEducation(newEducation);
    }
   
    return (
        isFormVisible ? 
        <form action="" onSubmit={handleSubmit}>
        <GeneralSection
        name={name}
        email={email}
        phoneNumber={phoneNumber}/>
        <h2>Education</h2>
        {education.map(ed => (
            <div className="educationSection" key={`educationSection${ed.id}`}>
                <EducationSection
                key={`education${ed.id}`}
                school= {ed.school ? ed.school : ""}
                subject={ed.subject ? ed.subject : ""}
                year={ed.year ? ed.year : ""}
                id={ed.id}
                stateFunction={(value, id, name) => updateEducation(value, id, name)}/>
                <button type="button" onClick={() => deleteSchool(ed.id)} key={`educationButton${ed.id}`}>Delete</button>
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