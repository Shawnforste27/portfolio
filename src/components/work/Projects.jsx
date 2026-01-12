import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

// Projects Data - Add your projects here
const projectsData = [
    {
        title: "PIZZASTRIKER",
        description: "Full Stack Pizza Delivery Platform with secure role-based authentication using JWT for users and restaurants. Designed separate dashboards for users and restaurants with real-time order tracking.",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&h=400&fit=crop",
        technologies: ["Node.js", "Express.js", "React", "Tailwind CSS", "Firebase"],
        liveLink: "https://pizza-striker-iw9l.onrender.com/signin",
        githubLink: "https://github.com/Shawnforste27/pizzy"
    },
    {
        title: "STORYSCAPE",
        description: "AI-Powered Interactive Storytelling API with asynchronous story generation using FastAPI and background task processing. Added cookie-based sessions to track story progress without login.",
        image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=400&fit=crop",
        technologies: ["FastAPI", "SQLAlchemy", "Pydantic", "Swagger UI"],
        liveLink: null,
        githubLink: "https://github.com/Shawnforste27/StoryScape"
    },
    {
        title: "PINOVA",
        description: "Image Sharing Web App with responsive gallery, real-time pin management, search, and comments. Integrated Cloudinary for secure media uploads and JWT-based authentication.",
        image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f2?w=600&h=400&fit=crop",
        technologies: ["React.js", "Tailwind CSS", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
        liveLink: "https://pinova-client-v2.netlify.app/",
        githubLink: "https://github.com/Shawnforste27/Pinova"
    }
];

const Projects = () => {
    return (
        <div className="min-h-screen px-6 md:px-16 py-20">

            {/* Header */}
            <div className="mb-12">
                <h4 className="text-lg uppercase tracking-widest text-green-500 mb-2">
                    My Work
                </h4>
                <h2 className="text-4xl font-semibold leading-tight text-white">
                    Featured <span className="text-green-500">Projects</span>
                </h2>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md rounded-xl overflow-hidden text-white border border-white/10 hover:border-green-500/50 transition-all duration-300 flex flex-col"
                    >
                        {/* Project Image */}
                        <div className="relative h-48 w-full overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                        </div>

                        {/* Project Content */}
                        <div className="p-6 flex flex-col flex-grow">
                            {/* Title */}
                            <h3 className="text-2xl font-semibold mb-3 text-green-500">
                                {project.title}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-grow">
                                {project.description}
                            </p>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className="text-xs px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-300"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-4 border-t border-white/10">
                                {project.githubLink && (
                                    <a
                                        href={project.githubLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors"
                                    >
                                        <Github className="w-5 h-5" />
                                        <span className="text-sm">Code</span>
                                    </a>
                                )}

                                {project.liveLink && (
                                    <a
                                        href={project.liveLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 text-gray-300 hover:text-green-500 transition-colors"
                                    >
                                        <ExternalLink className="w-5 h-5" />
                                        <span className="text-sm">Live</span>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Projects;