# 🚀 Portfolio Template - Ngoding Cuy

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/Vyannnnnn/portfolio-cuy)

Sebuah template portfolio modern untuk developer dengan desain terminal-themed, animasi yang menarik, dan responsif di semua perangkat.

## 🎯 Demo

[Live Demo](https://your-demo-link.com) | [Video Tutorial](https://your-video-link.com)

## ✨ Fitur Utama

- 🎨 **Desain Modern**: Terminal interface dengan tema programmer
- 📱 **Fully Responsive**: Optimized untuk desktop, tablet, dan mobile
- ⚡ **Performance**: Loading cepat dengan optimisasi CSS dan JS
- 🎭 **Animasi Smooth**: Intersection Observer dan CSS animations
- 🛠 **Easy Customization**: Struktur code yang rapi dan mudah dimodifikasi
- 📊 **Interactive Elements**: Testimonial slider, skill tabs, smooth scrolling
- 🌙 **Modern UI/UX**: Glassmorphism effects dan micro-interactions

## 🛠 Teknologi yang Digunakan

- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, Custom Properties, Animations
- **JavaScript ES6+**: Modular architecture, DOM manipulation
- **Font Awesome**: Icons
- **Google Fonts**: Inter typography

## 📦 Quick Start

### 1. Download Template

```bash
git clone https://github.com/Vyannnnnn/portfolio-cuy.git
cd portfolio-cuy
```

### 2. Buka di Browser

```bash
# Buka index.html di browser atau gunakan Live Server
# Recommended: VS Code Live Server extension
```

### 3. Mulai Customize!

Edit file sesuai kebutuhan Anda.

## 📁 Struktur File

```
portfolio-cuy/
├── index.html              # Main HTML file
├── styles.css              # Main CSS dengan responsive design
├── enhanced-script.js      # Main JavaScript functionality
├── mobile-menu.js          # Mobile hamburger menu handler
├── testimonial-slider.js   # Testimonial carousel functionality
└── README.md              # Documentation (file ini)
```

## 🎨 Panduan Customization

### 1. Informasi Personal

#### Edit Hero Section

**File: `index.html` (line 74-95)**

```html
<!-- Ganti terminal output -->
<div class="terminal-output typing-animation">NAMA ANDA</div>

<!-- Ganti skills di terminal -->
<div class="terminal-output skills-output">
  <span>Skill 1</span>
  <span>Skill 2</span>
  <span>Skill 3</span>
</div>
```

**File: `index.html` (line 97-108)**

```html
<!-- Edit object developer -->
<span class="title-line name-line"> name: "<span class="highlight typewriter" data-text="Nama Anda">Nama Anda</span>",</span>
<span class="title-line"> role: "<span class="highlight typewriter" data-text="Job Title Anda">Job Title Anda</span>",</span>
<span class="title-line"> experience: "<span class="highlight typewriter" data-text="X+ years">X+ years</span>",</span>
```

#### Edit Statistics

**File: `index.html` (line 120-135)**

```html
<div class="stat-item">
  <div class="stat-number" data-target="100">0</div>
  <!-- Ganti angka target -->
  <div class="stat-label">Projects Completed</div>
  <!-- Ganti label -->
</div>
```

### 2. Warna dan Tema

#### Primary Colors

**File: `styles.css` (line 1-20)**

```css
:root {
  --primary-color: #64ffda; /* Cyan/Teal - ganti sesuai brand */
  --secondary-color: #ff6b9d; /* Pink - untuk accent */
  --accent-color: #ffd93d; /* Yellow - untuk highlights */
  --bg-primary: #0a0a0f; /* Dark blue - background utama */
  --bg-secondary: #1a1a2e; /* Darker blue - background secondary */
  --text-primary: #ffffff; /* White - text utama */
  --text-secondary: #a0a0a0; /* Gray - text secondary */
}
```

#### Background Patterns

**File: `styles.css` - cari `.hero-background`**

```css
.hero-background::before {
  background: linear-gradient(45deg, var(--primary-color) 20, var(--secondary-color) 20); /* Edit gradient */
}
```

### 3. Content Sections

#### Edit Skills/Expertise

**File: `index.html` - section `#expertise`**

```html
<!-- Tambah/edit skill categories -->
<div class="skill-category" data-category="nama-category">
  <div class="category-icon">
    <i class="fas fa-icon-name"></i>
    <!-- Ganti icon -->
  </div>
  <span>Nama Category</span>
</div>

<!-- Edit skill items -->
<div class="skill-item">
  <div class="skill-icon">
    <i class="fab fa-skill-icon"></i>
  </div>
  <div class="skill-info">
    <h4>Nama Skill</h4>
    <div class="skill-bar"></div>
    <span class="skill-percentage">85%</span>
    <!-- Ganti persentase -->
  </div>
</div>
```

#### Edit Work/Projects

**File: `index.html` - section `#work`**

```html
<!-- Tambah project cards -->
<div class="project-card">
  <div class="project-image">
    <img src="path/to/image.jpg" alt="Project Name" />
  </div>
  <div class="project-content">
    <h3>Project Title</h3>
    <p>Project description...</p>
    <div class="project-tech">
      <span>React</span>
      <span>Node.js</span>
    </div>
    <div class="project-links">
      <a href="#" class="btn-primary">Live Demo</a>
      <a href="#" class="btn-secondary">Source Code</a>
    </div>
  </div>
</div>
```

#### Edit Testimonials

**File: `testimonial-slider.js`**

```javascript
const testimonials = [
  {
    text: "Quote testimonial...",
    author: "Nama Client",
    position: "Job Title",
    company: "Company Name",
    rating: 5,
  },
  // Tambah testimonial lainnya
];
```

### 4. Animasi dan Interaksi

#### Customize Loading Animation

**File: `styles.css` - cari `.page-loader`**

```css
.loader-spinner {
  border-color: var(--primary-color); /* Ganti warna */
  animation-duration: 1s; /* Ganti speed */
}
```

#### Edit Typing Animation Speed

**File: `enhanced-script.js` - cari `typeWriter function`**

```javascript
function typeWriter(element, text, speed = 100) {
  // Ganti speed (ms)
  // ... existing code
}
```

#### Customize Scroll Animations

**File: `enhanced-script.js` - cari `Intersection Observer`**

```javascript
const observerOptions = {
  threshold: 0.1, // Kapan animasi trigger (0.1 = 10% visible)
  rootMargin: "0px", // Margin tambahan
};
```

### 5. Responsive Breakpoints

#### Mobile (480px dan kebawah)

**File: `styles.css` - cari `@media (max-width: 480px)`**

```css
@media (max-width: 480px) {
  .hero-title {
    font-size: 1.5rem;
  } /* Adjust font sizes */
  .container {
    padding: 0 15px;
  } /* Adjust spacing */
}
```

#### Tablet (768px dan kebawah)

**File: `styles.css` - cari `@media (max-width: 768px)`**

```css
@media (max-width: 768px) {
  .skills-grid {
    grid-template-columns: 1fr;
  } /* Single column */
}
```

### 6. SEO dan Meta Tags

#### Edit Meta Information

**File: `index.html` (line 1-10)**

```html
<title>Nama Anda - Job Title | Portfolio</title>
<meta name="description" content="Deskripsi singkat tentang Anda" />
<meta name="keywords" content="developer, portfolio, web development" />
<meta name="author" content="Nama Anda" />
<meta property="og:title" content="Nama Anda - Portfolio" />
<meta property="og:description" content="Deskripsi untuk social media" />
<meta property="og:image" content="link-to-preview-image.jpg" />
```

### 7. Performance Optimization

#### Image Optimization

```html
<!-- Gunakan format modern -->
<img src="image.webp" alt="Description" loading="lazy" />

<!-- Atau dengan fallback -->
<picture>
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" loading="lazy" />
</picture>
```

#### CSS Optimization

```css
/* Gunakan CSS custom properties untuk konsistensi */
:root {
  --spacing-sm: 0.5rem;
  --spacing-md: 1rem;
  --spacing-lg: 2rem;
}

/* Minimize repaints */
.animated-element {
  will-change: transform;
  transform: translateZ(0);
}
```

## 🎯 Advanced Customization

### 1. Menambah Section Baru

#### Step 1: HTML Structure

```html
<section id="new-section" class="new-section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">New Section</h2>
    </div>
    <div class="section-content">
      <!-- Content here -->
    </div>
  </div>
</section>
```

#### Step 2: CSS Styling

```css
.new-section {
  padding: 5rem 0;
  background: var(--bg-secondary);
}

.new-section .section-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}
```

#### Step 3: JavaScript Functionality

```javascript
// Add to enhanced-script.js
document.addEventListener("DOMContentLoaded", function () {
  // Your new section functionality
});
```

### 2. Custom Animations

#### CSS Keyframes

```css
@keyframes customAnimation {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.custom-element {
  animation: customAnimation 0.8s ease-out;
}
```

#### JavaScript Scroll Animations

```javascript
const observeElements = document.querySelectorAll(".animate-on-scroll");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animated");
    }
  });
});

observeElements.forEach((el) => observer.observe(el));
```

### 3. Dark/Light Mode Toggle

#### CSS Setup

```css
[data-theme="light"] {
  --bg-primary: #ffffff;
  --text-primary: #000000;
  /* Override other variables */
}

.theme-toggle {
  background: none;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  padding: 0.5rem 1rem;
  border-radius: 5px;
  cursor: pointer;
}
```

#### JavaScript Implementation

```javascript
const themeToggle = document.querySelector(".theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  const currentTheme = body.getAttribute("data-theme");
  const newTheme = currentTheme === "light" ? "dark" : "light";

  body.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
body.setAttribute("data-theme", savedTheme);
```

## 🚀 Deployment Guide

### 1. GitHub Pages

```bash
# Push ke GitHub repository
git add .
git commit -m "Portfolio website"
git push origin main

# Enable GitHub Pages di repository settings
# Pilih source: Deploy from branch
# Branch: main, folder: / (root)
```

### 2. Netlify

```bash
# Drag & drop folder ke netlify.com
# Atau connect GitHub repository
# Auto-deploy setiap push ke main branch
```

### 3. Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy dari terminal
vercel

# Atau import dari GitHub di vercel.com
```

### 4. Custom Domain

```html
<!-- Tambah CNAME record di DNS provider -->
<!-- Contoh: CNAME www your-app.netlify.app -->

<!-- Update meta tags dengan domain baru -->
<link rel="canonical" href="https://yourdomain.com" />
```

## 🐛 Troubleshooting

### Common Issues

#### 1. Animasi Tidak Muncul

```javascript
// Check JavaScript console untuk errors
// Pastikan Intersection Observer supported
if ("IntersectionObserver" in window) {
  // Your animation code
} else {
  // Fallback untuk browser lama
  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    el.classList.add("animated");
  });
}
```

#### 2. Mobile Menu Tidak Berfungsi

```javascript
// Check event listeners
console.log("Mobile menu loaded"); // Debug line

