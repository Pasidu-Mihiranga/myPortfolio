import { SiPython, SiReact, SiJavascript, SiNodedotjs, SiHtml5, SiCss3, SiTailwindcss, SiGit, SiMongodb, SiMysql, SiPostgresql, SiExpress, SiFlask, SiDjango, SiPandas, SiLinux, SiNextdotjs, SiC, SiCplusplus, SiFlutter, SiSpring } from 'react-icons/si'
import { FaGithub, FaJava, FaWindows } from 'react-icons/fa'

const About = () => {
  const skills = [
    { name: "Python", icon: <SiPython className="w-12 h-12" />, color: "text-blue-500" },
    { name: "Java", icon: <FaJava className="w-12 h-12" />, color: "text-orange-500" },
    { name: "Spring Boot", icon: <SiSpring className="w-12 h-12" />, color: "text-green-600" },
    { name: "C", icon: <SiC className="w-12 h-12" />, color: "text-blue-600" },
    { name: "C++", icon: <SiCplusplus className="w-12 h-12" />, color: "text-blue-700" },
    { name: "React", icon: <SiReact className="w-12 h-12" />, color: "text-cyan-500" },
    { name: "React Native", icon: <SiReact className="w-12 h-12" />, color: "text-blue-500" },
    { name: "Flutter", icon: <SiFlutter className="w-12 h-12" />, color: "text-blue-400" },
    { name: "Next.js", icon: <SiNextdotjs className="w-12 h-12" />, color: "text-black dark:text-white" },
    { name: "JavaScript", icon: <SiJavascript className="w-12 h-12" />, color: "text-yellow-500" },
    { name: "Node.js", icon: <SiNodedotjs className="w-12 h-12" />, color: "text-green-500" },
    { name: "Express", icon: <SiExpress className="w-12 h-12" />, color: "text-gray-500" },
    { name: "Flask", icon: <SiFlask className="w-12 h-12" />, color: "text-gray-700" },
    { name: "Django", icon: <SiDjango className="w-12 h-12" />, color: "text-green-800" },
    { name: "Pandas", icon: <SiPandas className="w-12 h-12" />, color: "text-blue-600" },
    { name: "HTML5", icon: <SiHtml5 className="w-12 h-12" />, color: "text-orange-600" },
    { name: "CSS3", icon: <SiCss3 className="w-12 h-12" />, color: "text-blue-600" },
    { name: "TailwindCSS", icon: <SiTailwindcss className="w-12 h-12" />, color: "text-teal-500" },
    { name: "Git", icon: <SiGit className="w-12 h-12" />, color: "text-red-600" },
    { name: "GitHub", icon: <FaGithub className="w-12 h-12" />, color: "text-gray-800 dark:text-white" },
    { name: "MongoDB", icon: <SiMongodb className="w-12 h-12" />, color: "text-green-600" },
    { name: "MySQL", icon: <SiMysql className="w-12 h-12" />, color: "text-blue-700" },
    { name: "PostgreSQL", icon: <SiPostgresql className="w-12 h-12" />, color: "text-blue-800" },
    { name: "Linux", icon: <SiLinux className="w-12 h-12" />, color: "text-yellow-600" },
    { name: "Windows", icon: <FaWindows className="w-12 h-12" />, color: "text-blue-600" },
  ]

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold font-['Poppins'] text-base-content mb-16 animate-fade-in">
          About Me
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Content */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-3xl font-bold font-['Poppins'] text-base-content mb-4">
                  My Story
                </h3>
                <p className="text-base-content/80 text-lg font-['Poppins'] leading-relaxed">
                  I am a passionate Information Technology undergraduate at the University of Moratuwa, 
                  with a strong foundation in programming and web development. My journey in tech started 
                  with curiosity and has evolved into a deep love for solving complex problems through code.
                </p>
                <p className="text-base-content/80 text-lg font-['Poppins'] leading-relaxed">
                  Whether it's building scalable web applications, implementing machine learning algorithms, 
                  or creating intuitive user interfaces, I approach each project with enthusiasm and attention 
                  to detail. I thrive in collaborative environments and am always eager to learn from experienced 
                  professionals while contributing innovative solutions.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="stat bg-base-100 rounded-box shadow-xl">
                <div className="stat-title text-base-content/70">Years of Experience</div>
                <div className="stat-value text-primary">1+</div>
              </div>
              <div className="stat bg-base-100 rounded-box shadow-xl">
                <div className="stat-title text-base-content/70">Projects Completed</div>
                <div className="stat-value text-primary">6+</div>
              </div>
            </div>
            
            {/* Education Timeline - Now in Left Column */}
            <div className="mt-8">
              <h3 className="text-2xl font-bold font-['Poppins'] text-base-content mb-6">Education</h3>
              <div className="relative max-w-4xl">
                {/* Timeline Line - Centered */}
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-primary transform -translate-x-1/2"></div>
                
                {/* Timeline Items - Alternating Left/Right */}
                <div className="space-y-8 relative">
                  {/* Item 1 - Right */}
                  <div className="flex items-center relative">
                    <div className="w-1/2 pr-4"></div>
                    <div className="absolute left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-base-200 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-1/2 pl-4">
                      <div className="bg-base-100 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all text-left">
                        <h4 className="text-sm font-bold font-['Poppins'] text-primary mb-1">2023 - Present</h4>
                        <h5 className="text-xs font-semibold font-['Poppins'] text-base-content mb-1">B.Sc.(Hons) in Information Technology</h5>
                        <p className="text-xs text-base-content/70 font-['Poppins']">Faculty of Information Technology, University of Moratuwa</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item 2 - Left */}
                  <div className="flex items-center relative">
                    <div className="w-1/2 pr-4 text-right">
                      <div className="bg-base-100 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all">
                        <h4 className="text-sm font-bold font-['Poppins'] text-primary mb-1">2022</h4>
                        <h5 className="text-xs font-semibold font-['Poppins'] text-base-content mb-1">G.C.E. Advanced Level</h5>
                        <p className="text-xs text-base-content/70 font-['Poppins'] mb-1">Richmond College-Galle</p>
                        <p className="text-xs text-base-content/60 font-['Poppins']">Physics - A | Chemistry - A | Combined Mathematics - B</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-base-200 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-1/2 pl-4"></div>
                  </div>
                  
                  {/* Item 3 - Right */}
                  <div className="flex items-center relative">
                    <div className="w-1/2 pr-4"></div>
                    <div className="absolute left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-base-200 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-1/2 pl-4">
                      <div className="bg-base-100 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all text-left">
                        <h4 className="text-sm font-bold font-['Poppins'] text-primary mb-1">2019</h4>
                        <h5 className="text-xs font-semibold font-['Poppins'] text-base-content mb-1">G.C.E. Ordinary Level</h5>
                        <p className="text-xs text-base-content/70 font-['Poppins'] mb-1">Richmond College-Galle</p>
                        <p className="text-xs text-base-content/60 font-['Poppins']">9 A passes including Mathematics, Science, English</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Item 4 - Left */}
                  <div className="flex items-center relative">
                    <div className="w-1/2 pr-4 text-right">
                      <div className="bg-base-100 rounded-xl px-4 py-3 shadow-lg hover:shadow-xl transition-all">
                        <h4 className="text-sm font-bold font-['Poppins'] text-primary mb-1">Until 2013</h4>
                        <h5 className="text-xs font-semibold font-['Poppins'] text-base-content mb-1">Primary Education</h5>
                        <p className="text-xs text-base-content/70 font-['Poppins'] mb-1">Telijjawila Royal College, Matara</p>
                        <p className="text-xs text-base-content/60 font-['Poppins']">Grade 5 Scholarship Examination: 183 marks</p>
                      </div>
                    </div>
                    <div className="absolute left-1/2 w-3 h-3 rounded-full bg-primary border-2 border-base-200 transform -translate-x-1/2 flex items-center justify-center z-10">
                      <svg className="w-2 h-2 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="w-1/2 pl-4"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Skills */}
          <div className="space-y-6 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
            <div className="card bg-base-100 shadow-xl">
              <div className="card-body">
                <h3 className="text-3xl font-bold font-['Poppins'] text-base-content mb-6">
                  Skills & Technologies
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {skills.map((skill, index) => (
                    <div
                      key={index}
                      className="card bg-base-200 shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 cursor-pointer group"
                    >
                      <div className="card-body items-center text-center py-6">
                        <div className={`${skill.color} mb-2 transition-transform group-hover:scale-110`}>
                          {skill.icon}
                        </div>
                        <h4 className="font-['Poppins'] font-semibold text-sm text-base-content">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
