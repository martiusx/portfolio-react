import {  } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { useInView } from 'react-intersection-observer';
import { useAnimation, motion } from "framer-motion";
import images from './MyCollectionsImages';

const MyCollection = function() {
    
    const [width, setWidth] = useState(0);
    const slider = useRef();

    const {ref, inView} = useInView({
        threshold: 0.2
    });
    const animation = useAnimation();

    //slider in view animation
    useEffect(() => {
        if(inView){
            animation.start({
                x: 0,
                transition: {
                    type: 'spring', duration: 2, bounce: 0.3
                }
            });
        }
        if(!inView){
            animation.start({x: '50vh'})
        }
    }, [inView, animation]);
    //slider sroll
    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, [])

    return(
        <motion.div ref={slider} className="content__myCollection">
             <motion.div ref={ref} animate={animation}>
             <span>My works</span>
            <motion.div  className="content__myCollection__slider">
                <motion.div drag="x" dragConstraints={{ right:0, left: - width }} className="content__myCollection__slider--wrapper">
                    <motion.div className="content__myCollection__slider__slide content__myCollection__slider--text">
                    <h3>
                        Eiusmod esse mollit enim velit quis sunt culpa officia ex duis 
                        officia sunt irure. Veniam non excepteur sint sunt id dolor pariatur 
                        deserunt Lorem fugiat pariatur consectetur nostrud. Sunt nostrud culpa 
                        elit laborum in pariatur aute pariatur amet labore commodo officia.
                    </h3>
                    </motion.div>
                    {images.map((image, index) => {
                        return(
                            <motion.div key={index} className="content__myCollection__slider__slide">
                                <div className="content__myCollection__slider__slide--info">
                                    <a href={image.link} target='_blank'  rel="noreferrer">" {image.name} "</a>
                                    <p>What I used:</p>
                                </div>
                                <img src={image.number} alt={image.alt}/>
                            </motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default MyCollection;