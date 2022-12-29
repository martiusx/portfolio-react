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
            <motion.div  className="content_myCollection_slider">
                <motion.div drag="x" dragConstraints={{ right:0, left: - width }} className="content_myCollection_slider--wrapper">
                    {images.map((image) => {
                        return(
                            <motion.div className="content_myCollection_slider--slide"><img src={image} alt=""/></motion.div>
                        )
                    })}
                </motion.div>
            </motion.div>
        </div>
    )
}

export default MyCollection;