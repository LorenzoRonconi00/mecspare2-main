'use client';

import {BsSun, BsMoon} from "react-icons/bs";
import {useTheme} from "next-themes";
import { motion } from 'framer-motion';

const ThemeIcon = ({
}) => {
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        if(theme === "dark") {
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
    }

    return (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
        onClick={toggleTheme}
        className={`cursor-pointer fixed z-20 bottom-20 right-20 ${theme === "light" ? 'bg-[#1A232E] text-white' : 'bg-white text-[#1A232E]'} rounded-full p-4`}>
            {theme === "light" ? <BsSun size={35}/> : <BsMoon size={35}/>}
        </motion.div>
     );
}
 
export default ThemeIcon;