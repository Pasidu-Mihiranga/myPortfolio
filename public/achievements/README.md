# Achievements Directory

## How to Add a New Achievement

1. Create a new folder inside `public/achievements/` with an achievement name (e.g., `hackathon-winner`)
2. Add the following files to your achievement folder:

### Required Files:
- `description.txt` - Achievement description (format below)
- `images/` folder - Achievement images/certificates
- `thumbnail.png` or `thumbnail.jpg` - Main achievement image (optional, will use first image if not provided)

### description.txt Format:
```
TITLE:Your Achievement Title
DESCRIPTION:Details about your achievement
DATE:2024
ORGANIZATION:University/Company Name
```

### Example Structure:
```
public/
  achievements/
    my-achievement/
      description.txt
      images/
        certificate.png
        photo.jpg
      thumbnail.png
```

## Notes:
- Use simple folder names (lowercase, no spaces)
- First image in the folder will be used as thumbnail
- The portfolio will automatically display new achievements when you add folders

