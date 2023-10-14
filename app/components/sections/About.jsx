'use client';

import {motion} from "framer-motion";
import { TypingText } from "../../components";

import styles from "../../../styles";
import {fadeIn, staggerContainer} from "../../../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative z-10 mb-52 mt-52`}>
    <div className="gradient-02 z-0" />
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{once: false, amount: 0.25}}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
      >
        <TypingText title="| Chi siamo" textStyles="text-center"/>

        <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center 
        "
        >
          Ti é mai capitato di fare centinaia di <span className="font-extrabold">ricerche</span> interminabili per trovare il 
          <span className="font-extrabold "> ricambio </span> 
          di cui necessitavi? Con 
          <span className="font-extrabold "> Mec Spare </span> 
          , la nuova piattaforma di ricerca innovativa per
          tutti i meccanici e sfasciacarrozze, puoi 
          <span className="font-extrabold "> registrarti </span> 
          ed in pochi click automatizzare
          la ricerca del tuo 
          <span className="font-extrabold "> pezzo </span>  
          in base a 
          <span className="font-extrabold "> prezzo ideale </span> 
          ,
          <span className="font-extrabold "> posizione </span>  
          e azienda. 
          <span className="font-extrabold "> L'assistenza </span> 
          sará pronta ad aiutarti in qualsiasi momento.
        </motion.p>

        <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
        />
      </motion.div>
  </section>
);

export default About;
