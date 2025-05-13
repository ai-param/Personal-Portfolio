export default () => {
    return (
        <div className="flex flex-col justify-around text-center">
            <h1 className="text-3xl underline">
                About Me
            </h1>
            <p className="font-semibold m-4 text-xl">
                Hii Everyone,I am Paramveer Singh, an 2nd Year Undergraduate,from Jharkhand,India
            </p>
            <p>
                Currently I am Learning Web Development and Competitive Programming
            </p>
            <div className="m-8">
                <div className="text-4xl underline">Achievements</div>
                <div className="flex flex-col font-bold">
                    <div>
                       Rated 1457 on Leetcode
                    </div>
                    <div>
                        Rated 1300 on CodeChef
                    </div>
                </div>
            </div>
        </div>
    )
}