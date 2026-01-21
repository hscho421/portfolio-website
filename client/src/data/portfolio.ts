export const profile = {
  id: 1,
  name: "Hyunseok Cho",
  headline: "Software Engineer | Computer Engineering @ UIUC",
  bio: "As a Computer Engineering student at UIUC with global experience across South Korea, Singapore, and the U.S., I'm passionate about building scalable software systems and AI-powered tools that solve real-world problems.",
  location: "Champaign, Illinois, United States",
  email: "hc55@illinois.edu",
  linkedinUrl: "https://www.linkedin.com/in/hyunseok-cho/",
  githubUrl: "https://github.com/hscho421",
  resumeUrl: "/assets/resume.pdf",
};

export const experiences = [
  {
    id: 1,
    company: "Samsung SDS",
    role: "AI Software Engineering Intern",
    location: "Seoul, South Korea",
    startDate: "Jun 2025",
    endDate: "Aug 2025",
    description:
      "Designed and deployed a 3-stage GUI automation agent powered by multimodal LLMs, achieving over 90% success in desktop task automation. Reduced inference latency by 35% through containerized deployment on NVIDIA H100 GPUs. Benchmarked open-source LLMs (Qwen, LLaMA, Gemma) for accuracy and latency.",
    technologies: [
      "Python",
      "LLMs",
      "Docker",
      "NVIDIA H100",
      "Multi-agent Systems",
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
      "Built and launched a full-stack product exchange system with Flask + React, streamlining CX workflows. Deployed backend on GCP VMs and integrated Google BigQuery for analytics. Architected for scalability with Nginx load balancing, improving response time by 25%.",
    technologies: ["React", "Flask", "GCP", "BigQuery", "Nginx", "SQL"],
  },
];

export const projects = [
  {
    id: 1,
    title: "CoursePlanner",
    description:
      "A full-stack academic planning platform adopted by UIUC students. Processed UIUC's XML course data into structured API requests and delivered real-time GPA insights. Optimized backend caching for <200ms response times.",
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
      "Designed and implemented Minesweeper game logic in SystemVerilog, running on a Spartan-7 Urbana FPGA board. Constructed randomized mine placement using LFSR and developed a Python-based font-ROM generator.",
    technologies: ["SystemVerilog", "FPGA", "Python", "Hardware Design"],
    githubUrl: "https://github.com/hscho421/fpga-minesweeper",
    imageUrl: null,
    projectUrl: null,
    isFeatured: true,
  },
  {
    id: 3,
    title: "CampusNav",
    description:
      "React web application to minimize walking time between classes. Integrated Google Maps API to compute accurate walking distances and suggest optimized routes based on class schedules.",
    technologies: ["React", "Google Maps API", "Algorithm Optimization"],
    githubUrl: "https://github.com/hscho421/CampusNav",
    imageUrl: null,
    projectUrl: null,
    isFeatured: false,
  },
];

export const skills = [
  {
    id: 1,
    category: "Languages",
    items: [
      "Python",
      "C/C++",
      "SQL",
      "JavaScript",
      "TypeScript",
      "SystemVerilog",
    ],
  },
  {
    id: 2,
    category: "Web & Tools",
    items: [
      "React",
      "Node.js",
      "Flask",
      "HTML/CSS",
      "Docker",
      "Git",
      "Nginx",
      "Postman",
    ],
  },
  {
    id: 3,
    category: "Cloud & AI",
    items: [
      "AWS",
      "GCP",
      "PyTorch",
      "Transformers",
      "LLM Agents",
      "Linux",
      "MongoDB",
    ],
  },
];
