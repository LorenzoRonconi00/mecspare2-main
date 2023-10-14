'use client';

import Image from "next/image";

const Avatar = ({
    src
}) => {
    return(
        <Image 
        className="rounded-full"
        height="50"
        width="50"
        alt="Avatar"
        src={src || "/placeholder.jpg"}
        />
        
    );
}

export default Avatar;