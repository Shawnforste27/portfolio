import React from 'react';
import { Mail, FileText, MapPin, Github, Linkedin } from 'lucide-react';

const Contact = () => {
    return (
        <div className="min-h-screen flex items-center justify-center px-6 md:px-16 py-20">
            <div className="max-w-4xl mx-auto text-center">

                {/* Main Heading */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Let's Build the Future Together
                </h1>

                {/* Description */}
                <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
                    A full-stack developer crafting scalable, efficient, and elegant solutions using modern
                    technologies like React, Svelte, FastAPI, Django and PostgreSQL. Driven by curiosity,
                    build in collaboration, and ready to take on real-world challenges.
                </p>

                {/* Location */}
                <div className="flex items-center justify-center gap-2 text-gray-300 mb-10">
                    <MapPin className="w-5 h-5 text-green-500" />
                    <span>Based in India - Available for Remote / on-site roles</span>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                    <a
                        href="mailto:ambikeshk75@gmail.com"
                        className="px-8 py-3 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg transition-all flex items-center justify-center gap-2"
                    >
                        <Mail className="w-5 h-5" />
                        Get in Touch
                    </a>

                    <a
                        href="src\assets\ambikesh (1).pdf"
                        download="ambikesh.pdf"
                        className="px-8 py-3 bg-white/5 hover:bg-white/10 text-white font-semibold rounded-lg border border-white/10 hover:border-white/30 transition-all flex items-center justify-center gap-2"
                    >
                        <FileText className="w-5 h-5" />
                        View Resume
                    </a>
                </div>

                {/* Social Icons */}
                <div className="flex gap-6 justify-center">
                    <a
                        href="https://github.com/shawnforste27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-green-500/50 transition-all group"
                    >
                        <Github className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors" />
                    </a>

                    <a
                        href="https://www.linkedin.com/in/ambikesh27"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 bg-white/5 hover:bg-white/10 rounded-lg border border-white/10 hover:border-green-500/50 transition-all group"
                    >
                        <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-green-500 transition-colors" />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Contact;