// Pastikan DOM loaded
document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu code here
});
```

#### 3. Images Tidak Load

```html
<!-- Check path relatif -->
<img src="./images/photo.jpg" alt="Photo" />

<!-- Atau gunakan absolute path -->
<img src="/images/photo.jpg" alt="Photo" />
```

#### 4. CSS Tidak Apply

```html
<!-- Check CSS link -->
<link rel="stylesheet" href="./styles.css" />

<!-- Clear browser cache -->
<!-- Ctrl + F5 (Windows) atau Cmd + Shift + R (Mac) -->
```

### Performance Issues

#### 1. Slow Loading

```html
<!-- Optimize images -->
<img src="image.webp" alt="Description" loading="lazy" width="300" height="200" />

<!-- Minify CSS dan JS untuk production -->
```

#### 2. Animation Lag

```css
/* Use transform instead of changing layout properties */
.element {
  transform: translateX(100px); /* Good */
  /* left: 100px; /* Avoid */
}

/* Add will-change untuk heavy animations */
.heavy-animation {
  will-change: transform;
}
```

## 📱 Browser Support

- ✅ Chrome 70+
- ✅ Firefox 65+
- ✅ Safari 12+
- ✅ Edge 79+
- ⚠️ IE 11 (limited support)

## 📄 License

MIT License - bebas digunakan untuk personal dan komersial.


## 💡 Tips & Best Practices

### 1. Code Organization

```css
/* Group related styles together */
/* === HERO SECTION === */
.hero {
  /* styles */
}
.hero-content {
  /* styles */
}
.hero-title {
  /* styles */
}

