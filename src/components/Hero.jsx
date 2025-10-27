import { useNavigate } from 'react-router-dom'

const Hero = () => {
  const navigate = useNavigate()

  const handleDownloadCV = async () => {
    try {
      console.log('Starting CV download...')
      // Fetch the CV file
      const response = await fetch('/cv.pdf')
      
      if (!response.ok) {
        throw new Error(`Failed to load CV: ${response.statusText}`)
      }
      
      console.log('CV file loaded, converting to blob...')
      // Get the file as a blob
      const blob = await response.blob()
      console.log('Blob created, size:', blob.size, 'bytes')
      
      // Create a URL for the blob
      const blobUrl = window.URL.createObjectURL(blob)
      
      // Create a temporary anchor element to trigger download
      const link = document.createElement('a')
      link.href = blobUrl
      link.download = 'Pasindu_Mihiranga_CV.pdf'
      link.style.display = 'none'
      document.body.appendChild(link)
      
      console.log('Triggering download...')
      link.click()
      
      // Clean up
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
      console.log('CV download complete')
    } catch (error) {
      console.error('Error downloading CV:', error)
      alert('Failed to download CV. Please try again or contact me directly.')
    }
  }

  const handleViewProjects = () => {
    // Navigate to projects page
    navigate('/projects')
  }

  return (
    <section className="w-full relative bg-base-300 overflow-hidden">
      {/* Background Images */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1557683311-eac922347aa1?w=3211&h=2119&fit=crop"
          alt="Background"
          className="w-full h-full object-cover"
          style={{ filter: 'blur(40px)' }}
        />
      </div>

      {/* Content Grid */}
      <div className="relative z-10 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-24 sm:pt-32 md:pt-36 lg:pt-40 pb-4 sm:pb-6 md:pb-12 lg:pb-20 max-w-7xl mx-auto">
        <div className="relative md:grid md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 md:items-start">
          {/* Left Side - Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6 lg:space-y-8 relative z-10 md:col-span-1">
            {/* Greeting */}
            <div className="text-base-content text-xl sm:text-2xl md:text-3xl font-medium font-['Poppins'] animate-fade-in hero-text-desktop-reduced">
              Hi, I'm Pasindu Mihiranga,
            </div>

            {/* Title */}
            <div className="text-base-content text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-8xl font-bold font-['Poppins'] leading-tight animate-fade-in hero-text-desktop-reduced" style={{ animationDelay: '0.2s', animationFillMode: 'both' }}>
              Information Technology Undergraduate
            </div>

            {/* University */}
            <div className="text-base-content text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold font-['Poppins'] leading-tight animate-fade-in hero-text-desktop-reduced" style={{ animationDelay: '0.4s', animationFillMode: 'both' }}>
              University Of Moratuwa
            </div>

            {/* Description */}
            <div className="text-base-content/80 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-normal font-['Poppins'] leading-relaxed pt-2 sm:pt-3 md:pt-4 animate-fade-in hero-text-desktop-reduced" style={{ animationDelay: '0.6s', animationFillMode: 'both' }}>
              Passionate and driven undergraduate with a fervent enthusiasm for Python, Java programming, and web development. With a solid foundation in these technologies, I thrive on tackling challenging projects and continuously expanding my skill set. Eager to contribute my expertise and dedication to dynamic teams, fostering innovation and achieving impactful results.
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 md:pt-12">
              <button
                onClick={handleViewProjects}
                className="btn btn-primary btn-sm sm:btn-md md:btn-lg text-sm sm:text-base md:text-lg font-bold font-['Poppins'] w-full hover:scale-105 transition-all shadow-lg hover:shadow-xl hero-text-desktop-reduced"
              >
                View My Projects
              </button>

              <button
                onClick={handleDownloadCV}
                className="btn btn-outline btn-sm sm:btn-md md:btn-lg text-sm sm:text-base md:text-lg font-bold font-['Poppins'] btn-primary w-full hover:scale-105 transition-all shadow-lg hover:shadow-xl hero-text-desktop-reduced"
              >
                Download My CV
              </button>
            </div>
          </div>

          {/* Right Side - Photo */}
          <div className="absolute top-16 right-0 w-full max-w-xs profile-photo-mobile md:relative md:flex md:justify-end md:items-start md:pt-8 md:opacity-100 md:z-0 md:col-span-1 md:max-w-none lg:pt-20">
            <div className="relative w-full max-w-sm md:max-w-lg lg:max-w-2xl z-0">
              <img
                src={`${import.meta.env.BASE_URL}images/home/profile-photo.png`}
                alt="Pasindu Mihiranga - Profile"
                className="w-full h-auto rounded-3xl object-cover shadow-2xl"
                onError={(e) => {
                  // Fallback to placeholder if image not found
                  e.target.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=784&h=1045&fit=crop"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
