'use client';

import {motion} from "framer-motion";

import styles from "../../../styles";
import {slideIn, staggerContainer, textVariant} from "../../../utils/motion";
import Lottie from "lottie-react";
import animationData from "../../../public/animation_lmlurz3q.json";

const Hero = () => (
  <section className={`sm:pl-16 pl-6 h-[100vh] flex justify-center`}>
    <div className="absolute top-0 left-0 w-full h-[100vh] bg-black/50 -z-10 "/>
    <div className="absolute top-0 left-0 w-full h-[100vh] -z-20">
      <video className="absolute top-0 left-0 w-full h-full object-cover"
      autoPlay loop muted>
        <source src="video/videohero.webm" type="video/webm"/>
      </video>
    </div>

    <motion.div
    variants={staggerContainer}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.2 }}
    className={`${styles.innerWidth} mx-auto flex flex-col justify-center mb-52`}
    >
      {/* title */}
      <div className="flex justify-center items-center flex-col z-1">
        <motion.h1 
        variants={textVariant(1.1)}
        className={`${styles.heroHeading} text-center`}
        >
          Trova il tuo
        </motion.h1>
        <motion.div
        variants={textVariant(1.2)}
        className="flex flex-row justify-center items-center"
        >
          <h1 className={`${styles.heroHeading} !text-orange-500 text-center`}>
            ricambio
          </h1>
        </motion.div>
      </div>
    </motion.div>
  </section>
);

export default Hero;
