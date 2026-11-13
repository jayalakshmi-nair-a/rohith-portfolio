export const personalInfo = {
  name: "ROHITH NAIR",
  role: "Aspiring AI/ML Engineer | Generative AI Enthusiast | Developer",
  intro:
    "Passionate about building intelligent systems using Artificial Intelligence, Machine Learning and Generative AI. I enjoy transforming ideas into practical technology solutions and exploring innovative approaches to real-world problems.",
  about:
    "I'm Rohith Nair, an Artificial Intelligence and Machine Learning Engineering student at Yenepoya Institute of Technology. I have a strong interest in Machine Learning, Large Language Models, Natural Language Processing and Generative AI. My goal is to develop practical, reliable and intelligent applications that solve real-world problems.",
  email: "rohithchikku5@gmail.com",
  phone: "+91 8075823144",
  location: "Konni, Pathanamthitta, Kerala, India",
  github: "https://github.com/roht",
  linkedin: "https://www.linkedin.com/in/rohith-r8075823144",
  resumeUrl: "/Rohith_Nair_Resume.pdf",
};

export const aboutHighlights = [
  {
    title: "AI & Machine Learning",
    description: "Developing intelligent algorithms and machine learning models for predictive analytics and automated decision making.",
    icon: "Brain",
    gradient: "from-blue-500/20 via-cyan-500/10 to-transparent",
    accent: "text-cyan-400",
  },
  {
    title: "Generative AI & LLMs",
    description: "Exploring transformer architectures, fine-tuning, prompt design, and domain-specific generative models.",
    icon: "Sparkles",
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
    accent: "text-purple-400",
  },
  {
    title: "Natural Language Processing",
    description: "Text mining, sequence modeling, sentiment analysis, semantic parsing, and adversarial robustness in NLP.",
    icon: "MessageSquareCode",
    gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
    accent: "text-blue-400",
  },
  {
    title: "Software Development",
    description: "Building reliable applications with modern toolchains, clean modular code, responsive interfaces, and backend APIs.",
    icon: "Code2",
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
    accent: "text-emerald-400",
  },
  {
    title: "Problem Solving",
    description: "Translating ambiguous real-world engineering challenges into structured mathematical and algorithmic solutions.",
    icon: "Lightbulb",
    gradient: "from-amber-500/20 via-orange-500/10 to-transparent",
    accent: "text-amber-400",
  },
];

