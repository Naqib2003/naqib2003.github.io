// data.js - Centralized Data Configuration
// Update this file to automatically update your portfolio website!

const portfolioData = {
    personal: {
        name: "Quazi Naqibul Alam",
        headline: "CSE Student • Software Developer • AI/ML Enthusiast",
        bio: "I am a Computer Science and Engineering student at BRAC University, passionate about Artificial Intelligence, Machine Learning, and Full-Stack Development. I am actively building projects, exploring vision-language models, and preparing for a career in software engineering and AI research.",
        github: "https://github.com/Naqib2003",
        linkedin: "https://www.linkedin.com/in/naqib-alam-5b3489249/",
        email: "mailto:[Your_Email@example.com]", // Replace with your actual email
        resume: "./assets/resume.pdf",
        photo: "./assets/profile.jpg"
    },
    skills: [
        { category: "Programming", items: ["Java", "Python", "JavaScript"] },
        { category: "Web Development", items: ["HTML", "CSS", "JavaScript", "React (Learning)", "Node.js (Learning)"] },
        { category: "Database", items: ["SQL", "MySQL"] },
        { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
        { category: "AI & Data", items: ["Machine Learning", "NLP", "Computer Vision", "Data Structures"] }
    ],
    projects: [
        {
            title: "University Adoption Platform",
            description: "A web platform designed to connect children and families while providing analytics about successful placements.",
            technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
            github: "https://github.com/Naqib2003/[REPO_NAME]",
            live: "#", 
            features: ["User Authentication", "Analytics Dashboard", "Responsive UI"]
        },
        {
            title: "Stock Trading Platform",
            description: "An Object-Oriented Programming simulation built in Java to mimic stock trading mechanics and portfolio management.",
            technologies: ["Java", "OOP"],
            github: "https://github.com/Naqib2003/[REPO_NAME]",
            live: "", 
            features: ["Real-time calculation logic", "Portfolio tracking"]
        },
        {
            title: "Hotel Reservation System",
            description: "A management system handling room categorization, booking workflows, and user data.",
            technologies: ["Java"],
            github: "https://github.com/Naqib2003/[REPO_NAME]",
            live: "", 
            features: ["Room booking engine", "Data structures integration"]
        },
        {
            title: "Hardware Sorting Network",
            description: "A 5-bit hardware sorting network implemented using logic gates on a trainer board.",
            technologies: ["Hardware", "Logic Gates", "Digital Electronics"],
            github: "",
            live: "", 
            features: ["Physical circuit design", "Boolean logic implementation"]
        }
        // To add a new project, just copy a block above and paste it here!
    ],
    experience: [
        {
            title: "AI Data Trainer",
            company: "CrowdGen",
            date: "2026 - Present",
            description: "Working on training and fine-tuning AI models through high-quality data annotation and generation."
        }
        // Add future internships here
    ],
    research: {
        interests: ["Artificial Intelligence / Machine Learning", "Computer Vision", "Natural Language Processing", "Privacy-Preserving AI", "Vision-Language Models"],
        publications: [
            // Example format for future:
            // { title: "Title of Paper", conference: "Conference Name", date: "2027", link: "#" }
        ]
    },
    education: [
        {
            institution: "BRAC University",
            degree: "Bachelor of Science in Computer Science and Engineering (CSE)",
            date: "Expected Graduation: Oct 2028",
            details: "Focusing on AI/ML and Software Engineering. Active in academic projects ranging from Java OOP systems to hardware logic design."
        }
    ],
    achievements: [
        { title: "AI+ Prompt Engineer Level 1™", issuer: "AI CERTs / AgentX", date: "Completed", score: "84" },
        { title: "30 Days Machine Learning with Python Masterclass", issuer: "Gobeshona Learning Academy", date: "May 2026", score: "" }
    ]
};