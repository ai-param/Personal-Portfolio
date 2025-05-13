import { Box } from "@/components/ui/moving-border"
import {TbPointFilled} from "react-icons/tb"

export default () => {
    const exp = [
        {company:"GSSoC",
        role:"Project Admin",
        work:["Maintained the Github repo of counter-app.",
            "Looked after all the issues and pull requestes over the course of time.",
            "Handled all the issues alrised in the production single-handedly",
            "Achieved around 100 Stars on the github repo",
            "More than 50 contributers shared their time with us",
            "Various Technologies used like React,MongoDB,docker,etc."
        ],
        joining_date:"Oct 2024",
        ending_date:"Nov 2024"
    }
    ]
    return (
        <div>
            {
                exp.map((data,key)=>{
                    return (<Box key={key} duration={Math.floor(Math.random() * 10000) + 10000}
                        borderRadius="1.5rem"
                        className="bg-[radial-gradient(ellipse_at_center,_rgba(200,200,200,0.1)_0%,_transparent_70%)] dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col"
                        containerClassName="m-auto w-[900px] max-w-[90%] h-auto mt-4 md:mt-10">
                    <div className="w-[100%] md:px-6 px-1">
                        <div className="flex justify-between">
                            <h2 className="text-xl font-semibold">{data.company}</h2>
                            <div>
                                {data.joining_date} - {data.ending_date}
                            </div>
                        </div>
                            {data?.role && <h5 className="mt-3 italic">{data.role}</h5>}
                                <ul>
                                    {data.work.map((work_point, key_work) => (
                                    <li
                                        key={`work_${key_work}`}
                                        className="mt-4 flex items-center gap-3"
                                    >
                                        <TbPointFilled size="1.4rem" />
                                        <div>{work_point}</div>
                                    </li>
                                ))}
                                </ul>
                    </div>
                    </Box>)
                })
            }
        </div>
    )
}