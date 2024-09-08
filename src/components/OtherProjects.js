import './OtherProjects.scss';
import React, { } from "react";


function OtherProjects() {

    let other_project = [
        {
            "name": "Protection et maintien en bonne condition d'un tableau lors de son transport",
            "description": "En groupe, protection d'un tableau et maintien dans de bonnes conditions d'un tableau. Régulation de température et d'humidité, mise en place d'une alarme en cas de choc ou de flash. Utilisation de LoRa et de WiFi pour transmettre les signaux."
        },
        {
            "name": "Rapatriement et consolidation de documents à l'aide d'AWS",
            "description": "Utilisation d'EC2, de Lambda et de S3 pour uploader automatiquement des documents sur AWS, et créer un bilan de tous les documents créés pendant la journée."
        },
        {
            "name": "Création d'un petit objet connecté répondant aux stimuli",
            "description": "Création d'un petit \"robot\" réagissant à la lumière, au son, à l'humidité à l'aide d'un microcontrôleur ESP32 WROOM. Utilisation de l'écran pour pouvoir jouer à un jeu de morpion."
        },
        {
            "name": "Simulation multi-agent d'une vente de séjours vacances",
            "description": "Simulation des interactions entre les tour-opérateurs, les guides et les clients qui cherchent à organiser des vacances. Chaque agent est autonome."
        }, 
        {
            "name": "Test de différents protocoles de transmission et correction d'erreurs",
            "description": "Test de différents protocoles à l'aide d'une diode et d'une photoresistance."
        },
        {
            "name": "Simulation d'un compteur de vélo à l'aide d'un système on a chip",
            "description": null
        },
        {
            "name": "Application référençant les restaurants en se basant sur des pages internet",
            "description": "Application qui scrappe le web, récupère les restaurants et leurs plats et nous indique le restaurant le plus proche en fonction de critères."
        },
        {
            "name": "Simulation de marées en Excel",
            "description": "Création d'une simulation interactive en Excel pour calculer les coefficients de marée et prédire la marée à un instant donné, grâce à une interface."
        },
        {
            "name": "Calcul d'équations physiques sur un cluster de GPU",
            "description": "Gestion de la décomposition du calcul pour utiliser au mieux le cluster de GPU."
        }
        ]
    

    return (
    <div className="other_projects">
        <h1>Projets divers</h1>
        <ul>
            {other_project.map((project) => //display all the project cards
                <li><strong>{project.name}</strong>{project.description ? ': ' : ""}{project.description}</li>
            )}   
        </ul>
    </div>
    );
}

export default OtherProjects;