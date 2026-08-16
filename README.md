# Professional Portfolio Template

A stunning, responsive, and easily customizable personal portfolio website template. Built with a premium dark-mode aesthetic, glowing background blobs, smooth scrolling, and dynamic animations to showcase your projects, skills, and experience beautifully.

👉 **[View Live Demo](https://TharuAmaya.github.io/portfolio-template/)** 👈

## ✨ Features

- **Modern & Premium Design**: Custom dark theme with beautiful gradients and glassmorphism elements.
- **Fully Responsive**: Looks perfect on mobile phones, tablets, and desktop screens.
- **Performance Optimized**: Built with Vanilla JS, HTML, and CSS using Vite for incredibly fast load times.
- **Smooth Animations**: Intersection Observer based fade-in-up animations and a dynamic shrinking navbar.
- **Interactive Contact Form**: Ready-to-use form layout for visitors to get in touch.
- **Downloadable CV**: Easy configuration to allow visitors to download your resume directly.

## 🛠️ Tech Stack

- **HTML5** for semantic structure
- **CSS3** (Vanilla) with CSS Variables for easy theme customization
- **JavaScript** (ES6+) for interactivity and animations
- **Vite** for fast, modern frontend build tooling
- **GitHub Pages** for seamless deployment

## 🚀 Local Development

To run this project locally on your machine, follow these steps:

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your machine.

### Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/TharuAmaya/portfolio-template.git
   cd portfolio-template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the local development server**
   ```bash
   npm run dev
   ```

4. **View in Browser**
   Open `http://localhost:5173/portfolio-template/` in your browser. The page will automatically reload if you make changes to the code.

## 🎨 How to Customize

You can easily adapt this template for your own use!

1. **Update Content**: Open `index.html` and replace the placeholder text with your own name, about me, and project details.
2. **Change Assets**:
   - Replace `public/assets/profile.jpg` with your own profile picture.
   - Replace `public/assets/cv.pdf` with your own resume.
3. **Customize Colors**: Open `src/style.css` and modify the CSS variables under `:root` to change the entire color scheme instantly:
   ```css
   :root {
     --bg-color: #0b0f19;
     --accent-color: #38bdf8;
     /* ... */
   }
   ```

## 📦 Deployment

This project is configured to be deployed easily to GitHub Pages.

1. In `package.json`, ensure the `"homepage"` field matches your GitHub Pages URL.
2. In `vite.config.js`, ensure the `base` matches your repository name (e.g., `/portfolio-template/`).
3. Run the deploy command:
   ```bash
   npm run deploy
   ```
   This command will automatically build the project into the `dist` directory and push it to the `gh-pages` branch.

---

Designed and developed by [S.G.T. Amaya](https://github.com/TharuAmaya).
