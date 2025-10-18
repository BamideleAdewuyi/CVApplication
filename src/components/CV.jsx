import GeneralSection from "./GeneralSection";
import './CV.css'
import { useState } from "react";

function CV() {
    const [isFormVisible, setFormVisible] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    function handleSubmit(e) {
      e.preventDefault();
      const name = e.target.elements.name.value;
      const email = e.target.elements.email.value;
      const phoneNumber = e.target.elements.phoneNumber.value;
      setName(e.target.elements.name.value);
      setEmail(e.target.elements.email.value);
      setPhoneNumber(e.target.elements.phoneNumber.value);
      setFormVisible(false);
   }

   function editForm() {
    setFormVisible(true);
   }
   
    return (
        isFormVisible ? 
        <form action="" onSubmit={handleSubmit}>
        <GeneralSection/>
        <button>Submit</button>
        </form>
        :
        <div>
            CV appears here
            <button onClick={editForm}>Edit</button>
        </div>
    )
}

export default CV;