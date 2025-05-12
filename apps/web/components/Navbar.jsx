"use client"
import navitems from "../data/nav-items";
import CustomLink from "../components/CustomLink";
import {motion} from "framer-motion";
import {GithubIcon,XIcon,LinkedInIcon} from "../components/Icons"
import { ModeToggle } from "./ThemeChanger";
const Navbar = () =>{
    return (
        <div className="w-full px-32 py-8 font-medium flex items-center justify-between">
            <div>
                {navitems.map((item,key)=>{
                    return <CustomLink key={key} name={item.name} link={item.link}/>
                })}
            </div>
            <nav className="flex justify-end items-center flex-wrap gap-8">
                <motion.a
                    href="https://www.github.com/param-code"
                    target="_blank"
                    whileHover={{y:-6}}
                    whileTap={{scale:1}}
                >
                    <GithubIcon classname="w-6"/>
                </motion.a>
                <motion.a
                    href="https://www.x.com"
                    target="_blank"
                    whileHover={{y:-6}}
                >
                    <XIcon classname="w-6"/>
                </motion.a>
                <motion.a
                    href="https://www.linkedin.com"
                    target="_blank"
                    whileHover={{y:-6}}
                >
                    <LinkedInIcon classname="w-6"/>
                </motion.a>
                <ModeToggle/>
            </nav>
        </div>
    )
}
export default Navbar;