import { motion } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import NavButton from "./NavButton";
import NavListElement from "./NavListElement";

const NavMenu = function (props) {
  const [show, setShow] = useState(false);
  const variants = {
    open: { x: "-100%" },
    closed: { x: 0 },
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside, true);
  }, []);

  const refOne = useRef(null);

  const handleClickOutside = (e) => {
    if (!refOne.current.contains(e.target)) {
      setShow(false);
    }
  };

  return (
    <nav>
      <NavListElement text={<span>Junior</span>} />
      <NavListElement text={<span>Front-End Developer</span>} />
      <NavListElement text={<NavButton handleClick={() => setShow(!show)} />} />
      <motion.div
        className="nav__menu"
        animate={show ? "open" : "closed"}
        variants={variants}
        transition={{ duration: 0.5 }}
        ref={refOne}
      >
        <div className="nav__menu__side-links">
          <span>
            <a href="#header__title-id">Home</a>
          </span>
          <span>
            <a href="#content__myCollection-id">Works</a>
          </span>
          <span>
            <a href="#footer__contact-id">Contact</a>
          </span>
        </div>
        <div className="nav__menu__media-links">
          <span>
            <a
              href="https://www.linkedin.com/in/maciej-cis-519696251/"
              target="_blank"
              rel="noreferrer"
            >
              linkdlin
            </a>
          </span>
          <span>
            <a
              href="https://github.com/martiusx?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              github
            </a>
          </span>
        </div>
      </motion.div>
    </nav>
  );
};

export default NavMenu;
