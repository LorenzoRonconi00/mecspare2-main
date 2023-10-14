'use client';

import Link from "next/link";
import {LiaUploadSolid} from "react-icons/lia";

const UploadIcon = () => {
    return (
        <Link 
        href={'/'}
        className=" hidden md:block relative text-white">
            <LiaUploadSolid size={30}/>
        </Link>
     );
}
 
export default UploadIcon;