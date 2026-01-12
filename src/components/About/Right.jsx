const Right = () => {
    return (
        <div className="divide-y divide-white/10 text-white flex flex-col">

            {/* About */}
            <div className="py-8">
                <h4 className="text-lg uppercase tracking-widest text-green-500 mb-2">
                    Who am I?
                </h4>

                <h2 className="text-4xl font-semibold leading-tight mb-6">
                    I'm <span className="text-green-500">Ambikesh Kushwaha</span>,
                    <br />a Software Developer
                </h2>

                <p className="text-gray-400 leading-relaxed">
                    Motivated and detail-oriented Full Stack Developer (Fresher) skilled in
                    building scalable web applications using React.js, Node.js, and FastAPI.
                    Passionate about clean code, performance optimization, and learning
                    modern DevOps and testing practices to contribute effectively to agile
                    teams.
                </p>
            </div>

            {/* Education */}
            <div className="py-8">
                <h3 className="text-2xl font-semibold mb-4 text-green-500">
                    Education
                </h3>

                <div className="bg-white/5 backdrop-blur-md rounded-xl p-6">
                    <p className="text-lg font-medium">
                        Bachelor of Technology in Computer Science Engineering
                    </p>

                    <p className="text-gray-400 mt-2">
                        July 2021 – May 2025
                    </p>

                    <p className="mt-2 text-gray-300">
                        RGPV University College – NIIST, Bhopal
                        <br />
                        <span className="text-green-400 font-semibold">
                            CGPA: 7.38
                        </span>
                    </p>
                </div>
            </div>

        </div>
    );
};


export default Right