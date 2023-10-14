'use client';

import Link from "next/link";
import {AiOutlineSearch} from "react-icons/ai";

const SearchIcon = ({
}) => {
    return (
        <Link
        href={'/search'}
        className="hidden md:block text-white">
            <AiOutlineSearch size={30}/>
        </Link>
     );
}
 
export default SearchIcon;