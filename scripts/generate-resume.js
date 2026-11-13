import fs from 'fs';
import path from 'path';
import PDFDocument from 'pdfkit';

// Ensure public dir exists
const publicDir = path.resolve('public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const outputPath = path.join(publicDir, 'Rohith_Nair_Resume.pdf');
const doc = new PDFDocument({
  margin: 36,
  size: 'A4',
  info: {
    Title: 'Rohith Nair - Resume',
    Author: 'Rohith Nair',
    Subject: 'Artificial Intelligence & Machine Learning Engineer Resume',
    Keywords: 'AI, ML, Machine Learning, Python, LLMs, NLP, Data Science',
  }
});

const stream = fs.createWriteStream(outputPath);
doc.pipe(stream);

// Styling constants
const primaryColor = '#0F172A'; // Deep Slate
const accentColor = '#0284C7';  // Electric Blue/Cyan
const secondaryColor = '#334155';
const lightText = '#64748B';
const borderColor = '#E2E8F0';

// Header
doc.fillColor(primaryColor).fontSize(22).font('Helvetica-Bold').text('ROHITH NAIR', { characterSpacing: 1 });
doc.fontSize(10.5).font('Helvetica-Bold').fillColor(accentColor).text('ASPIRING ARTIFICIAL INTELLIGENCE & MACHINE LEARNING ENGINEER', { characterSpacing: 0.5 });
doc.moveDown(0.3);

// Contact Info Bar
doc.fontSize(8.5).font('Helvetica').fillColor(lightText);
doc.text('Konni, Pathanamthitta, Kerala, India   •   +91 8075823144   •   rohithchikku5@gmail.com');
doc.text('LinkedIn: linkedin.com/in/rohith-r8075823144   •   GitHub: github.com/roht');
doc.moveDown(0.6);

// Divider line
doc.strokeColor(borderColor).lineWidth(1).moveTo(36, doc.y).lineTo(559, doc.y).stroke();
doc.moveDown(0.6);

function renderSectionHeader(title) {
  doc.moveDown(0.4);
  doc.fontSize(11).font('Helvetica-Bold').fillColor(accentColor).text(title.toUpperCase(), { characterSpacing: 0.8 });
  doc.strokeColor(accentColor).lineWidth(1.2).moveTo(36, doc.y + 2).lineTo(130, doc.y + 2).stroke();
  doc.moveDown(0.5);
}

// Summary
renderSectionHeader('Professional Summary');
doc.fontSize(9).font('Helvetica').fillColor(secondaryColor).lineGap(2.5).text(
  'Passionate about building intelligent systems using Artificial Intelligence, Machine Learning and Generative AI. I enjoy transforming ideas into practical technology solutions and exploring innovative approaches to real-world problems. Experienced in Python, machine learning workflows, NLP, transformers, and data-driven systems.'
);

// Education
renderSectionHeader('Education');
// Degree
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('Bachelor of Engineering – Artificial Intelligence & Machine Learning');
doc.fontSize(8.5).font('Helvetica').fillColor(lightText).text('Yenepoya Institute of Technology, Mangalore  |  2023 – 2027  |  CGPA: 6.5');
doc.moveDown(0.4);
// School
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('Higher Secondary Education (Class XII)');
doc.fontSize(8.5).font('Helvetica').fillColor(lightText).text('Government Higher Secondary School, Pathanamthitta  |  2021 – 2023  |  Percentage: 79%');

// Technical Skills
renderSectionHeader('Technical Skills');
const skills = [
  { category: 'Programming Languages', items: 'Python, R, Julia, C, C++' },
  { category: 'AI & Machine Learning', items: 'Machine Learning, scikit-learn, Random Forest, Transformers, Hugging Face' },
  { category: 'Data Science', items: 'Pandas, NumPy, Matplotlib, Seaborn' },
  { category: 'Web & Mobile Development', items: 'HTML, CSS, JavaScript, Flutter, Firebase, Basic Full-stack Integration' },
  { category: 'Databases', items: 'MongoDB, MySQL' },
  { category: 'Tools & Platforms', items: 'VS Code, Jupyter Notebook, Google Colab, Tableau, Git, GitHub' },
  { category: 'Core Concepts', items: 'Data Structures, OOP, DBMS, NLP, ML Model Evaluation' },
];

skills.forEach(skill => {
  doc.fontSize(8.5).font('Helvetica-Bold').fillColor(primaryColor).text(`•  ${skill.category}: `, { continued: true });
  doc.font('Helvetica').fillColor(secondaryColor).text(skill.items);
});

// Projects
renderSectionHeader('Key Projects');
// Project 1
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('LLM-Based Phishing Email Detector with Adversarial Robustness');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(accentColor).text('Python, Machine Learning, NLP, LLMs, Transformers');
doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor).lineGap(1.5).text(
  'Developing an LLM-based intelligent system to detect phishing emails. The project focuses on adversarial robustness to improve model reliability against manipulated or evasive inputs. Reported 90% accuracy against phishing attempts.'
);
doc.moveDown(0.4);

// Project 2
doc.fontSize(9.5).font('Helvetica-Bold').fillColor(primaryColor).text('PROJECTSYNERGIA – Real-time Multi-modal AI System for Urban Resilience');
doc.fontSize(8.5).font('Helvetica-Oblique').fillColor(accentColor).text('Python, Multimodal AI, Real-time Analysis, Computer Vision, Urban Data Systems');
doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor).lineGap(1.5).text(
  'A proposed real-time multimodal AI system aimed at supporting proactive urban resilience. Combines multimodal data and AI-driven analysis for timely identification of urban risks and response support. Reported 35% reduction in urban risk response time.'
);

// Certifications
renderSectionHeader('Certifications');
const certs = [
  'Microsoft Certified: Azure Fundamentals (AZ-900) – Microsoft (Top 10% of class)',
  'Python & Git Training – IIT Bombay Spoken Tutorial',
  'R Programming Training – IIT Bombay Spoken Tutorial',
  'Java Training – IIT Bombay Spoken Tutorial',
  'Natural Language Processing & Text Mining – Simplilearn',
  'Introduction to MongoDB – MongoDB University',
];
certs.forEach(cert => {
  doc.fontSize(8.5).font('Helvetica').fillColor(secondaryColor).text(`•  ${cert}`);
});

// Achievements & Languages side-by-side or stacked
renderSectionHeader('Achievements & Languages');
doc.fontSize(8.5).font('Helvetica-Bold').fillColor(primaryColor).text('Achievements:');
doc.font('Helvetica').fillColor(secondaryColor).text('•  Real-time AI Implementation: Reported 35% reduction in urban risk response time.');
doc.text('•  Phishing Email Detection: Reported 90% accuracy against phishing attacks.');
doc.text('•  Azure Certification Excellence: Ranked in top 10% of class in Azure Fundamentals.');
doc.text('•  Academic Performance: Achieved 79% in Class XII Board Examinations.');

doc.moveDown(0.3);
doc.fontSize(8.5).font('Helvetica-Bold').fillColor(primaryColor).text('Languages:');
doc.font('Helvetica').fillColor(secondaryColor).text('•  English (Advanced)   •   Malayalam (Advanced)');

doc.end();

stream.on('finish', () => {
  console.log('Resume PDF generated successfully at:', outputPath);
});

