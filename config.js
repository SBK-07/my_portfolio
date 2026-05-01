/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║                                                              ║
 * ║  Edit this file to personalize your entire portfolio.        ║
 * ║  No need to touch HTML, CSS, or JS — everything is          ║
 * ║  driven from this single config.                             ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

const CONFIG = {

  // ─── Personal Info ───────────────────────────────────────────
  name: "Balakumaran S",
  title: "Full Stack & IoT Developer",
  tagline: "Building intelligent software and IoT systems that solve real-world problems.",
  roles: [
    "Full Stack Developer",
    "IoT Enthusiast",
    "ESP32 Developer",
    "AI Enthusiast",
    "AI & ML Learner"
  ],

  about: {
    description: [
      "I am a passionate developer and M.Tech Integrated CSE student with a strong interest in full-stack development, IoT systems, and AI-powered applications.",
      
      "I have worked on projects involving ESP32, Flask, Streamlit, and real-time monitoring systems, focusing on creating practical and scalable solutions for automation, analytics, and smart systems.",

      "My experience includes developing interactive dashboards, analytical models, and IoT-based smart systems through hackathons and academic projects. I enjoy learning new technologies, collaborating with interdisciplinary teams, and solving real-world engineering problems."
    ],

    resumeUrl: "docs/resume.pdf",
    avatarUrl: "assets/images/profile.jpeg"
  },

  // ─── Social Links ───────────────────────────────────────────
  social: {
    github: "https://github.com/SBK-07",
    linkedin: "https://www.linkedin.com/in/balakumaran2007/",
    email: "balakumaran2470050@ssn.edu.in"
  },

  // ─── Skills ─────────────────────────────────────────────────
  skills: [
    { name: "Python", level: 90, icon: "🐍" },
    { name: "Flask / Streamlit", level: 85, icon: "🌐" },
    { name: "Flutter", level: 80, icon: "📱" },
    { name: "HTML / CSS / JavaScript", level: 82, icon: "💻" },
    { name: "Node.js / Next.js", level: 70, icon: "⚡" },
    { name: "PostgreSQL / Prisma", level: 68, icon: "🗄️" },
    { name: "Machine Learning Basics", level: 75, icon: "🤖" },
    { name: "Linux / Ubuntu", level: 75, icon: "🐧" },
    { name: "Git / GitHub", level: 80, icon: "🔧" },
    { name: "ESP32 / IoT Systems", level: 88, icon: "📡" },
    { name: "Raspberry Pi", level: 72, icon: "🍓" },
    { name: "Arduino", level: 80, icon: "🔌" }
    
  ],

  // ─── Projects ───────────────────────────────────────────────
  projects: [
      {
      title: "/Vendor Hiring Management Platform",
      description: "A full-stack vendor hiring and management platform designed to streamline recruitment workflows, vendor onboarding, task assignment, and status tracking with scalable backend architecture.",
      tech: ["Next.js", "Node.js", "PostgreSQL", "Prisma"],
      
      githubUrl: "https://github.com/SBK-07/Vendor-Hiring-Manager-Contract-Management-Module",
      image: "",
      featured: true,
      category: "web"
    },

    {
      title: "Smart Auto Assist Home Safety System",
      description: "An IoT-based smart home system focused on energy efficiency and safety using ESP32-S3, energy monitoring, motion sensing, and intelligent automation.",
      tech: ["ESP32", "ESP-S3-Box", "IoT", "Embedded Systems", "Sensors"],
      
      githubUrl: "https://github.com/thanuj012/SMART_AUTO_ASSIST_HOME_SAFETY_SYSTEM",
      image: "",
      featured: false,
      category: "IoT"
    },

    {
      title: "Groundwater DWLR Monitor",
      description: "A cross-platform Flutter application for real-time groundwater level monitoring, anomaly detection, predictive analytics, and environmental data visualization using DWLR station datasets.",
      tech: ["Flutter", "Dart", "IoT", "Analytics"],
      
      githubUrl: "https://github.com/SBK-07/groundwater_dwlr_monitor",
      image: "",
      featured: false,
      category: "web"
    },

    {
      title: "Campus Resource Sharing Platform",
      description: "A Flutter and Firebase-based platform for secure item lending and borrowing within campus communities featuring QR-based handover, trust scoring, real-time chat, and AI-powered assistance.",
      tech: ["Flutter", "Firebase", "Node.js", "Socket.IO"],
      
      githubUrl: "https://github.com/jeeva2470041/sharingplatform/",
      image: "",
      featured: false,
      category: "web"
    },

    {
      title: "CrimeSpot",
      description: "A Streamlit-based crime analysis and hotspot prediction platform integrating dashboards, analytics, and map visualization for district-level crime insights.",
      tech: ["Python", "Streamlit", "Folium", "Machine Learning"],
      
      githubUrl: "https://github.com/SBK-07/CrimeHotspots-CyberHackathon",
      image: "",
      featured: false,
      category: "AI"
    },

    {
      title: "Airline Reservation System",
      description: "A Flask-powered airline reservation system with booking, cancellation, payment handling, and real-time flight enquiry modules.",
      tech: ["Flask", "Python", "HTML", "CSS"],
      
      githubUrl: "https://github.com/Srinivasan1716/AirlineReservationSystem",
      image: "",
      featured: false,
      category: "web"
    },

    {
      title: "Mess Management Platform",
      description: "A smart digital mess management system designed to streamline meal scheduling, attendance tracking, token handling, and food management operations for students and administrators.",
      tech: ["Flask", "Python", "HTML", "CSS"],
      
      githubUrl: "https://github.com/SBK-07/Mess-Management-Platform",
      image: "",
      featured: false,
      category: "web"
    },

    {
      title: "ESP32 Interactive Dashboard",
      description: "Developed an interactive GUI and lightweight analytical system for monitoring live power consumption and peak-hour alerts on ESP32-S3-BOX.",
      tech: ["ESP32-S3", "Embedded UI", "IoT Analytics"],
      
      githubUrl: "https://github.com/thanuj012/SMART_AUTO_ASSIST_HOME_SAFETY_SYSTEM/tree/main/esp32-devkit",
      image: "",
      featured: false,
      category: "IoT"
    },

    {
      title: "Food Order And Tracking System",
      description: "A Java-based console application simulating an end-to-end online food ordering and delivery platform with role-based access for customers, admins, and delivery staff. The system supports restaurant management, order tracking, payment processing, report generation, and persistent data handling while demonstrating core OOP principles and modular software design.",
      tech: ["Java", "OOP", "File Handling", "Collections Framework"],
      liveUrl: "#",
      githubUrl: "#",
      image: "",
      featured: false,
      category: "java"
    }

  ],

  // ─── Experience / Timeline ──────────────────────────────────
  experience: [
    {
    role: "Smart India Hackathon 2025 Participant",
    company: "SIH 2025",
    period: "2025",
    description: "Worked on the Groundwater DWLR Monitor project focused on real-time groundwater monitoring, predictive analytics, and environmental data visualization using Flutter and IoT concepts.",
    tech: ["Flutter", "Analytics", "IoT", "Data Visualization"]
    },

    {
      role: "Hackathon Participant",
      company: "Hack Fusion 1.0",
      period: "2025",
      description: "Worked on an IoT-based smart home safety and energy optimization system during a 24-hour interdisciplinary hackathon and received the Inspiring Team Award.",
      tech: ["ESP32", "IoT", "Embedded Systems", "Analytics"]
    },

    {
    role: "Hackathon Participant",
    company: "SNU Hackathon 2025",
    period: "2025",
    description: "Worked on a Campus Resource Sharing Platform focused on secure peer-to-peer item lending, QR-based verification, and trust-based community interactions.",
    tech: ["Flutter", "Firebase", "Node.js", "Real-Time Systems"]
    },

    {
    role: "Cyber Hackathon Participant",
    company: "Thoothukudi Cyber Hackathon",
    period: "2025",
    description: "Developed CrimeSpot, an AI-assisted crime analysis and hotspot prediction platform with ML-based forecasting and geospatial visualization features.",
    tech: ["Python", "Machine Learning", "Streamlit", "Folium"]
    },

    

    {
      role: "M.Tech Integrated CSE Student",
      company: "University Program",
      period: "2024 — Present",
      description: "Learning core concepts in algorithms, full-stack development, AI, IoT systems, and software engineering through projects and practical implementations.",
      tech: ["Python", "DBMS", "Algorithms", "OOP", "OS", "AI/ML", "Web Development"]
    }
  ],


  // ─── Theme Configuration ────────────────────────────────────
  theme: {
    // Primary accent color (buttons, links, highlights)
    primaryColor: "#6366F1",
    // Secondary accent for gradients
    secondaryColor: "#8B5CF6",
    // Accent for special highlights
    accentColor: "#EC4899",
    // Background colors
    bgPrimary: "#0B0D17",
    bgSecondary: "#111427",
    bgCard: "rgba(17, 20, 39, 0.7)",
    // Text colors
    textPrimary: "#E2E8F0",
    textSecondary: "#94A3B8",
    textMuted: "#475569",
    // Glass effect
    glassBg: "rgba(255, 255, 255, 0.03)",
    glassBorder: "rgba(255, 255, 255, 0.08)",
    // Border radius
    borderRadius: "16px",
    // Font
    fontFamily: "'Inter', sans-serif"
  },

  // ─── EmailJS (for contact form) ─────────────────────────────
  emailjs: {
    publicKey: "PROD_EMAILJS_PUBLIC_KEY",
    serviceId: "PROD_EMAILJS_SERVICE_ID",
    templateId: "PROD_EMAILJS_TEMPLATE_ID"
  },

  // ─── Advanced Settings ──────────────────────────────────────
  settings: {
    enableParticles: true,
    enableCursorGlow: true,
    enableSmoothScroll: true,
    enablePreloader: true,
    enableSoundEffects: false,
    particleCount: 50,
    animationSpeed: 1,    // 0.5 = slow, 1 = normal, 2 = fast
  }
};

