import GeneralSection from "./GeneralSection";
import './CV.css'

function CV() {
    function handleSubmit(e) {
      e.preventDefault();
   }
    return (
        <form action="" onSubmit={handleSubmit}>
        <GeneralSection/>
        <button>Submit</button>
        </form>
    )
}

export default CV;