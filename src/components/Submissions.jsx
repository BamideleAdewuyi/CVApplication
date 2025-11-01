function Submissions({name, email, phoneNumber, education, experience}) {
    return(
        <>
        <h2>Personal Details</h2>
        <h3>{name}</h3>
        <h4>{email}</h4>
        <h5>{phoneNumber}</h5>
        <h2>Education</h2>
        {Array.from({length: education.length}).map((_, index) => (
            <div className="educationSubmissions" key={`educationSubmissions${index}`}>
                <p>School/University: {education[index].school}</p>
                <p>Subject: {education[index].subject}</p>
                <p>Completed: {education[index].year}</p>
            </div>
        ))}
        <h2>Experience</h2>
        {Array.from({length: experience.length}).map((_, index) => (
            <div className="experienceSubmissions" key={`experienceSubmissions${index}`}>
                <p>Company: {experience[index].company}</p>
                <p>Job Title: {experience[index].title}</p>
                <p>From: {experience[index].startYear}</p>
                <p>To: {experience[index].endYear}</p>
                <p>Description: {experience[index].description}</p>
            </div>
        ))}
        </>
    )
}

export default Submissions;