/* === COMPONENTS === */
.btn {
  /* base button styles */
}
.btn-primary {
  /* primary button variant */
}
.btn-secondary {
  /* secondary button variant */
}
```

### 2. Naming Conventions

```css
/* Use BEM methodology */
.card {
  /* Block */
}
.card__title {
  /* Element */
}
.card--featured {
  /* Modifier */
}

/* Or use descriptive names */
.project-card {
}
.project-card-title {
}
.project-card-featured {
}
```

### 3. Responsive Design

```css
/* Mobile-first approach */
.element {
  /* Mobile styles first */
  font-size: 1rem;
}

@media (min-width: 768px) {
  .element {
    /* Tablet styles */
    font-size: 1.2rem;
  }
}

@media (min-width: 1024px) {
  .element {
    /* Desktop styles */
    font-size: 1.5rem;
  }
}
```

### 4. Accessibility

```html
<!-- Use semantic HTML -->
<nav aria-label="Main navigation">
  <ul role="list">
    <li><a href="#home" aria-current="page">Home</a></li>
  </ul>
</nav>

<!-- Add alt text untuk images -->
<img src="profile.jpg" alt="John Doe, Software Developer" />

<!-- Use proper heading hierarchy -->
<h1>Main Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
```

## 📞 Support

Jika Anda mengalami kesulitan atau memiliki pertanyaan:

1. 📖 Baca dokumentasi ini kembali

## 🔄 Updates & Changelog

### Version 1.0.0 (Current)

- ✨ Initial release
- 📱 Full responsive design
- 🎨 Terminal-themed UI
- ⚡ Smooth animations
- 🛠 Modular JavaScript architecture

### Planned Features

- 🌙 Dark/Light mode toggle
- 🌐 Multi-language support
- 📊 Analytics integration
- 🎵 Sound effects (optional)
- 📈 Performance monitoring

---

## 🎉 Ready to Customize?

Sekarang Anda memiliki semua informasi yang dibutuhkan untuk mengcustomize template ini sesuai kebutuhan Anda. Happy coding! 🚀

**⭐ Jangan lupa star repository ini jika helpful!**

---

_Template ini dibuat dengan ❤️ oleh [Ngoding Cuy](https://github.com/Vyannnnnn)_

## Credits

- Icons: Font Awesome
- Fonts: Google Fonts (Inter)
