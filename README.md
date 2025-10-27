# Portfolio Website

A modern, responsive portfolio website built with React, Vite, Tailwind CSS, and DaisyUI.

## Features

- 🌓 Dark/Light theme toggle (Synthwave/Emerald themes)
- 📱 Fully responsive design
- 🎨 Modern UI with smooth animations
- ⚡ Fast and optimized with Vite
- 🎯 Multiple sections: Hero, Achievements, Projects, About, Contact
- 🔄 Smooth scroll navigation

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
.
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx      # Navigation and theme toggle
│   │   ├── Hero.jsx        # Main hero section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── About.jsx       # About section with skills
│   │   ├── Achievements.jsx # Achievements timeline
│   │   └── Contact.jsx     # Contact form and info
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   ├── main.css            # Global styles
│   └── utils/              # Utility functions
├── index.html
├── package.json
├── tailwind.config.js      # Tailwind and DaisyUI configuration
├── vite.config.js
└── README.md
```

## Customization

### Theme Colors

The portfolio uses two custom DaisyUI themes defined in `tailwind.config.js`:
- **Synthwave**: Dark theme (default)
- **Emerald**: Light theme

### Updating Content

- **Personal Information**: Edit `src/components/Hero.jsx`
- **Projects**: Add/modify projects in `public/projects.json`
- **Skills**: Update the skills array in `src/components/About.jsx`
- **Achievements**: Add/modify achievements in `public/achievements.json`
- **Contact Info**: Update contact information in `src/components/Contact.jsx`

### Colors

Custom colors are defined in `tailwind.config.js`:
- `custom-black`: #000000
- `custom-light-gray`: #A6BBCC
- `custom-off-white`: #F8F7F9
- `custom-white`: #FFFFFF

## Technologies Used

- **React** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **DaisyUI** - Component library for Tailwind CSS
- **Google Fonts** - Poppins and Inter fonts

## License

This project is open source and available under the MIT License.

## Contact

Created by Pasindu Mihiranga
