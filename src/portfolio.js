/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rahul Chougala",
  title: "Hi, I'm Rahul",
  subTitle: emoji(
    "Java full stack developer with internships at Illumora and Pentagon Space. I build secure, scalable applications with Spring Boot, React, REST/GraphQL APIs, and MySQL, and love designing clean APIs, data models, and high-performance systems."
  ),
  resumeLink: "src\\assets\\images\\Rahul chougala.pdf", // Provide a file in public/Resume.pdf or set an external URL
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/rahulchougala",
  linkedin: "https://linkedin.com/in/rahul-chougala",
  gmail: "rchougala861@gmail.com",
  gitlab: "",
  facebook: "",
  reddit: "",
  medium: "",
  stackoverflow: "",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Java full stack development with Spring Boot, React, and cloud-ready tooling",
  skills: [
    emoji("Design secure REST and GraphQL APIs with Spring Boot, Node.js, and robust data models"),
    emoji("Build responsive React/Next.js frontends with TypeScript, reusable components, and strong UX"),
    emoji("Implement JWT/OAuth2 auth, Redis caching, CI/CD pipelines, and automated quality gates"),
    emoji("Tune database performance, optimize queries, and collaborate in Agile teams to deliver features fast")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {skillName: "Java", fontAwesomeClassname: "fab fa-java"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "TypeScript", fontAwesomeClassname: "fas fa-code"},
    {skillName: "React", fontAwesomeClassname: "fab fa-react"},
    {skillName: "Next.js", fontAwesomeClassname: "fas fa-code"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3"},
    {skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf"},
    {skillName: "Node.js", fontAwesomeClassname: "fab fa-node-js"},
    {skillName: "Express", fontAwesomeClassname: "fas fa-server"},
    {skillName: "REST APIs", fontAwesomeClassname: "fas fa-network-wired"},
    {skillName: "GraphQL", fontAwesomeClassname: "fas fa-project-diagram"},
    {skillName: "MySQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database"},
    {skillName: "MongoDB", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Redis", fontAwesomeClassname: "fas fa-memory"},
    {skillName: "Hibernate/JPA", fontAwesomeClassname: "fas fa-database"},
    {skillName: "Docker", fontAwesomeClassname: "fab fa-docker"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"},
    {skillName: "CI/CD", fontAwesomeClassname: "fas fa-rocket"},
    {skillName: "Linux", fontAwesomeClassname: "fab fa-linux"},
    {skillName: "AWS (Basics)", fontAwesomeClassname: "fab fa-aws"},
    {skillName: "Swagger/OpenAPI", fontAwesomeClassname: "fas fa-file-code"},
    {skillName: "JWT", fontAwesomeClassname: "fas fa-user-shield"},
    {skillName: "OAuth2", fontAwesomeClassname: "fas fa-lock"},
    {skillName: "Kafka (Basics)", fontAwesomeClassname: "fas fa-stream"},
    {skillName: "Postman", fontAwesomeClassname: "fas fa-paper-plane"},
    {skillName: "Jenkins", fontAwesomeClassname: "fas fa-tools"},
    {skillName: "SonarQube", fontAwesomeClassname: "fas fa-bullseye"},
    {skillName: "Agile/Scrum", fontAwesomeClassname: "fas fa-users"}
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "GSS, Belagavi",
      logo: require("./assets/images/gss college.webp"),
      subHeader: "Bachelor of Computer Applications (B.C.A.)",
      duration: "2019 - 2023",
      desc: "CGPA: 8.1"
    },
    {
      schoolName: "PU College - Annigeri",
      logo: require("./assets/images/Annigeri image.webp"),
      subHeader: "Pre-University",
      duration: "2018 - 2020",
      desc: "Percentage: 70%"
    },
    {
      schoolName: "Alvas Education Foundation",
      logo: require("./assets/images/alvas image.webp"),
      subHeader: "Secondary Education",
      duration: "2016 - 2018",
      desc: "Percentage: 87%"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {Stack: "Frontend (React/Next.js)", progressPercentage: "80%"},
    {Stack: "Backend (Spring Boot/Node.js)", progressPercentage: "85%"},
    {Stack: "DevOps & Databases", progressPercentage: "70%"}
  ],
  displayCodersrank: false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Full Stack Developer Intern",
      company: "Illumora",
      companylogo: require("./assets/images/Untitled design.png"),
      date: "Mar 2024 - Oct 2024 | Bengaluru",
      desc: "Mental health platform internship focused on secure full stack delivery and AI integrations.",
      descBullets: [
        "Built the Illumora web app in React with reusable components, routing, and secure API integration",
        "Designed and integrated AI-powered features served via Spring Boot APIs consumed by the React frontend",
        "Implemented JWT/OAuth2 authentication, strengthened Redis-backed sessions, and tuned queries to reduce API latency by ~20%"
      ]
    },
    {
      role: "Full Stack Developer Intern",
      company: "Pentagon Space",
      companylogo: require("./assets/images/annigeriLogo.svg"),
      date: "Mar 2024 - Oct 2024 | Bengaluru",
      desc: "Project-led internship delivering Java full stack features across the platform.",
      descBullets: [
        "Developed React, Spring Boot, and MySQL modules while maintaining clean API contracts",
        "Added role-based access controls, request validation, and resilient error handling across services",
        "Optimized database queries to improve response times by roughly 20-25%"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Disabled to avoid fetching profile.json
  display: false
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Selected work highlighting secure, scalable application delivery",
  projects: [
    {
      image: require("./assets/images/airbnbLogo.png"),
      projectName: "Perfume Webstore",
      projectDesc:
        "E-commerce platform with catalog, search, cart, checkout, order history, and admin dashboards. Spring Boot, React, JWT/OAuth2, REST + GraphQL APIs, MySQL, Docker, and CI/CD-ready deployment.",
      footerLink: [
        {name: "GitHub Repo", url: "https://github.com/merikbest/ecommerce-spring-reactjs"}
      ]
    },
    {
      image: require("./assets/images/health care image.webp"),
      projectName: "Healthcare Management System",
      projectDesc:
        "Full stack app for patient records, appointments, and notifications with role-based access. React, Spring Boot, JPA, REST APIs, MySQL, JWT auth, and optimized schema/query design cutting key endpoint latency by ~30%.",
      footerLink: [
        {name: "Code Samples", url: "https://github.com/rahulchougala"}
      ]
    },
    {
      image: require("./assets/images/Untitled design.png"),
      projectName: "Illumora - AI Platform",
      projectDesc:
        "Internship project delivering AI-powered features for a mental health platform with secure API integrations, responsive React UI, and performance optimizations.",
      footerLink: [
        {name: "Visit Website", url: "https://www.illumora.co/"}
      ]
    },
    {
      image: require("./assets/images/gss college.webp"),
      projectName: "College Management System (Android)",
      projectDesc:
        "Android application built with Java, XML, and WebSockets for real-time notices, role-based authentication, and optimized performance for smooth delivery across devices.",
      footerLink: []
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Smart Workflow System",
      projectDesc:
        "Workflow platform using Frappe, Python, JavaScript, and MariaDB/MySQL with multi-stage approvals, RBAC, conditional logic, REST APIs, and automation that improved process efficiency by 40%.",
      footerLink: []
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: "Achievements & Certifications",
  subtitle:
    "Certifications and milestones that highlight my full stack development journey.",

  achievementsCards: [
    {
      title: "Java Full-Stack Development",
      subtitle: "Certification - Pentagon Space",
      image: require("./assets/images/java-development.png"),
      imageAlt: "Java Full Stack Certification",
      footerLink: []
    },
    {
      title: "UI Enhancements & API Optimization",
      subtitle:
        "Revamped alumni and faculty experiences for the college website and tuned backend APIs for 25% faster responses.",
      image: require("./assets/images/gss college.webp"),
      imageAlt: "UI and API Optimization Achievement",
      footerLink: []
    }
  ],
  display: true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(""),
  talks: [],
  display: false
};

// Podcast Section

const podcastSection = {
  title: "Podcast",
  subtitle: "",
  podcast: [],
  display: false
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume. Last updated: September 16, 2025.",
  display: true
};

const contactInfo = {
  title: "Contact Me",
  subtitle: "Discuss a project, explore new roles, or just say hi. Based in Bengaluru, Karnataka.",
  number: "+91 63640 21063",
  email_address: "rchougala861@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true; // Open for opportunities

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
