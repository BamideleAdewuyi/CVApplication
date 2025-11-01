import Input from "./Input";

function ExperienceSection({company, title, startYear, endYear, description, stateFunction, id}) {
    return(
        <>
        <Input 
        label="Company" 
        className="experienceSectionInput"
        name="company"
        value={company}
        id={id}
        stateFunction = {stateFunction}/>
        <Input 
        label="Job Title" 
        className="experienceSectionInput"
        name="title"
        value={title}
        id={id}
        stateFunction = {stateFunction}/>
        <Input 
        label="From" 
        className="experienceSectionInput"
        name="from"
        type="month"
        value={startYear}
        id={id}
        stateFunction = {stateFunction}/>
        <Input 
        label="To" 
        className="experienceSectionInput"
        name="to"
        type="month"
        value={endYear}
        id={id}
        stateFunction = {stateFunction}/>
        <Input 
        label="Description" 
        className="experienceSectionInput"
        name="description"
        value={description}
        id={id}
        stateFunction = {stateFunction}/>
        </>
    )
}

export default ExperienceSection;