import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
  name: "Chat Assistant App",
  description: "A real-time chat interface built with Next.js. Features include message persistence, loading states, and a clean modern UI.",
  tech: "Next.js, Tailwind CSS, Lucide Icons",
  image: "/chat-app.png",
  demo: "https://my-chat-app-one-silk.vercel.app/chat",
  github: "https://github.com/TEMITECH-BOY/my-chat-app"
},
{
    name: "Clone Responsive Landing Page",
    description:
      "This project is a responsive real estate website showcasing property listings, Instagram updates, and a newsletter subscription, designed with React and Tailwind CSS.",
    tech: "React, Tailwind CSS",
    image: "/wonder.png",
    demo: "https://wonder-real-estate.vercel.app/",
    github: "https://github.com/TEMITECH-BOY/wonder-real-estate",
  },

  {
    name: "Clone Responsive Landing Page",
    description: "A clean responsive landing page clone.",
    tech: "React, Tailwind CSS",
    image: "/organix.png",
    demo: "https://organix-farm.vercel.app/",
    github: "https://github.com/TEMITECH-BOY/Organix-Farm",
  },
  
  {
    name: "Browser Extension Manager",
    description:
      "Displays extensions with logo, name, description, toggle to activate/deactivate, and remove option. Includes filter tabs: All, Active, Inactive.",
    tech: "JavaScript, CSS, HTML5",
    image: "/extension-manager.webp",
    demo: "https://browser-extension-manager-sandy.vercel.app/",
    github: "https://github.com/TEMITECH-BOY/browserExtensionManager",
  },
  {
    name: "Interior Design",
    description: "Modern interior design website.",
    tech: "JavaScript, CSS, HTML5",
    image: "/lightsphere.png",
    demo: "https://project-lightsphere.vercel.app/ ",
    github: "https://github.com/TEMITECH-BOY/projectLightsphere",
  },
  {
    name: "CO-FI - A Coffee Shop",
    description: "A coffee shop website with a modern design.",
    tech: "React, Tailwind CSS",
    image: "/cofi.png",
    demo: "https://co-fi-omega.vercel.app/",
    github: "https://github.com/TEMITECH-BOY/CO-FI-.git",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="max-w-6xl mx-auto py-16 px-4 ">
      <h3 className="text-3xl font-bold mb-8 text-center text-teal-600 dark:text-teal-400">
        Projects
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300"
          >
            
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-48 object-cover"
              />
            

            <div className="p-4 flex flex-col justify-between h-full">
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.name}
                </h4>
                <p className="text-gray-600 dark:text-gray-300 mb-3">
                  {project.description}
                </p>
                <span className="inline-block bg-teal-100 text-teal-600 dark:bg-teal-900 dark:text-teal-300 px-2 py-1 rounded text-xs font-medium">
                  {project.tech}
                </span>
                <div className="flex items-center  mt-6 space-x-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  <FaGithub size={20} />
                </a>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition"
                >
                  <FaExternalLinkAlt size={18} className="green-400" />
                </a>
              </div>
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
