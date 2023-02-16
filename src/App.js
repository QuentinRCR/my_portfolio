import './App.scss';
import Project from './components/Project'
import React from "react";
import BusSchedulesDemonstation from './images/bus_schedules_demonstation.png'
import PortfolioImage from './images/portfolio.png'

function App() {
    let projectInformation = [
        {
            title: "This web portfolio",
            repositoriesURL: {
                frontend: "https://github.com/QuentinRCR/my_portfolio"
            },
            dates: {
                start: "February 2023",
                end: "Today"
            },
            technologies: {
                frontend:"React",
                css: "Sass"
            },
            illustration: {
                image: PortfolioImage,
                description: "Image of a portfolio"
            },
        },
        {
            title: "Personal project - Consultation of bus schedules",
            repositoriesURL: {
                backend: "https://github.com/QuentinRCR/backend-shuttle-time-display",
                frontend: "https://github.com/QuentinRCR/shuttle-time-display"
            },
            dates: {
                start: "January 2023",
                end: "Today"
            },
            technologies: {
                backend:"SpringBoot",
                frontend:"React",
                css: "Sass"
            },
            illustration: {
                image: BusSchedulesDemonstation,
                description: "Demonstration of a display of bus schedules"
            },
            websiteURL: null
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
                frontend:"Vue",
                css: "Sass"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1H4_u8ao7DGZO2L2rPvkl3VUS00g7HXLJ/preview",
                description: "Presentation appointment scheduler"
            },
            websiteURL: null
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
            websiteURL: "https://donut.ctc-42.org/"
        }
    ];
    return (
    <div className="App">
        <header className="header">
            <h1>My portfolio - REY Quentin</h1>
            <hr/>
        </header>
        <main>
            {projectInformation?.map((project,index) => //display all the project cards
                <React.Fragment key={project.title}>
                    <Project
                        title={project.title}
                        repositories={project.repositoriesURL}
                        dates={project.dates}
                        technologies={project.technologies}
                        illustration={project.illustration}
                        websiteURL={project.websiteURL}
                        index={index}
                        className="project"
                    ></Project>
                    <hr/>
                </React.Fragment>
            )}
        </main>
        <footer> {/*used to avoid bug in the mobile version*/}
        </footer>
    </div>
    );
}

export default App;
