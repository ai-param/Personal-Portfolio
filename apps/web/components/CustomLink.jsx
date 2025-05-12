"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const CustomLink = ({name,link}) =>{
    const pathname = usePathname();
    return (
        <Link href={link}>
            <span className="m-4 relative text-white hover:text-indigo-400 transition duration-300 after:content-[''] after:absolute after:w-0 after:h-[2px] after:left-0 after:-bottom-1 after:bg-indigo-500 hover:after:w-full after:transition-all after:duration-300">
                {name}
            </span>
        </Link>
    )
}
export default CustomLink;