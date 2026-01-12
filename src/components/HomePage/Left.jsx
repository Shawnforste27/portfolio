import { FaLinkedin, FaGithub } from "react-icons/fa";

const Left = () => {
    return (
        <div className="max-w-xl text-left">
            <h3 className="text-xl md:text-2xl text-gray-400">
                Hello 👋
            </h3>

            <h1 className="text-3xl md:text-5xl font-bold mt-2 text-white">
                I am <span className="text-green-500">Ambikesh</span>
            </h1>

            <h2 className="text-xl md:text-3xl mt-2 text-gray-300">
                Software Engineer
            </h2>

            <p className="mt-4 text-sm md:text-base text-gray-400">
                I make complex things simple and build clean, scalable web apps.
            </p>

            <div className="flex flex-wrap items-center justify-start gap-4 mt-8">
                <a
                    href="src\assets\ambikesh.pdf"
                    download
                    className="px-6 py-3 bg-green-500 text-white rounded-xl font-semibold hover:bg-green-600 transition"
                >
                    Resume
                </a>

                <a
                    href="https://www.linkedin.com/in/ambikesh27/"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl text-blue-500 hover:scale-110 transition"
                >
                    <FaLinkedin />
                </a>

                <a
                    href="https://github.com/shawnforste27"
                    target="_blank"
                    rel="noreferrer"
                    className="text-3xl text-gray-200 hover:scale-110 transition"
                >
                    <FaGithub />
                </a>
            </div>
        </div>
    );
};

export default Left;
