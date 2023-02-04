import './Project.scss';
import React from "react";

function Project({title,backendURL,frontendURL,dates,technologies,videoURL}) {
    return (
        <div className="project">
            <h1>{title}</h1>
            <h2>{dates}</h2>
            {technologies ? <h2>{technologies}</h2> : null /*display the element if technologies in not null*/}
            {backendURL ? <a href={backendURL}>Back-end repository</a> : null }
            {frontendURL ? <a href={frontendURL}>Front-end repository</a> : null }
            {videoURL ? <iframe className="videoDemonstration" title="presentation appointment scheduler" src={videoURL} allowFullScreen={true}></iframe> : null}


        </div>

    );
}

export default Project;