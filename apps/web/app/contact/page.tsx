import { Button } from "@/components/ui/button"
import { CardSpotlight } from "@/components/ui/card-spotlight"

export default () => {
    const socials = [
        {
            title:"DM me on Twitter/X",
            handle:"@Your_PARAM",
            link:"https://www.twitter.com",
            avatar:"https://img.icons8.com/?size=100&id=kbuAJVwYUPvh&format=png&color=000000"
        },
        {
            title:"DM me on LinkedIn",
            handle:"Paramveer Singh",
            link:"https://www.linkedin.com",
            avatar:"https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
        },
        {
            title:"Email",
            handle:"sparamveer1001@gmail.com",
            link:"mailto:sparamveer1001@gmail.com",
            avatar:"https://img.icons8.com/?size=100&id=qyRpAggnV0zH&format=png&color=000000"
        }
    ]
    return (
        <div className="flex flex-col">
            <CardSpotlight className="flex flex-col m-4">
                {
                socials.map((data,key)=>{
                    return (
                        <div className="flex justify-between border-4 m-4 p-8 rounded-xl" key={key}>
                            <div>
                                <div className="font-bold">
                                    {data.title}
                                </div>
                                <a href={data.link} target="_blank">
                                    {data.handle}
                                </a>
                            </div>
                            <img className="w-15 h-13 rounded-4xl" src={data.avatar}/>
                        </div>
                    );
                })
                }
            </CardSpotlight>
        </div>
    )
}