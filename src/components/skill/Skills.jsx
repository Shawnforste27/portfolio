
import React from 'react';

// Skills Data - Organized in 3 cards
const skillsCards = [
    {
        title: "Frontend & Languages",
        skills: [
            "React.js",
            "JavaScript",
            "Tailwind CSS",
            "HTML",
            "CSS",
            "Python"
        ]
    },
    {
        title: "Backend & Databases",
        skills: [
            "Node.js",
            "Express.js",
            "FastAPI",
            "SQLAlchemy",
            "MongoDB",
            "PostgreSQL"
        ]
    },
    {
        title: "Tools & DevOps",
        skills: [
            "Git",
            "GitHub",
            "AWS (EC2)",
            "CI/CD",
            "Nginx",
            "Cloudinary",
            "Firebase"
        ]
    }
];

const Skills = () => {
    return (
        <div className="min-h-screen px-6 md:px-16 py-20">

            {/* Header - Same style as About page */}
            <div className="mb-12">
                <h4 className="text-lg uppercase tracking-widest text-green-500 mb-2">
                    My Expertise
                </h4>
                <h2 className="text-4xl font-semibold leading-tight text-white">
                    Technical <span className="text-green-500">Skills</span>
                </h2>
            </div>

            {/* 3 Cards - Single Row on Desktop, Stacked on Mobile */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {skillsCards.map((card, index) => (
                    <div
                        key={index}
                        className="bg-white/5 backdrop-blur-md rounded-xl p-6 text-white border border-white/10 hover:border-green-500/50 transition-all duration-300"
                    >
                        {/* Card Title */}
                        <h3 className="text-2xl font-semibold mb-6 text-green-500">
                            {card.title}
                        </h3>

                        {/* Skills List */}
                        <div className="space-y-3">
                            {card.skills.map((skill, skillIndex) => (
                                <div
                                    key={skillIndex}
                                    className="text-gray-300 py-2 border-b border-white/10 last:border-0"
                                >
                                    {skill}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
};

export default Skills;
