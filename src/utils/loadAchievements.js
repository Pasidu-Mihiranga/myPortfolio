/**
 * Load achievements from the public/achievements folder
 * Reads description.txt files and images from achievement folders
 */

export const loadAchievements = async () => {
  const achievements = []
  
  try {
    // List of achievement folders (you'll add these as you create them)
    const achievementFolders = [
      // Example achievements - you can remove these and add your own
      // The component will automatically pick up new folders
    ]

    for (const folder of achievementFolders) {
      try {
        // Load description.txt
        const descriptionResponse = await fetch(`/achievements/${folder}/description.txt`)
        if (!descriptionResponse.ok) continue
        
        const descriptionText = await descriptionResponse.text()
        const achievementData = parseDescriptionFile(descriptionText)
        
        // Load thumbnail or first available image
        const thumbnail = await getAchievementImage(folder)
        
        achievements.push({
          ...achievementData,
          folder,
          image: thumbnail,
        })
      } catch (error) {
        console.error(`Error loading achievement ${folder}:`, error)
      }
    }
  } catch (error) {
    console.error('Error loading achievements:', error)
  }
  
  return achievements
}

const parseDescriptionFile = (text) => {
  const data = {}
  
  text.split('\n').forEach((line) => {
    const [key, ...valueParts] = line.split(':')
    const value = valueParts.join(':').trim()
    
    data[key.toLowerCase()] = value
  })
  
  return data
}

const getAchievementImage = async (folder) => {
  // Try to load thumbnail first
  const thumbnailFormats = ['thumbnail.png', 'thumbnail.jpg', 'thumbnail.jpeg']
  
  for (const format of thumbnailFormats) {
    try {
      const response = await fetch(`/achievements/${folder}/${format}`)
      if (response.ok) {
        return `/achievements/${folder}/${format}`
      }
    } catch (e) {
      continue
    }
  }
  
  // Fallback: try to find any image in the folder
  const imageFormats = ['images/certificate.png', 'images/photo.png', 'certificate.png']
  
  for (const format of imageFormats) {
    try {
      const response = await fetch(`/achievements/${folder}/${format}`)
      if (response.ok) {
        return `/achievements/${folder}/${format}`
      }
    } catch (e) {
      continue
    }
  }
  
  // Default placeholder
  return 'https://images.unsplash.com/photo-1557683311-eac922347aa1?w=800&h=600&fit=crop'
}

