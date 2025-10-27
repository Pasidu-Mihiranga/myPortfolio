# How to Add Projects and Achievements

## 📝 Simple JSON System

Edit the JSON files to add projects and achievements - super easy!

---

## 🎯 Adding a New Project

Open `public/projects.json` and add your project:

```json
{
  "title": "My Awesome Project",
  "description": "A full-stack web application built with React and Node.js",
  "tech": ["React", "Node.js", "MongoDB", "Express"],
  "image": "/images/projects/my-project.png",
  "link": "https://github.com/yourusername/project"
}
```

**That's it!** Save the file and refresh your browser.

---

## 🏆 Adding a New Achievement

Open `public/achievements.json` and add your achievement:

```json
{
  "title": "Hackathon Winner",
  "institution": "Tech Startup Challenge",
  "year": "2024",
  "description": "Led team to build innovative solution in 48 hours",
  "image": "/images/achievements/certificate.png",
  "position": 1
}
```

**Position Values:**
- `"position": 1` - Shows CHAMPIONS badge with trophy
- `"position": 2` - Shows 2ND PLACE with medal  
- `"position": 3` - Shows 3RD PLACE with medal
- `"position": 4+` - Shows ranking (e.g., 6TH PLACE) with award icon

**That's it!** Save the file and refresh your browser.

---

## 📂 Adding Images

1. Upload images to `public/images/projects/` or `public/images/achievements/`
2. Reference them in your JSON like: `"/images/projects/my-image.png"`
3. Or use external URLs like: `"https://your-image-host.com/image.jpg"`

---

## ✨ Complete Example

**public/projects.json:**
```json
[
  {
    "title": "E-Commerce Platform",
    "description": "Full-stack web application with React and Node.js",
    "tech": ["React", "Node.js", "MongoDB", "Express"],
    "image": "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=800&h=600&fit=crop",
    "link": "https://github.com/user/ecommerce"
  },
  {
    "title": "Task Management App",
    "description": "Collaborative task management with real-time updates",
    "tech": ["React", "Firebase", "Material-UI"],
    "image": "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop",
    "link": "https://github.com/user/taskmanager"
  }
]
```

**public/achievements.json:**
```json
[
  {
    "title": "Dean's List",
    "institution": "University of Moratuwa",
    "year": "2023",
    "description": "Recognized for outstanding academic performance"
  },
  {
    "title": "Hackathon Winner",
    "institution": "Tech Startup Challenge",
    "year": "2024",
    "description": "Led team to victory in 48-hour coding competition"
  }
]
```

---

## 🎉 Quick Start

1. Open `public/projects.json` or `public/achievements.json`
2. Add your items in the same format (copy the existing structure)
3. Save the file
4. Refresh your browser
5. Done! 🚀

---

## 📝 Notes

- **No coding required** - Just edit JSON files
- **Instant updates** - Refresh browser to see changes
- **Images** - Upload to `public/images/` folders or use external URLs
- **Version Control** - Track changes with Git
