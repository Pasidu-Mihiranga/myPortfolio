# Projects Directory

## How to Add a New Project

1. Create a new folder inside `public/projects/` with a project name (e.g., `e-commerce-app`)
2. Add the following files to your project folder:

### Required Files:
- `description.txt` - Project description (format below)
- `images/` folder - Project screenshots/images
- `thumbnail.png` or `thumbnail.jpg` - Main project image (optional, will use first image if not provided)

### description.txt Format:
```
TITLE:Your Project Title
DESCRIPTION:A brief description of your project
TECH:React,Node.js,MongoDB,Express
LINK:https://github.com/yourusername/project-name
```

### Example Structure:
```
public/
  projects/
    my-first-project/
      description.txt
      images/
        screenshot1.png
        screenshot2.png
      thumbnail.png
```

## Notes:
- Use simple folder names (lowercase, no spaces)
- First image in the folder will be used as thumbnail
- Separate multiple tech stacks with commas
- Add your project GitHub/website link in the LINK field

