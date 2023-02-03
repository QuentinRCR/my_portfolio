import './Project.scss';
import React from "react";

function Project({title,backendURL,frontendURL,dates,technologies,videoURL}) {
    return (
        <div className="project">
            <h1>{title}</h1>
            <h2>{dates}</h2>
            <h2>{technologies}</h2>
            <a href={backendURL}>Back-end repository</a>
            <a href={frontendURL}>Front-end repository</a>
            <iframe className="videoDemonstration" title="presentation appointment scheduler" src={videoURL} allowFullScreen={true}></iframe>


        </div>

    );
}

export default Project;