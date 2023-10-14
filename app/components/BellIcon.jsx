'use client';

import Link from "next/link";
import {AiOutlineBell} from "react-icons/ai";

const BellIcon = ({
}) => {
    return (
        <Link 
        href={'/'}
        className="hidden md:block relative">
            <div className="text-white">
                <AiOutlineBell size={30}/>
            </div>
            <div className="absolute bg-white text-black -top-2 -right-1 rounded-full w-5 h-5 flex items-center justify-center">
                0
            </div>
        </Link>
     );
}
 
export default BellIcon;