import './Project.scss';
import React from "react";
import JsIcon from "../images/JS-icon.png"
import ReactIcon from "../images/React-icon.png"
import SpringBootIcon from "../images/SpringBoot-icon.png"
import VueIcon from "../images/Vue-icon.png"
import GithubIcon from "../images/GithubIcon.png"


function Project({title,repositories,dates,technologies,illustration}) {
    const iconLibrary = {
        React: ReactIcon,
        Vue: VueIcon,
        SpringBoot: SpringBootIcon,
        JavaScript: JsIcon
    }
    return (
    <div className="project">
            <h2>{title}</h2>
            <h3>{dates.start} - {dates.end}</h3>



            {technologies ? /*display the element if technologies in not null*/
                <div className="technologiesBox">
                    <p >Used technologies</p>
                    <div className="technologieDisplay">
                        {Object.keys(technologies)?.map((key,index) => /*For each item, display the name
                         of the key with uppercase on the first character and the name of the techno as well as the corresponding icon*/
                            <div key={index} className="oneTechBox">
                                <p className="techType" key={index}>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                <div className="techName">
                                    {//display the icon if it is available
                                    iconLibrary.hasOwnProperty(technologies[key]) ? <img className="technoIcon" src={iconLibrary[technologies[key]]} alt={iconLibrary[technologies[key]]}/> : null}
                                    <p key={index}>{technologies[key]}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            : null }



            {Object.keys(repositories).length>0 ? /*display the element if technologies in not null*/
                <div className="repositoriesBox">
                    <p className="repoTitle">Repositories</p>
                    <div className="repositoriesDisplay">
                        {Object.keys(repositories)?.map((key) => /*For each item, display the link to the repository*/
                            <div className="oneRepositoryBox">
                                <a href={repositories[key]} target="_blank" rel="noreferrer">
                                    <img src={GithubIcon} alt="Github Icon"/>
                                </a>
                                <p className="repoType">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                            </div>
                        )}
                    </div>
                </div>
                : null }



            <div className="illustration">
            {illustration.hasOwnProperty("videoURL") ? //if we have a video URL, we display the video
                <iframe className="videoDemonstration" title={illustration.description} src={illustration.videoURL} allowFullScreen={true}></iframe>
                : null}

            {illustration.hasOwnProperty("image") ? //if we have an image, we display it
                <React.Fragment>
                    <div className="imageContainer">
                        <img src={illustration.image} alt={illustration.description}/>
                    </div>
                </React.Fragment>
                : null
            }

            </div>


        </div>

    );
}

export default Project;