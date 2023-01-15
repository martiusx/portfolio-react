import { useRef } from "react";
import { useInView } from "framer-motion";

const HomeHeaderTitle = function () {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div ref={ref} className="header_title" id="header__title-id">
      <h1
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        Hello
        <span>I'm</span>Maciek
      </h1>
    </div>
  );
};

export default HomeHeaderTitle;
