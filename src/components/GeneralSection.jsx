import Input from "./Input";

function GeneralSection() {
    return (
        <>
        <h2>Personal Details</h2>
        <Input label="Name"/>
        <Input label="Email" type="email"/>
        <Input label="Phone Number"/>
        </>
    )
};

export default GeneralSection;