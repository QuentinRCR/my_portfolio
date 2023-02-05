import './Project.scss';
import React from "react";

function Project({title,repositories,dates,technologies,videoURL}) {
    return (
    <div className="project">
            <h2>{title}</h2>
            <h3>{dates.start} - {dates.end}</h3>
            {technologies ? /*display the element if technologies in not null*/
                <h4>Technologies used:
                    <ul>
                    {Object.keys(technologies)?.map((key,index) => /*For each item, display the name
                     of the key with uppercase on the first character and the name of the techno*/
                        <li key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}: {technologies[key]}</li>)}
                    </ul>
                </h4>
            : null }
            {Object.keys(repositories).length>0 ? /*display the element if technologies in not null*/
                <h4 className="repositories">Repositories:
                    <ul>
                        {Object.keys(repositories)?.map((key) => /*For each item, display the name
                     of the key with uppercase on the first character and repositories and add the correct link*/
                            <li key={repositories[key]}><a href={repositories[key]}>{key.charAt(0).toUpperCase() + key.slice(1)} repository</a></li>)}
                    </ul>
                </h4>
                : null }
            {videoURL ?
                <iframe className="videoDemonstration" title="presentation appointment scheduler" src={videoURL} allowFullScreen={true}></iframe>
                : null}


        </div>

    );
}

export default Project;