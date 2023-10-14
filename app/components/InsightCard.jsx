'use client';

import {motion} from "framer-motion";

import { fadeIn } from "../../utils/motion";
import Lottie from "lottie-react";
import Link from "next/link";

const InsightCard = ({imgUrl, title, subtitle, url, index}) => (
  <motion.div
  variants={fadeIn('up', 'spring', index * 0.5, 1)}
  className="flex md:flex-row flex-col gap-4"
  >
    <Link href={url} className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover">
      <Lottie animationData={imgUrl} className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"/>
    </Link>
    
    <div className="w-full flex justify-between items-center">
      <div className="flex-1 md:ml-[62px] flex flex-col max-w-[650px]">
        <h4 className="font-normal lg:text-[42px] text-[26px] ">{title}</h4>
        <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] ">
          {subtitle}
        </p>
      </div>
      
      <div className="lg:flex hidden items-center justify-center w-[75px] h-[75px]
      rounded-full bg-transparent border-[1px]  cursor-pointer hover:w-[90px]
      hover:h-[90px] transition:transform duration-200">
        <Link href={url} className="w-[40%] h-[40%] object-contain">
          <img
            src="arrow.svg"
            alt="arrow"
            className="object-contain"
          />
        </Link>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
