"use client"
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Hero(){
    const words = [
        {
            text:"I"
        },
        {
            text:"am"
        },
        {
            text:"Paramveer"
        },
        {
            text:"Singh"
        },
        {
            text:"an"
        },
        {
            text:"Aspiring"
        },
        {
            text:"Software"
        },
        {
            text:"Engineer"
        }
    ];
    const router = useRouter();
    return (
        <div className="flex flex-col justify-center items-center">
            <h1 className="m-40 text-7xl">
                I am Paramveer Singh
            </h1>
            <div className="flex space-x-5">
            <a>
                <Button className="bg-black text-amber-100 rounded-2xl">
                    Resume
                    <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><title>70 Basic icons by Xicons.co</title><path d="M42,48H6a2,2,0,0,1-2-2V35.61a2.07,2.07,0,0,1,1.66-2.08A2,2,0,0,1,8,35.5V44H40V35.61a2.07,2.07,0,0,1,1.66-2.08,2,2,0,0,1,2.34,2V46A2,2,0,0,1,42,48Z" fill="#4dbe86"></path><path d="M24,37a2,2,0,0,1-2-2V2a2,2,0,0,1,4,0V35A2,2,0,0,1,24,37Z" fill="#4dbe86"></path><path d="M24,38a2.07,2.07,0,0,1-1.44-.59l-14-14a2,2,0,0,1,2.83-2.83L24,33.19l12.61-12.6a2,2,0,0,1,2.83,2.83l-14,14A2,2,0,0,1,24,38Z" fill="#4dbe86"></path></g></svg>
                </Button>
            </a>
            <Button className="rounded-2xl" onClick={()=>router.push("/projects")}>
                Projects
            </Button>
            </div>
        </div>
    )
}