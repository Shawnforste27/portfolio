import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            {/* Top Bar */}
            <div className="flex items-center justify-between px-6 md:px-12 py-6">
                <h1 className="font-bold text-2xl">Ambikesh Kushwaha</h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-lg">
                    <li
                        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-green-500"
                    >
                        About
                    </li>
                    <li
                        onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-green-500"
                    >
                        Skills
                    </li>
                    <li
                        onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-green-500"
                    >
                        Projects
                    </li>
                    <li
                        onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
                        className="cursor-pointer hover:text-green-500"
                    >
                        Contact
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl"
                >
                    {open ? <FiX /> : <FiMenu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md z-50">
                    <ul className="flex flex-col items-center gap-6 py-6 text-lg">
                        <li
                            onClick={() => {
                                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
                                setOpen(false);
                            }}
                            className="hover:text-green-500 cursor-pointer"
                        >
                            About
                        </li>
                        <li
                            onClick={() => {
                                document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
                                setOpen(false);
                            }}
                            className="hover:text-green-500 cursor-pointer"
                        >
                            Skills
                        </li>
                        <li
                            onClick={() => {
                                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
                                setOpen(false);
                            }}
                            className="hover:text-green-500 cursor-pointer"
                        >
                            Projects
                        </li>
                        <li
                            onClick={() => {
                                document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
                                setOpen(false);
                            }}
                            className="hover:text-green-500 cursor-pointer"
                        >
                            Contact
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Navbar;