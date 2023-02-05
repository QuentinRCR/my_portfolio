import './App.scss';
import Project from './components/Project'
import React from "react";
import BusSchedulesDemonstation from './images/bus schedules demonstation.png'

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
                backend:"SpringBoot",
                frontend:"React"
            },
            illustration: {
                image: BusSchedulesDemonstation,
                description: "Demonstration of a display of bus schedules"
            },
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
                backend:"SpringBoot",
                frontend:"Vue"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1H4_u8ao7DGZO2L2rPvkl3VUS00g7HXLJ/preview",
                description: "Presentation appointment scheduler"
            },
            website: null
        },
        {
            title: "Web interface to display the data of the ecological situation of Saint-Etienne",
            repositoriesURL: {
            },
            dates: {
                start: "September 2021",
                end: "June 2022"
            },
            technologies: {
                frontend:"JavaScript"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1vrd1uS6NpBM1zBcdDou7RCiJq4mFOPBF/preview",
                description: "Presentation interface on the ecological situation of Saint-Etienne"
            },
            website: "https://donut.ctc-42.org/"
        }
    ]
    return (
    <div className="App">
        <header className="header">
            <h1>My portfolio - REY Quentin</h1>
            <hr/>
        </header>
        <main>
            {projectInformation?.map(project => //display all the project cards
                <React.Fragment>
                    <Project
                        key={project.title}
                        title={project.title}
                        repositories={project.repositoriesURL}
                        dates={project.dates}
                        technologies={project.technologies}
                        illustration={project.illustration}
                    ></Project>
                    <hr/>
                </React.Fragment>
            )}
        </main>
    </div>
    );
}

export default App;