export const skillCategories = [
  {
    category: "Programming Languages",
    icon: "Code",
    badge: "5 Languages",
    skills: [
      { name: "Python", level: "Primary", tag: "AI/ML Core" },
      { name: "R", level: "Proficient", tag: "Stats/Analytics" },
      { name: "Julia", level: "Proficient", tag: "Scientific Computing" },
      { name: "C", level: "Foundational", tag: "Systems" },
      { name: "C++", level: "Foundational", tag: "Data Structures" },
    ],
  },
  {
    category: "AI & Machine Learning",
    icon: "Cpu",
    badge: "Core Specialization",
    skills: [
      { name: "Machine Learning", level: "Advanced", tag: "Supervised/Unsupervised" },
      { name: "scikit-learn", level: "Advanced", tag: "Modeling Pipelines" },
      { name: "Random Forest", level: "Advanced", tag: "Ensemble Learning" },
      { name: "Transformers", level: "Specialist", tag: "Attention Mechanisms" },
      { name: "Hugging Face", level: "Specialist", tag: "Pre-trained Models" },
    ],
  },
  {
    category: "Data Science",
    icon: "BarChart3",
    badge: "Analytics & Viz",
    skills: [
      { name: "Pandas", level: "Advanced", tag: "Data Wrangling" },
      { name: "NumPy", level: "Advanced", tag: "Matrix Operations" },
      { name: "Matplotlib", level: "Proficient", tag: "Visual Plotting" },
      { name: "Seaborn", level: "Proficient", tag: "Statistical Graphics" },
    ],
  },
  {
    category: "Web & Mobile Development",
    icon: "Globe",
    badge: "Full-Stack & App",
    skills: [
      { name: "HTML", level: "Proficient", tag: "Structure" },
      { name: "CSS", level: "Proficient", tag: "Styling" },
      { name: "JavaScript", level: "Proficient", tag: "Frontend Logic" },
      { name: "Flutter", level: "Proficient", tag: "Cross-Platform Mobile" },
      { name: "Firebase", level: "Proficient", tag: "BaaS & Auth" },
      { name: "Basic Full-stack Integration", level: "Applied", tag: "API & Frontend" },
    ],
  },
  {
    category: "Databases",
    icon: "Database",
    badge: "Data Storage",
    skills: [
      { name: "MongoDB", level: "Proficient", tag: "NoSQL Document Store" },
      { name: "MySQL", level: "Proficient", tag: "Relational Schemas" },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: "Terminal",
    badge: "Environment",
    skills: [
      { name: "VS Code", level: "Daily Driver", tag: "IDE" },
      { name: "Jupyter Notebook", level: "Daily Driver", tag: "ML Prototyping" },
      { name: "Google Colab", level: "Daily Driver", tag: "Cloud GPU Acceleration" },
      { name: "Tableau", level: "Proficient", tag: "BI Dashboards" },
      { name: "Git", level: "Proficient", tag: "Version Control" },
      { name: "GitHub", level: "Proficient", tag: "Collaboration & CI" },
    ],
  },
  {
    category: "Core Concepts",
    icon: "BookOpen",
    badge: "Theoretical Foundations",
    skills: [
      { name: "Data Structures", level: "Core", tag: "Algorithms" },
      { name: "OOP", level: "Core", tag: "Design Patterns" },
      { name: "DBMS", level: "Core", tag: "Database Management" },
      { name: "NLP", level: "Specialization", tag: "Computational Linguistics" },
      { name: "ML Model Evaluation", level: "Specialization", tag: "Metrics & Validation" },
    ],
  },
];

export const projects = [
  {
    id: "phishing-detector",
    title: "LLM-Based Phishing Email Detector with Adversarial Robustness",
    shortTitle: "Phishing Email Detector",
    category: "Natural Language Processing / Cybersecurity",
    status: "Under Active Development",
    reportedMetric: "Reported 90% accuracy against phishing",
    description:
      "Developing an LLM-based intelligent system to detect phishing emails. The project focuses on adversarial robustness to improve model reliability against manipulated or evasive inputs.",
    technologies: ["Python", "Machine Learning", "NLP", "LLMs", "Transformers"],
    github: "https://github.com/roht",
    illustrationType: "cybersecurity",
    architectureSteps: [
      "Raw Email Parsing & Header Sanitization",
      "Tokenization with Context-Aware Embeddings",
      "Adversarial Perturbation Defense Layer",
      "Transformer Classifier with Attention Scoring",
      "Robustness Verification & Threat Score Output"
    ],
  },
  {
    id: "project-synergia",
    title: "PROJECTSYNERGIA – A Real-time, Multi-modal AI System for Proactive Urban Resilience",
    shortTitle: "PROJECTSYNERGIA",
    category: "Multimodal AI / Smart City Analytics",
    status: "Proposed System Architecture",
    reportedMetric: "Reported 35% reduction in urban risk response time",
    description:
      "A proposed real-time multimodal AI system aimed at supporting proactive urban resilience. It combines multimodal data and AI-driven analysis for timely identification of urban risks and response support.",
    technologies: ["Python", "Multimodal AI", "Real-time Analysis", "Computer Vision", "Urban Data Systems"],
    github: "https://github.com/roht",
    illustrationType: "smartcity",
    architectureSteps: [
      "Multimodal Sensor Stream Ingestion (IoT, Vision, Weather)",
      "Spatial-Temporal Feature Alignment",
      "Real-time Multimodal Cross-Attention Neural Network",
      "Proactive Anomaly & Risk Event Detection",
      "Automated Early Advisory & Action Routing"
    ],
  },
];

export const educationList = [
  {
    degree: "Bachelor of Engineering – Artificial Intelligence and Machine Learning",
    institution: "Yenepoya Institute of Technology",
    location: "Mangalore, Karnataka, India",
    period: "2023 – 2027",
    status: "In Progress",
    metricLabel: "CGPA",
    metricValue: "6.5",
    focus: [
      "Machine Learning Algorithms",
      "Deep Learning & Transformers",
      "Natural Language Processing",
      "Data Structures & OOP",
      "Database Management Systems",
    ],
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Government Higher Secondary School",
    location: "Pathanamthitta, Kerala, India",
    period: "2021 – 2023",
    status: "Completed",
    metricLabel: "Percentage",
    metricValue: "79%",
    focus: [
      "Physics, Chemistry, Mathematics & Computer Science",
      "Foundational Programming & Logical Thinking",
      "State Board Examination Distinction",
    ],
  },
];

export const certifications = [
  {
    id: 1,
    name: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    highlight: "Top 10% of class",
    icon: "Cloud",
    tag: "Cloud Computing",
    description: "Foundational cloud services, architectural components, Azure security, governance, and compliance.",
  },
  {
    id: 2,
    name: "Python & Git Training",
    issuer: "IIT Bombay Spoken Tutorial",
    highlight: "IIT Bombay Certified",
    icon: "FileCode",
    tag: "Programming & VCS",
    description: "Core Python paradigms, algorithmic workflows, modular design, and Git distributed version control.",
  },
  {
    id: 3,
    name: "R Programming Training",
    issuer: "IIT Bombay Spoken Tutorial",
    highlight: "IIT Bombay Certified",
    icon: "BarChart2",
    tag: "Data Analysis",
    description: "Data manipulation, statistical analysis, data structures, and statistical plotting in R.",
  },
  {
    id: 4,
    name: "Java Training",
    issuer: "IIT Bombay Spoken Tutorial",
    highlight: "IIT Bombay Certified",
    icon: "Coffee",
    tag: "OOP & Systems",
    description: "Object-oriented programming, classes, polymorphism, interfaces, and multi-threaded design.",
  },
  {
    id: 5,
    name: "Natural Language Processing & Text Mining",
    issuer: "Simplilearn",
    highlight: "Specialization",
    icon: "MessageSquare",
    tag: "AI & NLP",
    description: "Text preprocessing, tokenization, sentiment extraction, vector space models, and topic modeling.",
  },
  {
    id: 6,
    name: "Introduction to MongoDB",
    issuer: "MongoDB University",
    highlight: "Certified",
    icon: "Database",
    tag: "NoSQL Databases",
    description: "Document model concepts, CRUD operations, indexing strategies, and aggregation frameworks.",
  },
];

export const achievements = [
  {
    id: 1,
    title: "Real-time AI Implementation",
    metric: "35% Reduction",
    detail: "Reported 35% reduction in urban risk response time.",
    projectRef: "PROJECTSYNERGIA",
    icon: "Clock",
    accent: "from-cyan-500 to-blue-600",
  },
  {
    id: 2,
    title: "Phishing Email Detection",
    metric: "90% Accuracy",
    detail: "Reported 90% accuracy against phishing.",
    projectRef: "LLM Phishing Detector",
    icon: "ShieldCheck",
    accent: "from-blue-500 to-indigo-600",
  },
  {
    id: 3,
    title: "High School Success",
    metric: "79% Score",
    detail: "Achieved 79% in Class XII board examinations.",
    projectRef: "GHSS Pathanamthitta",
    icon: "Award",
    accent: "from-purple-500 to-pink-600",
  },
  {
    id: 4,
    title: "Azure Certification Excellence",
    metric: "Top 10%",
    detail: "Resume-listed top 10% of class.",
    projectRef: "Microsoft AZ-900",
    icon: "TrendingUp",
    accent: "from-emerald-500 to-teal-600",
  },
];

export const languages = [
  {
    name: "English",
    proficiency: "Advanced",
    levelPercentage: 90,
    type: "Professional & Academic Proficiency",
    summary: "Fluent in technical communication, research paper comprehension, documentation, and oral presentations.",
  },
  {
    name: "Malayalam",
    proficiency: "Advanced",
    levelPercentage: 95,
    type: "Native / Bilingual Proficiency",
    summary: "Native language proficiency with complete mastery in spoken, written, and collaborative communication.",
  },
];

