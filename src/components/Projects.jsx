import { useState, useEffect } from 'react'

const Projects = () => {
  const [projects, setProjects] = useState([])

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
            image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
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
            projects.map((project, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                <figure className="overflow-hidden">
                  <img
                    src={project.image && project.image.startsWith('/') ? `${import.meta.env.BASE_URL}${project.image.slice(1)}` : project.image || "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop"}
                    alt={project.title}
                    className="w-full h-64 object-cover hover:scale-110 transition-transform duration-300"
                  />
                </figure>
                <div className="card-body">
                  <h3 className="card-title text-2xl font-bold font-['Poppins'] text-base-content">
                    {project.title}
                  </h3>
                  <p className="text-base-content/70 font-['Poppins']">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tech && project.tech.length > 0 ? project.tech.map((tech, idx) => (
                      <span
                        key={idx}
                        className="badge badge-primary badge-lg"
                      >
                        {tech}
                      </span>
                    )) : (
                      <span className="badge badge-primary badge-lg">Project</span>
                    )}
                  </div>
                  <div className="card-actions justify-end mt-4">
                    <a
                      href={project.link}
                      className="btn btn-primary"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </div>
            ))
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
