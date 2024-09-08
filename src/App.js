import './App.scss';
import Project from './components/Project'
import OtherProjects from './components/OtherProjects';
import React from "react";
import PortfolioImage from './images/portfolio.png'
import MultiAgentSimulation from './images/multi_agent_simulation.png'
import MigrationImage from "./images/migration-login.png"
import ResearchProjectIllustration from "./images/research_project_illustration.png"

function App() {
    let projectInformation = [
        {
            title: "SmartGloveXfer : Détection et transcription des mouvements grâce à du Transfer learning",
            subtitle: "Amélioration de la précision de la classification de lettres dessinées dans les airs à l'aide de techniques de transfer learning sur un petit ensemble de données",
            repositoriesURL: {
                "Prétraitement et classifieurs": "https://github.com/QuentinRCR/Detection-and-transcription-of-movements-with-Transfer-learning"
            },
            dates: {
                start: "Février 2024",
                end: "Avril 2024"
            },
            technologies: {
                "Prétraitement": "Python",
                "Classifieurs": "Tensorflow"
            },
            documents: {
                "Article scientifique": "https://drive.google.com/file/d/1l521aLKmOVVaeZ6-j6hoz1LLstrSGu5H/view?usp=drive_link",
                "Poster":"https://drive.google.com/file/d/1GsFCxmJakSaGURMHwMg0UtpSTPWb6E5B/view?usp=sharing"
            },
            illustration: {
                image: ResearchProjectIllustration,
                description: "Illustration projet recherche"
            },
        },
        {
            title: "Développement, implémentation et coordination de systèmes d’IA dans un robot",
            subtitle: "Ce robot autonome évolue dans une simulation d'usine où il construit des objets. Grâce à sa vision et ses capteurs, il repère les matériaux, évite les obstacles, respecte les panneaux (ex : feux rouges) et répond aux ordres oraux.",
            repositoriesURL: {
                "Projet et rapport": "https://github.com/QuentinRCR/Integrating-and-Engineering-Intelligent-Systems/tree/main"
            },
            dates: {
                start: "Septembre 2023",
                end: "Janvier 2024"
            },
            technologies: {
                "Systèmes intelligents": "Python",
                coordination:"Jacamo",
                OS: "ROS"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1O3CLvxoVbFzjnWxN30qaI9njfS_qFO_t/preview",
                description: "Presentation appointment scheduler"
            },
        },
        {
            title: "Migration d'une application Excel vers une application web pour une association d'industriels",
            repositoriesURL: null,
            dates: {
                start: "Janvier 2023",
                end: "Juillet 2023"
            },
            technologies: {
                migration: "Python",
                frontend:"React",
                langage: "Typescript",
                css: "Sass",
                backend: "SpringBoot"
            },
            illustration: {
                image: MigrationImage,
                description: "Illustration application web"
            },
        }
        ,{
            title: "Simulation d'entrepôt avec des agents autonomes pour la gestion de colis",
            repositoriesURL: {
                Simulation: "https://github.com/AI-Challenge-2023/IA_Practice"
            },
            documents: {
                Rapport: "https://drive.google.com/file/d/169DmtHZJWXHCrx7117IPLwi2K15jHyDJ/view?usp=sharing"
            },
            dates: {
                start: "Février 2023",
                end: "Mai 2023"
            },
            technologies: {
                simulation: "Java"
            },
            illustration: {
                image: MultiAgentSimulation,
                description: "Capture d'écran de la simulation multi-agent"
            },
        },
        {
            title: "Ce Portfolio",
            repositoriesURL: {
                frontend: "https://github.com/QuentinRCR/my_portfolio"
            },
            dates: {
                start: "Février 2023",
                end: "Mars 2023"
            },
            technologies: {
                frontend:"React",
                css: "Sass"
            },
            illustration: {
                image: PortfolioImage,
                description: "Image d'un portfolio"
            },
        },
        {
            title: "Développement d'une application web de prise de rendez-vous pour le psychologue scolaire.",
            repositoriesURL: {
                backend: "https://github.com/QuentinRCR/Backend-Appointment-Scheduler",
                frontend: "https://github.com/QuentinRCR/ProjetTechDoctolibFrontend",
            },
            dates: {
                start: "Septembre 2022",
                end: "Janvier 2023"
            },
            technologies: {
                backend:"SpringBoot",
                frontend:"Vue",
                css: "Sass"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1H4_u8ao7DGZO2L2rPvkl3VUS00g7HXLJ/preview",
                description: "Presentation de l'application de prise de rendez-vous"
            },
            websiteURL: null
        },
        {
            title: "Interface web pour visualiser les données de la situation écologique de Saint-Etienne",
            repositoriesURL: {
                frontend: "https://github.com/ctc42/donut",
            },
            dates: {
                start: "Septembre 2021",
                end: "Juin 2022"
            },
            technologies: {
                frontend:"JavaScript"
            },
            illustration: {
                videoURL: "https://drive.google.com/file/d/1vrd1uS6NpBM1zBcdDou7RCiJq4mFOPBF/preview",
                description: "Presentation de l'interface sur la situation écologique de Saint-Etienne"
            },
            websiteURL: "https://donut.ctc-42.org/"
        }
    ];
    return (
    <div className="App">
        <header className="header">
            <h1>Portfolio - REY Quentin</h1>
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
            <OtherProjects></OtherProjects>
        </main>
        <footer> {/*used to avoid bug in the mobile version*/}
        </footer>
    </div>
    );
}

export default App;
