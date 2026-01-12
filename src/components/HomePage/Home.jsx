import Navbar from "./Navbar";
import Left from "./Left";
import Bottom from "./Bottom";
import Background from "../../assets/Background.png";

const Home = () => {
    return (
        <div
            className="min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${Background})` }}
        >
            <Navbar />

            {/* Left section */}
            <div className="flex items-center justify-start mt-32 px-12">
                <Left />
            </div>

            <div className="mt-24">
                <Bottom />
            </div>
        </div>
    );
};

export default Home;
