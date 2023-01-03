import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from './MyCollectionsImages';

const MyCollection = function() {
    
    const [width, setWidth] = useState(0);
    const slider = useRef();

    useEffect(() => {
        setWidth(slider.current.scrollWidth - slider.current.offsetWidth);
    }, [])

    return(
        <div ref={slider} className="content_myCollection">
             <span>My works</span>
            <motion.div  className="content_myCollection_slider">
                <motion.div drag="x" dragConstraints={{ right:0, left: - width }} className="content_myCollection_slider--wrapper">
                    <motion.div className="content_myCollection_slider--slide content_myCollection_slider--text">
                    <h3>
                        Eiusmod esse mollit enim velit quis sunt culpa officia ex duis 
                        officia sunt irure. Veniam non excepteur sint sunt id dolor pariatur 
                        deserunt Lorem fugiat pariatur consectetur nostrud. Sunt nostrud culpa 
                        elit laborum in pariatur aute pariatur amet labore commodo officia.
                    </h3>
                    </motion.div>
                    {images.map((image, index) => {
                        return(
                            <motion.div key={index} className="content_myCollection_slider--slide"><img src={image} alt=""/></motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MyCollection;