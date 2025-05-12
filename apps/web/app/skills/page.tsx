import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button"
import * as Icons from "react-icons/si";
import { IconType } from "react-icons";
import { HoverEffect } from "@/components/ui/card.hover-effect";
import { describe } from "node:test";

export default () => {
    const Languages = [
        "C","C++","Java","Python","Rust","Javascript","Typescript","HTML","CSS"
    ];
    const Frameworks = [
        "React","NextJs","express","Turborepo","Numpy","NodeJs"
    ];

    const Database = [
        "SQL","PostgreSQL","Mongodb"
    ];

    const Tools = [
        "Docker","Git","Github","Linux","Postman","Cloudflare"
    ];

    const Coding = [
        {
            title:"Codeforces",
            description:"Contest League",
            link:"https://www.codeforces.com"
        },
        {
            title:"Leetcode",
            description:"This is Real Deal",
            link:"https://www.leetcode.com"
        },
        {
            title:"Codechef",
            description:"Every Wednesday",
            link:"https://www.codechef.com"
        },
        {
            title:"Atcoder",
            description:"Every Saturday and Sunday",
            link:"https://atcoder.jp"
        },
        {
            title:"GeeksforGeeks",
            description:"Problems hi Problems",
            link:"https://www.geeksforgeek.com"
        },
        {
            title:"Interviewbit",
            description:"OA Problems",
            link:"https://www.interviewbit.com"
        }
    ]
    
    return (
        <div className="flex flex-col">
            <div>
                <div className="text-center font-bold text-2xl m-4">
                    Coding Profiles
                </div>
                <div className="grid grid-flow-col m-4 grid-rows-3 gap-4">
                    <HoverEffect className="row-span-3" items={Coding}>
                    {/* <div className="row-span-3">
                        hii there
                    </div> */}
                    </HoverEffect>
                </div>
            </div>
            <div>
                <div className="text-center font-bold text-2xl m-4">
                Programming Languages
                </div>
            <BackgroundGradient>
            <div className="grid m-4 grid-cols-6 gap-4">
                {
                    Languages.map((data,key)=>{
                        const IconName = `Si${data}`.replace(/\s/g, "");
                        const IconComponent = (Icons as Record<string,IconType>)[IconName];
                        return (<Button key={key} variant={"outline"} className="font-bold">
                            {IconComponent && <IconComponent/>}
                            {data}
                        </Button>);
                    })
                }
            </div>
            </BackgroundGradient>
            </div>
            <div>
                <div className="text-center font-bold text-2xl m-4">
                FrameWorks/Libraries
                </div>
            <BackgroundGradient>
            <div className="grid m-4 grid-cols-4 gap-4">
                {
                    Frameworks.map((data,key)=>{
                        const IconName = `Si${data}`.replace(/\s/g, "");
                        const IconComponent = (Icons as Record<string,IconType>)[IconName];
                        return (<Button key={key} variant={"outline"} className="font-bold">
                            {IconComponent && <IconComponent/>}
                            {data}
                        </Button>);
                    })
                }
            </div>
            </BackgroundGradient>
            </div>
            <div>
                <div className="text-center font-bold text-2xl m-4">
                Databases
                </div>
            <BackgroundGradient>
            <div className="grid m-4 grid-cols-3 gap-4">
                {
                    Database.map((data,key)=>{
                        const IconName = `Si${data}`.replace(/\s/g, "");
                        const IconComponent = (Icons as Record<string,IconType>)[IconName];
                        return (<Button key={key} variant={"outline"} className="font-bold">
                            {IconComponent && <IconComponent/>}
                            {data}
                        </Button>);
                    })
                }
            </div>
            </BackgroundGradient>
            </div>
            <div>
                <div className="text-center font-bold text-2xl m-4">
                DeoOps / Other Tools
                </div>
            <BackgroundGradient>
            <div className="grid m-4 grid-cols-6 gap-4">
                {
                    Tools.map((data,key)=>{
                        const IconName = `Si${data}`.replace(/\s/g, "");
                        const IconComponent = (Icons as Record<string,IconType>)[IconName];
                        return (<Button key={key} variant={"outline"} className="font-bold">
                            {IconComponent && <IconComponent/>}
                            {data}
                        </Button>);
                    })
                }
            </div>
            </BackgroundGradient>
            </div>
        </div>
    )
}