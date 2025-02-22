'use client';

import {motion} from "framer-motion";
import { NewFeatures,TypingText, StartSteps, TitleText } from "../../components";

import styles from "../../../styles";
import {staggerContainer, fadeIn, planetVariants2} from "../../../utils/motion";
import {newFeatures} from "../../constants";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount: 0.25}}
    className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
      variants={fadeIn('right', 'tween', 0.2, 1)}
      className="flex-[0.75] flex justify-center flex-col"
      >
        <TypingText title="| Perché scegliere noi" />
        <TitleText title={<>La realtá per la rivendita automatizzata</>}/>
        <div className="mt-[48px] flex flex-wrap justify-between gap-[24px]">
          {newFeatures.map((feature, index) => (
            <NewFeatures 
            key={feature.title}
            {...feature}
            />
          ))}
        </div>
      </motion.div>
      <motion.div
      variants={planetVariants2('right')}
      className={`flex-1 ${styles.flexCenter}`}
      >
        <img src="/whats-new.png" alt="get-started" 
        className="w-[70%] h-[70%] object-contain"
        />
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
