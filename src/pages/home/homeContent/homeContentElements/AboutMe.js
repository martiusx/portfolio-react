import { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from "framer-motion";

const AboutMe = function() {
    const [readMore, setReadMore] = useState(false);
    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();


    useEffect(() => {
        
        if(inView){
            animation.start({
                y: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            });
        }
        if(!inView){
            animation.start({y: '10vh'})
        }
    }, [inView, animation]);

    return(
        <motion.div ref={ref} className="content_aboutMe" 
        animate={animation}
        >
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
        </motion.div>
    )
}

export default AboutMe;