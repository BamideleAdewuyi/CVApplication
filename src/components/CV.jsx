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
            <EducationSection
            key={index}
            school="School"
            subject="Subject"
            year="2020-06"/>
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
            phoneNumber={phoneNumber}/>
            <button onClick={editForm}>Edit</button>
        </div>
    )
}

export default CV;