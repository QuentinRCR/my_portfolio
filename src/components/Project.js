import './Project.scss';
import React, {useEffect, useState, useRef, useCallback} from "react";
import JsIcon from "../images/JS-icon.png"
import ReactIcon from "../images/React-icon.png"
import SpringBootIcon from "../images/SpringBoot-icon.png"
import VueIcon from "../images/Vue-icon.png"
import GithubIcon from "../images/GithubIcon.png"
import SassIcon from "../images/SassIcon.png"


function Project({title,repositories,dates,technologies,illustration,websiteURL}) {
    const iconLibrary = {
        React: ReactIcon,
        Vue: VueIcon,
        SpringBoot: SpringBootIcon,
        JavaScript: JsIcon,
        Sass: SassIcon
    }
    const divRef = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [topComponent, setTopComponent]= useState(0)
    const [bottomComponent,setBottomComponent] = useState(0);
    const [componentHeight, setComponentHeight] = useState(0);
    const [imageHeight,setImageHeight]=useState(0);
    const [imageWidth,setImageWidth]=useState(0);


    useEffect(() => { //add on mount and remove on dismount event listener on scroll
        window.addEventListener("scroll", listenToScroll);
        return () =>
            window.removeEventListener("scroll", listenToScroll);
    })

    //manage the activation and deactivation of the elements based on the scroll
    const listenToScroll = useCallback (() => {
        const screenHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const bottomScroll = (document.body.scrollTop|| //use too different ways to support several browsers
            document.documentElement.scrollTop) +screenHeight - componentHeight*0.2 ;
        const topScroll = (document.body.scrollTop||
            document.documentElement.scrollTop) +componentHeight*0.2;
        if ((bottomScroll > topComponent) && (topScroll< bottomComponent)) { //if the top of the element just entered the screen
            setIsVisible(true);                                         //and its bottom is bellow the top of the screen
        } else {                                                             //it is displayed
            isVisible && setIsVisible(false); //if it was visible, then make it not visible
        }
    }, [componentHeight, topComponent, bottomComponent, isVisible]);

    useEffect( () => { //set the valued of the size of the components at first render
        setComponentHeight(divRef.current.offsetHeight)
        setTopComponent(divRef.current.offsetTop )//+ divRef.current.offsetHeight)
        setBottomComponent(divRef.current.offsetTop + divRef.current.offsetHeight)
        const img = new Image();
        img.src = illustration.image;
        setImageHeight(img.height)
        setImageWidth(img.width)
        listenToScroll()
    },[componentHeight,listenToScroll,illustration.image])

    const [isIllustrationClicked, setIsIllustrationClicked] = useState(false);

    const handleClick = () => { //toggle isIllustrationClicked variable
        setIsIllustrationClicked(current => !current);
    };
    return (

    <div className={isVisible ? "project activated" : "project deactivated"} ref={divRef}>

            <h2>{title}</h2>
            <h3>{dates.start} - {dates.end}</h3>



            <div className="illustration">
                {illustration.hasOwnProperty("videoURL") ? //if we have a video URL, we display the video
                    <iframe
                        className="videoDemonstration"
                        title={illustration.description}
                        src={illustration.videoURL}
                        allowFullScreen={true}
                    ></iframe>
                    : null}

                {illustration.hasOwnProperty("image") ? //if we have an image, we display it
                    <React.Fragment>
                        <div
                            className={isIllustrationClicked ? "imageContainer fullImage":"imageContainer croppedImage"}
                            onClick={handleClick}
                            style={isIllustrationClicked ? {
                                backgroundImage: `url(${illustration.image})`,
                                minHeight: document.getElementsByClassName("imageContainer").item(0).clientWidth*imageHeight/imageWidth
                            }:
                            {
                                backgroundImage: `url(${illustration.image})`
                            }
                        }>

                            {/*<img src={illustration.image} alt={illustration.description}/>*/}
                        </div>
                    </React.Fragment>
                    : null
                }
            </div>




            {technologies ? /*display the element if technologies in not null*/
                <div className="technologiesBox">
                    <p >Technologies used</p>
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
                        {Object.keys(repositories)?.map((key,index) => /*For each item, display the link to the repository*/
                            <div key={index} className="oneRepositoryBox">
                                <a href={repositories[key]} target="_blank" rel="noreferrer">
                                    <img src={GithubIcon} alt="Github Icon"/>
                                    <p className="repoType">{key.charAt(0).toUpperCase() + key.slice(1)}</p>
                                </a>
                            </div>
                        )}
                    </div>
                </div>
                : null }



            {websiteURL ? /*display the element if technologies in not null*/
                <div className="accessWebsite">
                    <a className="prettyButton" href={websiteURL} target="_blank" rel="noreferrer">Access the website</a>
                </div>
                    : null }

        </div>
    );
}

export default Project;