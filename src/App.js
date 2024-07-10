import './App.scss';
import Project from './components/Project'
import React from "react";
import PortfolioImage from './images/portfolio.png'
import MultiAgentSimulation from './images/multi_agent_simulation.png'
import MigrationImage from "./images/migration-login.png"
import ResearchProjectIllustration from "./images/research_project_illustration.png"

function App() {
    let projectInformation = [
        {
            title: "SmartGloveXfer: Detection and transcription of movements with Transfer learning",
            subtitle: "Enhancing the accuracy of air-drawn letter classification with transfer learning techniques on a small dataset",
            repositoriesURL: {
                "Preprocessing and classifier": "https://github.com/QuentinRCR/Detection-and-transcription-of-movements-with-Transfer-learning"
            },
            dates: {
                start: "February 2023",
                end: "April 2023"
            },
            technologies: {
                "Preprocessing": "Python",
                "Classifiers": "Tensorflow"
            },
            documents: {
                "Scientific paper": "https://drive.google.com/file/d/1QT8ldp5LNaZ6PdTBJYoImtKJp7IY2Wib/view?usp=sharing"
            },
            illustration: {
                image: ResearchProjectIllustration,
                description: "Presentation appointment scheduler"
            },
        },
        {
            title: "Development, implementation and coordination of AI systems in a robot",
            subtitle: "This autonomous robot evolves in a factory simulation where it builds objects. Thanks to its vision and sensors, it locates materials, avoids obstacles, obeys signs (e.g. red lights) and responds to verbal commands.",
            repositoriesURL: {
                "Project and report": "https://github.com/QuentinRCR/Integrating-and-Engineering-Intelligent-Systems/tree/main"
            },
            dates: {
                start: "September 2023",
                end: "January 2023"
            },
            technologies: {
                "Intelligent systems": "Python",
                coordination:"Jacamo",
                OS: "ROS"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1O3CLvxoVbFzjnWxN30qaI9njfS_qFO_t/preview",
                description: "Presentation appointment scheduler"
            },
        },
        {
            title: "Migration of an Excel application towards a web application for an industrial association",
            repositoriesURL: null,
            dates: {
                start: "January 2023",
                end: "July 2023"
            },
            technologies: {
                migration: "Python",
                frontend:"React",
                language: "Typescript",
                css: "Sass",
                backend: "SpringBoot"
            },
            illustration: {
                image: MigrationImage,
                description: "Junior con"
            },
        }
        ,{
            title: "Warehouse simulation with autonomous agents for parcel management",
            repositoriesURL: {
                Simulation: "https://github.com/AI-Challenge-2023/IA_Practice"
            },
            documents: {
                Report: "https://drive.google.com/file/d/169DmtHZJWXHCrx7117IPLwi2K15jHyDJ/view?usp=sharing"
            },
            dates: {
                start: "February 2023",
                end: "May 2023"
            },
            technologies: {
                simulation: "Java"
            },
            illustration: {
                image: MultiAgentSimulation,
                description: "Multi agent simulation"
            },
        },
        {
            title: "This web portfolio",
            repositoriesURL: {
                frontend: "https://github.com/QuentinRCR/my_portfolio"
            },
            dates: {
                start: "February 2023",
                end: "March 2023"
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
                frontend: "https://github.com/ctc42/donut",
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
            {projectInformation?.map((project) => //display all the project cards
                <React.Fragment key={project.title}>
                    <Project
                        title={project.title}
                        subtitle={project.subtitle}
                        repositories={project.repositoriesURL}
                        dates={project.dates}
                        technologies={project.technologies}
                        illustration={project.illustration}
                        websiteURL={project.websiteURL}
                        documents = {project.documents}
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
