export const profile = {
  id: 1,
  name: "Hyunseok Cho",
  headline: "AI Engineer & Full-Stack Developer",
  bio: "Computer Engineering student at UIUC with experience building AI-powered systems, scalable web applications, and hardware projects. I've worked across Seoul, Singapore, and the U.S., bringing a global perspective to solving complex engineering problems.",
  location: "Champaign, IL",
  email: "hc55@illinois.edu",
  linkedinUrl: "https://www.linkedin.com/in/hyunseok-cho/",
  githubUrl: "https://github.com/hscho421",
  resumeUrl: `${import.meta.env.BASE_URL}assets/resume.pdf`,
};

export const experiences = [
  {
    id: 1,
    company: "Samsung",
    role: "AI Software Engineering Intern",
    location: "Seoul, South Korea",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    description:
      "Designed and deployed a 3-stage GUI automation agent powered by multimodal LLMs, achieving 90%+ success rate in desktop task automation. Reduced inference latency by 35% through containerized deployment on NVIDIA H100 GPUs. Implemented planning pipelines using few-shot prompting and chain-of-thought reasoning. Benchmarked open-source LLMs (Qwen, LLaMA, Gemma) for accuracy, latency, and decomposition to advise production model selection.",
    technologies: [
      "Python",
      "LLMs",
      "PyTorch",
      "Docker",
      "NVIDIA H100",
      "AI Agents",
    ],
  },
  {
    id: 2,
    company: "DEEPDIVE",
    role: "Software Engineering Intern",
    location: "Seoul, South Korea",
    startDate: "Jun 2024",
    endDate: "Aug 2024",
    description:
      "Built and launched a full-stack product exchange system with Flask + React, serving hundreds of daily requests. Deployed backend on GCP VMs with Google BigQuery for analytics and automated SQL pipelines. Architected for scalability with Nginx load balancing and Gunicorn caching, improving response time by 25%. Led automation initiative using Google Sheets API that reduced CX workload by 40%.",
    technologies: ["React", "Flask", "GCP", "BigQuery", "Nginx", "SQL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "CoursePlanner",
    description:
      "Full-stack academic planning platform adopted by UIUC students. Processes XML course data into structured API requests with real-time GPA insights via Chart.js visualizations. Optimized backend achieves <200ms API response times with AWS RDS (MySQL) backend.",
    technologies: ["React", "Flask", "AWS RDS", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/hscho421/CoursePlanner",
    imageUrl: null,
    projectUrl: null,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Minesweeper in FPGA",
    description:
      "Designed Minesweeper game logic in SystemVerilog for Spartan-7 FPGA. Implemented randomized mine placement using Linear Feedback Shift Register, sprite controllers for visual output, and a Python-based font-ROM generator for Vivado ROM IP compatibility.",
    technologies: ["SystemVerilog", "FPGA", "Python", "Vivado", "Hardware"],
    githubUrl: "https://github.com/hscho421/fpga-minesweeper",
    imageUrl: null,
    projectUrl: null,
    isFeatured: true,
  },
  {
    id: 3,
    title: "CampusNav",
    description:
      "React web app that minimizes walking time between classes using Google Maps API. Features real-time schedule visualization with route recommendations, helping students navigate 300+ buildings efficiently.",
    technologies: ["React", "Google Maps API", "JavaScript"],
    githubUrl: "https://github.com/hscho421/CampusNav",
    imageUrl: null,
    projectUrl: null,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Arcade Universe",
    description:
      "Collection of 4 classic arcade games built with Python and Pygame: Space Invader, Street Fighter, Tetris, and Minesweeper. Features multiple difficulty levels, power-ups, score tracking, and smooth controls.",
    technologies: ["Python", "Pygame", "NumPy", "Pillow"],
    githubUrl: "https://github.com/hscho421/ArcadeUniverse",
    imageUrl: null,
    projectUrl: null,
    isFeatured: true,
  },
];

export const skills = [
  {
    id: 1,
    category: "AI & Machine Learning",
    items: [
      "PyTorch",
      "Transformers",
      "LLM Benchmarking",
      "AI Agents",
      "Few-shot Prompting",
      "Chain-of-Thought",
    ],
  },
  {
    id: 2,
    category: "Languages",
    items: [
      "Python",
      "C/C++",
      "JavaScript",
      "TypeScript",
      "SQL",
      "SystemVerilog",
    ],
  },
  {
    id: 3,
    category: "Web Development",
    items: [
      "React",
      "Node.js",
      "Flask",
      "HTML/CSS",
      "REST APIs",
      "Postman",
    ],
  },
  {
    id: 4,
    category: "Cloud & Infrastructure",
    items: [
      "AWS",
      "GCP",
      "Docker",
      "Linux",
      "Nginx",
      "Git",
      "MongoDB",
      "MySQL",
    ],
  },
];
