# Image Upload Guide

## Folder Structure for Images

Upload your images to the following folders based on which page they will appear on:

### 📁 `public/images/home/`
Upload images for the Home/Landing page here.
- **Profile Photo**: Save as `profile-photo.jpg` (or .png)

### 📁 `public/images/achievements/`
Upload images for the Achievements page here.
- Achievement certificates
- Award photos
- Recognition documents
- etc.

### 📁 `public/images/projects/`
Upload images for your Projects page here.
- Project screenshots
- Project demo images
- Application interfaces
- etc.

### 📁 `public/images/about/`
Upload images for the About page here.
- Additional photos
- Working environment
- Team photos
- etc.

### 📁 `public/images/contacts/`
Upload images for the Contact page here.
- Location images
- Office photos
- Contact-related images
- etc.

## How to Use in Your Components

When you want to reference an image in your code, use:

```jsx
// For an image in the home folder:
<img src="/images/home/your-image.jpg" alt="Description" />

// For an image in projects folder:
<img src="/images/projects/project-screenshot.png" alt="Project" />
```

## Supported Formats
- `.jpg` / `.jpeg`
- `.png`
- `.webp`
- `.gif`

## File Naming Tips
- Use lowercase letters
- Use hyphens instead of spaces (e.g., `my-image.jpg`)
- Keep names descriptive but short
- Avoid special characters

## After Uploading
1. Save your images in the appropriate folders
2. Restart your development server
3. Refresh your browser to see the changes

