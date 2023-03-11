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



    //=====this part handle the appearance and disappearance of elements when it enters the screen ===

    const entireComponent = useRef();
    const [isVisible, setIsVisible] = useState(true);
    const [topComponent, setTopComponent]= useState(0)
    const [bottomComponent,setBottomComponent] = useState(0);
    const [componentHeight, setComponentHeight] = useState(0);

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
        setComponentHeight(entireComponent.current.offsetHeight)
        setTopComponent(entireComponent.current.offsetTop )//+ entireComponent.current.offsetHeight)
        setBottomComponent(entireComponent.current.offsetTop + entireComponent.current.offsetHeight)
        const img = new Image();
        img.src = illustration.image;
        setAspectRatio(img.height/img.width)
        listenToScroll()
    },[componentHeight,listenToScroll,illustration.image])



    //===This part handle the full or cropped display of the illustration image===
    const [isImageClicked, setIsImageClicked] = useState(false);
    const [aspectRatio,setAspectRatio]=useState(0);

    const handleClickImage = () => { //toggle isImageClicked variable
        setIsImageClicked(current => !current);
    };



    //===This part handle the growing of the video demonstration, and the shrinking when click on the cross or outside the video

    const [isVideoClicked, setIsVideoClicked] = useState(false); //video center and grown when true

    //add a class to VideoDemonstrationBox when set to true
    const toggleVideoGrowth =useCallback (() => {
        setIsVideoClicked(current => !current);
    },[]);

    //detect if a click was made outside VideoDemonstrationBox
    // (the click on the iframe are not detected)
    // this function also handle the cancel cross
    const outsideVideoDemonstrationBoxClicked = useCallback ((e) => {
        //the if prevent that this function is triggered when we click on the video to grow it
        if(e.target.className !== "clickDetection") {
            toggleVideoGrowth();
        }
    },[toggleVideoGrowth]);

    //Add event listener when isVideoClicked is true and remove it when its false
    useEffect(() => {
        //if the video is grown and centered, add an event listener of the whole document
        // to detect any click outside the video box
        if(isVideoClicked) {
            document.addEventListener('click', outsideVideoDemonstrationBoxClicked);
        }
        return () => {
            //remove it as some as not needed to avoid conflicts
            document.removeEventListener('click', outsideVideoDemonstrationBoxClicked);
        };
    }, [isVideoClicked,toggleVideoGrowth,outsideVideoDemonstrationBoxClicked]);



    return (
    <div className={isVisible ? "project activated" : "project deactivated"} ref={entireComponent}>

            <h2>{title}</h2>
            <h3>{dates.start} - {dates.end}</h3>



            <div className="illustration">
                {illustration.hasOwnProperty("videoURL") ? //if we have a video URL, we display the video
                    <div className={isVideoClicked ? "videoDemonstrationBox fullVideo" : "videoDemonstrationBox"}>
                        {!isVideoClicked ? <div className="clickDetection" onClick={toggleVideoGrowth}></div> : null}
                        <iframe
                            className={isVideoClicked ? "videoDemonstration fullVideo" : "videoDemonstration"}
                            title={illustration.description}
                            src={illustration.videoURL}
                            allowFullScreen={true}
                            allow="autoplay; encrypted-media"
                            id="illustrationVideo"
                        ></iframe>
                    </div>
                    : null}

                {illustration.hasOwnProperty("image") ? //if we have an image, we display it
                    <React.Fragment>
                        <div
                            className={isImageClicked ? "imageContainer fullImage":"imageContainer croppedImage"}
                            onClick={handleClickImage} //increase the size of the box to display full image
                            style={isImageClicked ? {
                                backgroundImage: `url(${illustration.image})`, //use a background because it doesn't increase the height
                                height: document.getElementsByClassName("imageContainer").item(0).clientWidth*aspectRatio*1.01 //width of the container time the aspect ratio * 1% because of calculation errors
                            }:
                            {
                                backgroundImage: `url(${illustration.image})`
                            }
                        }>
                        </div>
                    </React.Fragment>
                    : null
                }
            </div>



        {websiteURL ? /*display the element if technologies in not null*/
            <div className="accessWebsite">
                <a className="prettyButton" href={websiteURL} target="_blank" rel="noreferrer">Access the website</a>
            </div>
            : null }


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

        </div>
    );
}

export default Project;