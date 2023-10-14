'use client';

import {motion} from "framer-motion";
import { TypingText, TitleText } from "../../components";

import styles from "../../../styles";
import {staggerContainer, fadeIn, planetVariants} from "../../../utils/motion";
import Lottie from "lottie-react";
import animationData1 from "../../../public/animation_lmhog102.json"
import animationData2 from "../../../public/animation_lmhog3y3.json"

const World = () => (
  <section className={`${styles.paddings} relative z-10 mb-52 mt-52`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText 
      title="| Cerca ovunque"
      textStyles="text-center"
      />
      <TitleText 
      title={(<>
        Acquista e vendi intorno a te, creando una rete di connessioni
      </>)}
      textStyles="text-center"
      />

      <motion.div
      variants={fadeIn('up', 'tween', 0.3, 1)}
      className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" 
        className="w-full h-full object-cover"
        />
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px]
        rounded-full bg-[#5d6680] hover:w-[85px] hover:h-[85px] transition:transform
        duration-300">
          <img src="people-01.png" alt="people" 
          className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/5 right-[35%] w-[90px] h-[90px] p-[6px]
        rounded-full hover:w-[100px] hover:h-[100px] transition:transform
        duration-300">
          <Lottie animationData={animationData1} className="w-full h-full"/>
        </div>
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] 
        rounded-full bg-[#5d6680] hover:w-[85px] hover:h-[85px] transition:transform
        duration-300">
          <img src="people-02.png" alt="people" 
          className="w-full h-full"
          />
        </div>
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px]
        rounded-full bg-[#5d6680] hover:w-[85px] hover:h-[85px] transition:transform
        duration-300">
          <img src="people-03.png" alt="people" 
          className="w-full h-full"
          />
        </div>
        <div className="absolute top-[15%] left-[20%] w-[130px] h-[130px] p-[6px]
        rounded-full hover:w-[145px] hover:h-[145px] transition:transform
        duration-300">
          <Lottie animationData={animationData2} className="w-full h-full"/>
        </div>

      </motion.div>

    </motion.div>
    </section>
);

export default World;
