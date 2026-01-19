import { useState, useEffect } from 'react'
import { FaCode, FaRocket, FaMicrochip, FaLaptopCode, FaCogs, FaDatabase } from 'react-icons/fa'

const Projects = () => {
  const [projects, setProjects] = useState([])

  // Vibrant gradient combinations
  const gradients = [
    'from-purple-600 via-pink-600 to-blue-600',
    'from-orange-500 via-red-500 to-pink-600',
    'from-teal-500 via-cyan-600 to-blue-600',
    'from-green-500 via-emerald-600 to-teal-600',
    'from-indigo-600 via-purple-600 to-pink-600',
    'from-yellow-500 via-orange-500 to-red-600',
  ]

  // Technology-themed icons
  const icons = [FaCode, FaRocket, FaMicrochip, FaLaptopCode, FaCogs, FaDatabase]

  useEffect(() => {
    // Load projects from JSON file
    fetch(`${import.meta.env.BASE_URL}projects.json`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => {
        console.error('Error loading projects:', error)
        // Fallback data
        setProjects([
          {
            title: "E-Commerce Platform",
            description: "Full-stack web application with React and Node.js",
            tech: ["React", "Node.js", "MongoDB", "Express"],
            link: "#"
          }
        ])
      })
  }, [])

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold font-['Poppins'] text-base-content mb-16 animate-fade-in">
          My Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects && projects.length > 0 ? (
            projects.map((project, index) => {
              const IconComponent = icons[index % icons.length]
              const gradient = gradients[index % gradients.length]

              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3 hover:scale-105 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                >
                  {/* Gradient Background */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-90 group-hover:opacity-100 transition-opacity duration-500`}></div>

                  {/* Light mode overlay to soften gradients */}
                  <div className="project-card-overlay absolute inset-0 transition-colors duration-300"></div>

                  {/* Decorative floating circles */}
                  <div className="project-card-circle absolute top-0 right-0 w-40 h-40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
                  <div className="project-card-circle absolute bottom-0 left-0 w-32 h-32 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                  {/* Card Content */}
                  <div className="relative z-10 p-8 h-full flex flex-col">
                    {/* Icon */}
                    <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                      <IconComponent className="project-card-icon w-16 h-16 drop-shadow-lg" />
                    </div>

                    {/* Title */}
                    <h3 className="project-card-title text-3xl font-bold font-['Poppins'] mb-4 leading-tight">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="project-card-description font-['Poppins'] text-base mb-6 leading-relaxed flex-grow">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech && project.tech.length > 0 ? project.tech.map((tech, idx) => (
                        <span
                          key={idx}
                          className="project-card-badge px-3 py-1.5 backdrop-blur-sm text-sm font-semibold rounded-full border transition-all duration-300"
                        >
                          {tech}
                        </span>
                      )) : (
                        <span className="project-card-badge px-3 py-1.5 backdrop-blur-sm text-sm font-semibold rounded-full border">
                          Project
                        </span>
                      )}
                    </div>

                    {/* View Project Button */}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-card-button inline-flex items-center justify-center px-6 py-3 font-bold font-['Poppins'] rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                      >
                        View Project
                        <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    )}
                  </div>

                  {/* Glassmorphism overlay on hover */}
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500 pointer-events-none"></div>
                </div>
              )
            })
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-base-content/70 font-['Poppins'] text-lg">
                No projects found. Add folders to public/projects/ or edit public/projects.json
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Projects
