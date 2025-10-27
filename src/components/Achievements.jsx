import { useState, useEffect } from 'react'
import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa'

const Achievements = () => {
  const [achievements, setAchievements] = useState([])

  useEffect(() => {
    // Load achievements from JSON file
    fetch(`${import.meta.env.BASE_URL}achievements.json`)
      .then(response => response.json())
      .then(data => setAchievements(data))
      .catch(error => {
        console.error('Error loading achievements:', error)
        // Fallback data
        setAchievements([
          {
            title: "Dean's List",
            institution: "University of Moratuwa",
            year: "2023",
            description: "Recognized for outstanding academic performance",
          }
        ])
      })
  }, [])

  return (
    <section className="min-h-screen py-32 px-6 md:px-12 lg:px-16 bg-base-200">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold font-['Poppins'] text-base-content mb-16 animate-fade-in">
          Achievements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {achievements && achievements.length > 0 ? (
            achievements.map((achievement, index) => (
              <div
                key={index}
                className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-2 animate-fade-in w-full max-w-sm mx-auto relative"
                style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
              >
                {/* Position Badge Icon */}
                {achievement.position && (
                  <div className={`absolute top-4 right-4 z-10 ${
                    achievement.position === 1 ? 'text-yellow-400' :
                    achievement.position === 2 ? 'text-gray-300' :
                    achievement.position === 3 ? 'text-orange-400' :
                    'text-blue-400'
                  }`}>
                    {achievement.position === 1 && <FaTrophy className="w-8 h-8" />}
                    {achievement.position === 2 && <FaMedal className="w-8 h-8" />}
                    {achievement.position === 3 && <FaMedal className="w-8 h-8" />}
                    {achievement.position > 3 && <FaAward className="w-8 h-8" />}
                  </div>
                )}
                
                {achievement.image && (
                  <figure className="overflow-hidden h-80 relative rounded-t-3xl">
                    {/* Position Badge on Image */}
                    {achievement.position && (
                      <div className={`absolute top-4 right-4 z-10 flex items-center gap-2 bg-base-100/90 backdrop-blur-sm px-3 py-2 rounded-full shadow-lg ${
                        achievement.position === 1 ? 'border-2 border-yellow-400' :
                        achievement.position === 2 ? 'border-2 border-gray-300' :
                        achievement.position === 3 ? 'border-2 border-orange-400' :
                        'border-2 border-blue-400'
                      }`}>
                        {achievement.position === 1 && <FaTrophy className="w-5 h-5 text-yellow-500" />}
                        {achievement.position === 2 && <FaMedal className="w-5 h-5 text-gray-400" />}
                        {achievement.position === 3 && <FaMedal className="w-5 h-5 text-orange-500" />}
                        {achievement.position > 3 && <FaAward className="w-5 h-5 text-blue-500" />}
                        <span className="text-sm font-bold font-['Poppins']">
                          {achievement.position === 1 ? 'CHAMPIONS' :
                           achievement.position === 2 ? '2ND PLACE' :
                           achievement.position === 3 ? '3RD PLACE' :
                           `${achievement.position}TH PLACE`}
                        </span>
                      </div>
                    )}
                    <img
                      src={achievement.image.startsWith('/') ? `${import.meta.env.BASE_URL}${achievement.image.slice(1)}` : achievement.image}
                      alt={achievement.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300 rounded-b-3xl"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </figure>
                )}
                <div className={`card-body ${achievement.image ? 'p-5' : 'p-4 min-h-[200px]'}`}>
                  <div className="flex flex-col gap-3">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold font-['Poppins'] text-base-content flex-1">
                        {achievement.title || 'Achievement'}
                      </h3>
                      {achievement.year && (
                        <div className="badge badge-primary badge-sm ml-2">
                          {achievement.year}
                        </div>
                      )}
                    </div>
                    {achievement.institution && (
                      <p className="text-primary font-['Poppins'] font-semibold text-sm">
                        {achievement.institution}
                      </p>
                    )}
                    {achievement.description && (
                      <p className="text-base-content/70 font-['Poppins'] text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <p className="text-base-content/70 font-['Poppins'] text-lg">
                No achievements found. Add folders to public/achievements/ or edit public/achievements.json
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Achievements
