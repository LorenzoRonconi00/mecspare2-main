'use client';

import { motion } from "framer-motion";
import { fadeIn, zoomIn } from "../../utils/motion";

const MenuItem = ({
    onClick,
    label,
    icon: IconComponent
}) => {
    return(
        <motion.div
        variants={zoomIn(0.1, 0.1)}
        initial="hidden"
        whileInView="show"
        onClick={onClick}
        className="flex items-center px-4 py-3 mt-2 text-black hover:bg-neutral-100 transition font-semibold text-[16px]"
        >
            {IconComponent && <IconComponent className="mr-3" size={22}/>}
            {label}
        </motion.div>
    )
}

export default MenuItem;