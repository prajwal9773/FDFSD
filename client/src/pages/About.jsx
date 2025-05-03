import React from "react";
import { FaUserTie, FaCode, FaPaintBrush, FaShieldAlt, FaProjectDiagram } from "react-icons/fa";
import { LuClipboard } from "react-icons/lu";

import Navbar from "./Navbar";

const About = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-200 relative overflow-hidden font-sans">
            {/* Animated background blobs */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-0">
                <div className="absolute w-96 h-96 bg-purple-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl animate-blob1"></div>
                <div className="absolute w-96 h-96 bg-pink-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl left-1/2 top-1/3 animate-blob2"></div>
                <div className="absolute w-96 h-96 bg-blue-300 opacity-30 rounded-full mix-blend-multiply filter blur-3xl left-1/3 top-2/3 animate-blob3"></div>
            </div>
            <Navbar />

            <div className="relative z-10 p-8">
                <header className="text-center mb-12">
                    <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 drop-shadow-lg tracking-tight">
                        About Us
                    </h1>
                    <p className="text-gray-700 mt-6 max-w-3xl mx-auto text-lg font-medium bg-white/60 rounded-xl shadow-xl p-6 backdrop-blur-md">
                        Welcome to <span className="font-bold text-purple-600">WorkNest</span>, where collaboration meets innovation.
                        Our platform empowers teams to achieve their goals efficiently by organizing tasks, managing resources, and improving communication.
                        Whether you're handling small projects or managing large-scale operations, our tool adapts to your needs, ensuring every task is on track and every milestone is celebrated.
                    </p>
                </header>

                {/* Project Documentation Section */}
                <section className="max-w-4xl mx-auto mb-16">
                    <div className="relative group float-animate">
                        <div className="absolute inset-0 rounded-3xl border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-60 blur-lg group-hover:opacity-80 transition duration-300"></div>
                        <div className="relative bg-white/80 rounded-3xl shadow-2xl p-10 backdrop-blur-lg border border-white/40 transition-transform hover:scale-105 hover:shadow-3xl duration-300">
                            <h2 className="text-3xl font-bold text-blue-700 mb-4 flex items-center gap-2">
                                <FaProjectDiagram className="text-purple-500" /> What is WorkNest?
                            </h2>
                            <p className="text-gray-700 mb-4">
                                <strong>WorkNest</strong> is a modern project management tool inspired by Trello, designed to help teams organize, track, and collaborate on tasks visually and efficiently.
                            </p>
                            <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-4">
                                <li><b>Boards & Lists:</b> Organize your projects into boards, with customizable lists for every workflow.</li>
                                <li><b>Cards:</b> Add tasks as cards, assign members, set due dates, and track progress with drag-and-drop ease.</li>
                                <li><b>Collaboration:</b> Real-time updates, comments, and notifications keep everyone in sync.</li>
                                <li><b>Customizable:</b> Personalize boards with labels, priorities, and backgrounds.</li>
                                <li><b>Secure & Scalable:</b> Built with robust backend and modern security practices.</li>
                            </ul>
                            <div className="mt-6 text-sm text-gray-500">
                                <b>Tech Stack:</b> React, Node.js, Express, MongoDB, TailwindCSS
                            </div>
                            <div className="mt-8">
                                <h3 className="text-xl font-semibold text-purple-600 mb-2">Sample Board Structure (Code Snippet)</h3>
                                <pre className="bg-gray-900 text-green-300 rounded-xl p-4 text-xs overflow-x-auto shadow-lg border border-purple-400">
{`{
  "board": "WorkNest Launch",
  "lists": [
    { "name": "To Do", "cards": ["Design UI", "Set up DB"] },
    { "name": "In Progress", "cards": ["API Integration"] },
    { "name": "Done", "cards": ["Project Planning"] }
  ]
}`}
                                </pre>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center drop-shadow-md">
                        Our Mission
                    </h2>
                    <p className="text-gray-700 leading-relaxed text-center text-lg bg-white/60 rounded-xl shadow-lg p-6 backdrop-blur-md">
                        Our mission is to make project management effortless, seamless, and accessible for everyone.
                        We empower teams to focus on what truly matters—collaboration, creativity, and delivering exceptional results.
                        By providing tools that are intuitive yet powerful, we bridge the gap between vision and execution.
                    </p>
                </section>

                <section className="max-w-5xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center drop-shadow-md">
                        Meet Our Team
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        <TeamMember
                            name="Akshitha"
                            role="Frontend Developer"
                            icon={<FaCode className="text-3xl text-blue-500" />}
                            description="Akshitha crafts user-friendly interfaces and ensures seamless user experiences. She thrives on creating interactive designs that make our platform both functional and delightful."
                        />
                        <TeamMember
                            name="Vishwaksen"
                            role="Backend Developer"
                            icon={<FaCode className="text-3xl text-purple-500" />}
                            description="Vishwaksen is the backbone of our platform, building robust APIs and maintaining data security. His expertise in server-side development ensures everything runs smoothly behind the scenes."
                        />
                        <TeamMember
                            name="Prajwal Kumar"
                            role="Project Manager"
                            icon={<FaUserTie className="text-3xl text-pink-500" />}
                            description="Prajwal oversees project timelines, milestones, and team coordination. His leadership ensures that we stay on track and meet our goals with precision and dedication."
                        />
                        <TeamMember
                            name="Santosh"
                            role="UI/UX Designer"
                            icon={<FaPaintBrush className="text-3xl text-yellow-500" />}
                            description="Santosh brings creativity to the team by designing intuitive layouts and beautiful visuals. Her focus on user-centric design ensures a top-notch experience for our users."
                        />
                        <TeamMember
                            name="Giridhar"
                            role="Quality Assurance"
                            icon={<FaShieldAlt className="text-3xl text-green-500" />}
                            description="Giridhar's attention to detail helps us deliver a bug-free and reliable product. His rigorous testing process ensures the platform meets the highest standards of quality."
                        />
                    </div>
                </section>
            </div>

            {/* Animations for blobs and float */}
            <style>
                {`
                @keyframes blob1 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(-40px) scale(1.1);} }
                @keyframes blob2 { 0%,100%{transform:translateX(0) scale(1);} 50%{transform:translateX(40px) scale(1.05);} }
                @keyframes blob3 { 0%,100%{transform:translateY(0) scale(1);} 50%{transform:translateY(40px) scale(1.08);} }
                .animate-blob1 { animation: blob1 8s infinite ease-in-out; }
                .animate-blob2 { animation: blob2 10s infinite ease-in-out; }
                .animate-blob3 { animation: blob3 12s infinite ease-in-out; }
                @keyframes float {
                    0%, 100% { transform: translateY(0);}
                    50% { transform: translateY(-10px);}
                }
                .float-animate { animation: float 3s ease-in-out infinite; }
                `}
            </style>
        </div>
    );
};

const TeamMember = ({ name, role, description, icon }) => (
    <div className="relative group float-animate">
        <div className="absolute inset-0 rounded-2xl border-4 border-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 opacity-60 blur-lg group-hover:opacity-80 transition duration-300"></div>
        <div className="relative bg-white/80 rounded-2xl shadow-2xl p-8 flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-3xl duration-300 backdrop-blur-lg border border-white/40">
            <div className="mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-gray-800">{name}</h3>
            <p className="text-gray-600 font-medium">{role}</p>
            <p className="text-gray-500 mt-2 text-center">{description}</p>
        </div>
    </div>
);

export default About;
