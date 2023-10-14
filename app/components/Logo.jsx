'use client';

import Link from "next/link";

const Logo = ({
    scrolling
}) => {
    return(
        <Link 
        href={'/'}
        className="lg:block cursor-pointer">
            <h2 className={`font-bold lg:text-[30px] text-[24px] ${scrolling ? 'text-white' : 'text-orange-400'}`}>
                Mec Spare
            </h2>
        </Link>
    );
}

export default Logo;