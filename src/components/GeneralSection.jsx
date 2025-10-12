import Input from "./Input";

function GeneralSection() {
    return (
        <>
        <h2>Personal Details</h2>
        <Input 
        label="Name" 
        className="generalSectionInput"
        name="name"/>
        <Input 
        label="Email" 
        type="email" 
        className="generalSectionInput"
        name="email"/>
        <Input 
        label="Phone Number" 
        className="generalSectionInput"
        name="phoneNumber"/>
        </>
    )
};

export default GeneralSection;