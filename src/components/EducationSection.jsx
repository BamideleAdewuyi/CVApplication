import Input from "./Input";

function EducationSection({school, subject, year, stateFunction, id}) {
    return(
        <>
        <Input 
        label="School/University" 
        className="educationSectionInput"
        name="school"
        value={school}
        id={id}
        stateFunction = {stateFunction}/>
        <Input 
        label="Subject" 
        className="educationSectionInput"
        name="subject"
        value={subject}
        id={id}
        stateFunction = {stateFunction}/>
        <Input 
        label="Year completed" 
        className="educationSectionInput"
        name="year"
        type="month"
        value={year}
        id={id}
        stateFunction = {stateFunction}/>
        </>
    )
};

export default EducationSection;