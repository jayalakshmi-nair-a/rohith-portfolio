# Rohith Nair — Professional AI/ML Engineer Portfolio Website

A modern, responsive, high-performance personal portfolio website built for **Rohith Nair**, an aspiring Artificial Intelligence and Machine Learning Engineer.

## 🌟 Live Preview & Tech Stack

- **Framework**: React 18 & Vite
- **Styling**: Tailwind CSS with custom glassmorphism utilities & glowing gradients
- **Animations**: Framer Motion & Interactive Canvas Synaptic Particles
- **Icons**: Lucide React
- **Document Generation**: PDFKit (for genuine, vector-rendered downloadable resume)

---

## 🎨 Theme & Design Philosophy

- **Color Palette**: Dark charcoal / obsidian background (`#06070B`), accented with Electric Blue (`#3B82F6`), Neon Cyan (`#06B6D4`), and subtle Cyber Purple (`#8B5CF6`).
- **Interactive Visual Elements**:
  - Live AI Terminal & Tensor Inference HUD with real-time switching between Neural Weights, Inference Pipeline, and System Metrics.
  - Interactive Canvas Particles representing neural nodes and synaptic connections with mouse-proximity physics.
  - Dynamic Cybersecurity HUD for the *LLM-Based Phishing Email Detector*.
  - Spatiotemporal Smart City Node Mesh for *PROJECTSYNERGIA*.
  - Full client-side validated contact form with real-time error handling and delivery feedback.

---

## 📂 Project Architecture

```
├── public/
│   ├── Rohith_Nair_Resume.pdf       # Compiled genuine PDF resume
│   └── ...
├── src/
│   ├── components/
│   │   ├── Navbar.jsx               # Floating glass header with active section spy & scroll meter
│   │   ├── Hero.jsx                 # Hero section with role, CTAs, and interactive AI terminal
│   │   ├── About.jsx                # Academic & engineering mission with 5 core pillars
│   │   ├── Skills.jsx               # Categorized cards with quick search & category filters
│   │   ├── Projects.jsx             # Featured projects with HUD graphics & architecture modal
│   │   ├── ProjectIllustrations.jsx # SVG/CSS cybersecurity and smart city illustrations
│   │   ├── ProjectModal.jsx         # Pipeline architecture & detailed breakdown modal
│   │   ├── Education.jsx            # Chronological academic timeline with CGPA & scores
│   │   ├── Certifications.jsx       # 6 verified industry & institutional credentials
│   │   ├── Achievements.jsx         # 4 resume-listed metrics & performance indicators
│   │   ├── Languages.jsx            # English & Malayalam proficiency gauges
│   │   ├── Contact.jsx              # Direct contact details, copy buttons & validated form
│   │   ├── Footer.jsx               # Brand mark, quick links, status indicator & socials
│   │   └── NeuralBackground.jsx     # Interactive canvas particle network
│   ├── data/
│   │   └── portfolioData.js         # Centralized, strictly verified personal portfolio data
│   ├── App.jsx                      # Root application layout
│   ├── index.css                    # Tailwind CSS directives & glassmorphic utility classes
│   └── main.jsx                     # Application bootstrap
├── scripts/
│   └── generate-resume.js           # Automated vector PDF resume generator
├── package.json
├── tailwind.config.js
└── vite.config.js
```

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production
```bash
npm run build
```

### 4. Preview Production Build
```bash
npm run preview
```

---

## 📄 Verified Portfolio Data Highlights

- **Hero Role**: Aspiring AI/ML Engineer | Generative AI Enthusiast | Developer
- **Degree**: B.E. in Artificial Intelligence and Machine Learning, Yenepoya Institute of Technology, Mangalore (2023–2027) — CGPA: 6.5
- **High School**: Govt. Higher Secondary School, Pathanamthitta (2021–2023) — 79%
- **Certifications**:
  1. Microsoft Certified: Azure Fundamentals (AZ-900) – Top 10% of class
  2. Python & Git Training – IIT Bombay Spoken Tutorial
  3. R Programming Training – IIT Bombay Spoken Tutorial
  4. Java Training – IIT Bombay Spoken Tutorial
  5. Natural Language Processing & Text Mining – Simplilearn
  6. Introduction to MongoDB – MongoDB University
- **Achievements**:
  - Real-time AI Implementation – Reported 35% reduction in urban risk response time
  - Phishing Email Detection – Reported 90% accuracy against phishing
  - High School Success – Achieved 79% in Class XII board examinations
  - Azure Certification Excellence – Resume-listed top 10% of class
- **Languages**: English (Advanced), Malayalam (Advanced)

