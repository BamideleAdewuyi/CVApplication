import Input from "./Input";

function EducationSection({school, subject, year}) {
    return(
        <>
        <Input 
        label="School/University" 
        className="educationSectionInput"
        name="school"
        value={school}/>
        <Input 
        label="Subject" 
        className="educationSectionInput"
        name="subject"
        value={subject}/>
        <Input 
        label="Year completed" 
        className="educationSectionInput"
        name="year"
        type="month"
        value={year}/>
        </>
    )
};

export default EducationSection;