import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button"
import * as Icons from "react-icons/si";

export default () => {
    const skill = [
        "C","Cplusplus","Java","Python","Rust","Javascript","Typescript","React","NextJs","Docker","Git","Github","Linux",
        "HTML","CSS","SQL","PostgreSQL","Mongodb","express","Turborepo","Postman","Numpy","Cloudflare","NodeJs"
    ];
    
    return (
        <div className="flex flex-col">
            <div>
                <div className="text-center font-bold text-2xl m-2">
                    Coding Profiles
                </div>
                <div>
                    wow
                </div>
            </div>
            <div>
                <div className="text-center font-bold text-2xl m-2">
                Technical Skills
                </div>
            <BackgroundGradient>
            <div className="grid m-4 grid-cols-6 gap-4">
                {
                    skill.map((data,key)=>{
                        const IconComponent = Icons[`Si${data}`.replace(/\s/g, "")];
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