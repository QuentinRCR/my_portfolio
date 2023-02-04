import './App.scss';
import Project from './components/Project'

function App() {
    let projectInformation = [
        {
            title: "Personal project - Consultation of bus schedules",
            repositoriesURL: {
                backend: "https://github.com/QuentinRCR/backend-shuttle-time-display",
                frontend: "https://github.com/QuentinRCR/shuttle-time-display",
            },
            dates: {
                start: "January 2023",
                end: "Today"
            },
            technologies: {
                frontend:"React",
                backend:"Spring Boot"
            },
            videoURL: null,
            website: null
        },
        {
            title: "Appointment scheduler for the school’s psychologist",
            repositoriesURL: {
                backend: "https://github.com/QuentinRCR/Backend-Appointment-Scheduler",
                frontend: "https://github.com/QuentinRCR/ProjetTechDoctolibFrontend",
            },
            dates: {
                start: "September 2022",
                end: "January 2023"
            },
            technologies: {
                frontend:"Vue",
                backend:"Spring Boot"
            },
            videoURL: "https://drive.google.com/file/d/1H4_u8ao7DGZO2L2rPvkl3VUS00g7HXLJ/preview",
            website: null
        },
        {
            title: "Web interface to display the data of the ecological situation of Saint-Etienne",
            repositoriesURL: {
                backendURL: null,
                frontendURL: null
            },
            dates: {
                start: "September 2021",
                end: "June 2022"
            },
            technologies: {
                frontend:"JavaScript",
                backend:null
            },
            videoURL: "https://drive.google.com/file/d/1H4_u8ao7DGZO2L2rPvkl3VUS00g7HXLJ/preview",
            website: "https://donut.ctc-42.org/"
        }
    ]
    return (
    <div className="App">
        {projectInformation?.map(project => //display all the project cards
            <Project
                    key={project.title}
                    title={project.title}
                     backendURL={project.repositoriesURL.backend}
                     frontendURL={project.repositoriesURL.frontend}
                     dates={[project.dates.start,project.dates.end]}
                     technologies={[project.technologies.frontend,project.technologies.backend]}
                     videoURL={project.videoURL}
            ></Project>
        )}
    </div>
    );
}

export default App;
