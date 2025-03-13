import { motion } from "framer-motion";
import abb from "../../assets/LOGOPARCEIROS/1.png";
import siemens from "../../assets/LOGOPARCEIROS/2.png";
import weg from "../../assets/LOGOPARCEIROS/3.png";
import schneider from "../../assets/LOGOPARCEIROS/4.png";
import danfoss from "../../assets/LOGOPARCEIROS/5.png";
import carrier from "../../assets/LOGOPARCEIROS/6.png";
import stemac from "../../assets/LOGOPARCEIROS/7.png";
import ksb from "../../assets/LOGOPARCEIROS/8.png";
import atlas from "../../assets/LOGOPARCEIROS/9.png";
import hitachi from "../../assets/LOGOPARCEIROS/10.png";
import "./Carousel.css";

const logos = [abb, siemens, weg, schneider, danfoss, carrier, stemac, ksb, atlas, hitachi];

const Carousel = () => {
  return (
    <div className="carousel-container">
      <motion.div
        className="carousel-track"
        animate={{ x: ["0%", "-50%"] }} // Movemos apenas 50% do caminho
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {[...logos, ...logos].map((logo, index) => (
          <div className="carousel-item" key={index}>
            <img src={logo} alt="Logo" />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default Carousel;
