const Bottom = () => {
    return (
        <div className="flex flex-col md:flex-row items-center justify-center 
                    divide-y md:divide-y-0 md:divide-x divide-gray-500 
                    px-6 md:px-12 text-gray-300">

            <div className="px-10 py-4 text-center">
                <h1 className="font-bold text-lg md:text-xl">Email</h1>
                <h4>ambikeshk75@gmail.com</h4>
            </div>

            <div className="px-10 py-4 text-center">
                <h1 className="font-bold text-lg md:text-xl">Phone</h1>
                <h4>+91 7477060981</h4>
            </div>

            <div className="px-10 py-4 text-center">
                <h1 className="font-bold text-lg md:text-xl">Location</h1>
                <h4>Vadodara</h4>
            </div>

        </div>
    );
};

export default Bottom;
