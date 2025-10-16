import GeneralSection from "./GeneralSection";
import './CV.css'
import { useState } from "react";

function CV() {
    const [isFormVisible, setFormVisible] = useState(false);

    function handleSubmit(e) {
      e.preventDefault();
      const name = e.target.elements.name.value;
      const email = e.target.elements.email.value;
      const phoneNumber = e.target.elements.phoneNumber.value;
      setFormVisible(true);
   }
   
    return (
        isFormVisible ? 
        <div>
            CV appears here
        </div>
        :
        <form action="" onSubmit={handleSubmit}>
        <GeneralSection/>
        <button>Submit</button>
        </form>
    )
}

export default CV;