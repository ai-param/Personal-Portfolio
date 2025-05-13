import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

export default () => {
    const Project = [
        {
            title:"Counter App",
            description:"Timer,Stopwatch,World Clock and what not.Everytime you want to measure time,come here we have got everything set for you.TechStack Used :- HTML,CSS,JavaScript,React,NodeJs,MongoDB",
            livelink:"https://counter-timer-app.vercel.app/",
            githublink:"https://github.com/param-code/counter-app/",
            imageUrl:"counter.png"
        },
        {
            title:"Tip Wallah",
            description:"Tip Calculator Android App.Technologies Used :- Kotlin",
            livelink:"https://www.amazon.com/gp/product/B0DJM1KW8D",
            githublink:"https://github.com/param-code/Tip-Wallah",
            imageUrl:"tipwallah.png"
        },
        {
            title:"Love Byte",
            description:"Basic Js Website that renders different names everytime you clicks on button.Technologies Uses,HTML,Tailwind CSS,JavaScript",
            livelink:"https://love-byte-neon.vercel.app/",
            githublink:"https://github.com/param-code/LoveByte",
            imageUrl:"love-byte.png"
        },
        {
            title:"To do",
            description:"Helps you Manage your Day.Frontend :- React , Backend :- NodeJs & Express , Database :- MongoDb",
            livelink:"https://express-todo-frontend.vercel.app/",
            githublink:"https://github.com/param-code/express-todo-frontend",
            imageUrl:"todo.png"
        }
    ]
    return (
        <div className="grid grid-flow-col grid-rows-2 gaps-4">
            {
                Project.map((data,key)=>{
                    return (<div key={key}>
                        <CardContainer className="inter-var">
                            <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                                <CardItem
                                    translateZ="50"
                                      className="text-xl font-bold text-neutral-600 dark:text-white"
                                >
                                {data.title}
                                </CardItem>
                                <CardItem
                                as="p"
                                translateZ="60"
                                className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
                                >
                                {data.description}
                                </CardItem>
                                <CardItem
                                translateZ="100"
                                rotateX={20}
                                rotateZ={-10}
                                className="w-full mt-4"
                                >
                                <img
                                    src={data.imageUrl}
                                    height="1000"
                                    width="1000"
                                    className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                                    alt="thumbnail"
                                />
                                </CardItem>
                                <div className="flex justify-between items-center mt-20">
                                <CardItem
                                    translateZ={20}
                                    translateX={-40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                                >
                                    <a href={data.livelink} target="_blank">
                                    Live Preview →
                                    </a>
                                </CardItem>
                                <CardItem
                                    translateZ={20}
                                    translateX={40}
                                    as="button"
                                    className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
                                >
                                    <a href={data.githublink} target="_blank">
                                        Github
                                    </a>
                                </CardItem>
                                </div>
                            </CardBody>
                            </CardContainer>
                    </div>)
                })
            }
        </div>
    )
}