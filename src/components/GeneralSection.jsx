import Input from "./Input";

function GeneralSection({name, email, phoneNumber}) {
    return (
        <>
        <h2>Personal Details</h2>
        <Input 
        label="Name" 
        className="generalSectionInput"
        name="name"
        value={name}/>
        <Input 
        label="Email" 
        type="email" 
        className="generalSectionInput"
        name="email"
        value={email}/>
        <Input 
        label="Phone Number" 
        className="generalSectionInput"
        name="phoneNumber"
        value={phoneNumber}/>
        </>
    )
};

export default GeneralSection;