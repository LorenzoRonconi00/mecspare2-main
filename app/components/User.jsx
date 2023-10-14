'use client';

import { useCallback, useState } from "react";
import {AiOutlineMenu} from "react-icons/ai";
import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";
import Avatar from "./Avatar";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import useRegisterModal from "../../app/hooks/useRegisterModal";
import useLoginModal from "../../app/hooks/useLoginModal";
import {signOut} from "next-auth/react";
import SearchIcon from "./SearchIcon";
import BellIcon from "./BellIcon";
import CartIcon from "./CartIcon";
import UploadIcon from "./UploadIcon";
import {useTheme} from "next-themes";
import {FiSettings} from "react-icons/fi";
import {TfiAnnouncement} from "react-icons/tfi";
import {RxExit} from "react-icons/rx";
import ThemeIcon from "./ThemeIcon";

const User = ({
    currentUser
}) => {
    const loginModal = useLoginModal();
    const [isOpen, setIsOpen] = useState(false);
    const {theme, setTheme} = useTheme();

    const toggleTheme = () => {
        if(theme === "dark") {
            setTheme("light");
        }
        else{
            setTheme("dark");
        }
    }

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    }, []);

    return(
        <div className="relative">
            <div className="flex md:flex-row items-center md:gap-5 gap-3">
                <div
                className="mr-7">
                    <SearchIcon/>
                </div>
                {currentUser !== null && (
                    <div className="ml-2">
                        <CartIcon/>
                    </div>
                )}
                {currentUser !== null && (
                    <div className="ml-9">
                        <BellIcon />
                    </div>
                )}
                {currentUser !== null && (
                    <div className="ml-9">
                        <UploadIcon />
                    </div>
                )}
                <div
                onClick={currentUser === null ? loginModal.onOpen : toggleOpen}
                className="p-4 md:py-4 md:px-10 flex flex-row
                items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
                >
                    <div>
                        {currentUser === null ? (
                            <label className="font-bold text-center text-lg cursor-pointer text-white">
                                Login
                            </label>
                        ) : (
                            <Avatar src={currentUser?.image}/>
                        )}
                    </div>
                </div>
            </div>

            {isOpen && (
                <motion.div 
                variants={fadeIn('left', 'tween', 0.1,0.1)}
                initial="hidden"
                whileInView="show"
                viewport={{once: false, amount: 0.25}}
                className={`absolute rounded-xl shadow-2xl w-full bg-white md:w-full overflow-hidden
                right-0 mt-5 text-sm`}>
                    <div className="flex flex-col cursor-pointer">
                        <>
                            <MenuItem 
                            onClick={() => {}}
                            icon={TfiAnnouncement}
                            label="I miei annunci"
                            />
                            <MenuItem 
                            onClick={() => {}}
                            icon={FiSettings}
                            label="Impostazioni"
                            />
                            <MenuItem 
                            onClick={() => signOut()}
                            icon={RxExit}
                            label="Logout"
                            />
                        </>
                    </div>
                </motion.div>
            )}
        </div>
    );
}

export default User;