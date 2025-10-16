import GeneralSection from "./GeneralSection";
import './CV.css'

function CV() {
    function handleSubmit(e) {
      e.preventDefault();
      const name = e.target.elements.name.value;
      const email = e.target.elements.email.value;
      const phoneNumber = e.target.elements.phoneNumber.value;
   }
    return (
        <form action="" onSubmit={handleSubmit}>
        <GeneralSection/>
        <button>Submit</button>
        </form>
    )
}

export default CV;