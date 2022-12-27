import {useState} from "react";

const AboutMe = function() {

    const [readMore, setReadMore] = useState(false);

    return(
        <div className="content_aboutMe">
            <p className="content_aboutMe_visible">
                i'm a novice programmer, seeking the job where i can take a first commercial
                 experience, and develop in the industry.            
            </p>
            <div className="content_aboutMe_hidden">
                <p>Pariatur officia ea ipsum excepteur dolore commodo quis 
                    irure eiusmod minim nisi magna in sint. Elit laborum nostrud officia 
                    magna ad voluptate et. Commodo veniam enim ullamco minim. Ea eu cillum aliqua 
                    consequat ipsum voluptate in irure ut elit consequat nisi adipisicing. Sint voluptate 
                    qui quis quis consectetur laborum mollit adipisicing aute consectetur. Ipsum amet 
                    labore culpa amet et ut aliqua in laborum eiusmod sunt laborum in.
                </p>
                <div 
                    className={readMore? 'content_aboutMe_button content_aboutMe_button--on' : 'content_aboutMe_button content_aboutMe_button--off'}>
                    <span 
                        onClick={() => {
                            setReadMore(!readMore)
                            }}>
                        {readMore? 'less' : 'Read more about me'}
                    </span>
                </div>
            </div>
        </div>
    )
}

export default AboutMe;