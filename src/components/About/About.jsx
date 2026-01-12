

import Aboutleft from "./Aboutleft";
import Right from "./Right";

const About = () => {
    return (
        <div className="min-h-screen px-6 md:px-16 py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
                {/* ✅ Changed items-stretch to items-start */}

                {/* Left Image */}
                <div className="flex justify-center md:justify-start md:sticky md:top-20">
                    {/* ✅ Added md:sticky md:top-20 (optional) */}
                    <Aboutleft />
                </div>

                {/* Right Text */}
                <div className="flex">
                    <Right />
                </div>

            </div>
        </div>
    );
};

export default About;