/**
 * Load projects from the public/projects folder
 * Reads description.txt files and images from project folders
 */

export const loadProjects = async () => {
  const projects = []
  
  try {
    // List of project folders (you'll add these as you create them)
    const projectFolders = [
      // Example projects - you can remove these and add your own
      // The component will automatically pick up new folders
    ]

    for (const folder of projectFolders) {
      try {
        // Load description.txt
        const descriptionResponse = await fetch(`/projects/${folder}/description.txt`)
        if (!descriptionResponse.ok) continue
        
        const descriptionText = await descriptionResponse.text()
        const projectData = parseDescriptionFile(descriptionText)
        
        // Load thumbnail or first available image
        const thumbnail = await getProjectImage(folder)
        
        projects.push({
          ...projectData,
          folder,
          image: thumbnail,
        })
      } catch (error) {
        console.error(`Error loading project ${folder}:`, error)
      }
    }
  } catch (error) {
    console.error('Error loading projects:', error)
  }
  
  return projects
}

const parseDescriptionFile = (text) => {
  const data = {}
  
  text.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':')
    const value = valueParts.join(':').trim()
    
    if (key === 'TECH') {
      data.tech = value.split(',').map(t => t.trim())
    } else {
      data[key.toLowerCase()] = value
    }
  })
  
  return data
}

const getProjectImage = async (folder) => {
  // Try to load thumbnail first
  const thumbnailFormats = ['thumbnail.png', 'thumbnail.jpg', 'thumbnail.jpeg']
  
  for (const format of thumbnailFormats) {
    try {
      const response = await fetch(`/projects/${folder}/${format}`)
      if (response.ok) {
        return `/projects/${folder}/${format}`
      }
    } catch (e) {
      continue
    }
  }
  
  // Fallback: try to find any image in the folder
  const imageFormats = ['images/screenshot1.png', 'images/screenshot1.jpg', 'images/screenshot.png', 'screenshot.png']
  
  for (const format of imageFormats) {
    try {
      const response = await fetch(`/projects/${folder}/${format}`)
      if (response.ok) {
        return `/projects/${folder}/${format}`
      }
    } catch (e) {
      continue
    }
  }
  
  // Default placeholder
  return 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop'
}

