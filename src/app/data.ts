import { Github, Linkedin, Twitter } from "lucide-react";

export const professionalProfile = [
  "I’m an **experienced software developer** passionate about programming and building **smart, user-centric solutions**. I specialize in *Microsoft technologies* with strong expertise in **C#, C, and SQL Server**, but I also thrive in **full-stack web development**—crafting everything from backend APIs to engaging frontend interfaces.",
  "On the **backend**, I build robust services with *Node.js and Express*, design scalable data models with *MongoDB*, and integrate business logic that performs under real-world loads. On the **frontend**, I create *dynamic, responsive user experiences* using **React** (part of the MERN stack) while ensuring seamless interaction between client and server.",
  "Using modern full-stack stacks like **MERN** lets me deliver cohesive applications with a single language across the entire web stack, increasing efficiency and reducing friction. I also have solid experience in **event-driven and object-oriented programming**, desktop apps with *C#/.NET* (ADO.NET, ASP.NET, Entity Framework, Xamarin), and advanced analysis/design methods (*UML, MERISE*).",
  "I’m passionate about **efficient, scalable code** that solves real problems—and occasionally makes other developers smile."
];

export const technicalSkills = [
  "C#", "C", ".NET Framework / .NET", "ADO.NET", "ASP.NET", "Entity Framework", "Xamarin", "SQL Server", "MongoDB", "Node.js", "Express.js", "RESTful APIs", "UML", "MERISE", "Object-Oriented Design (OOD)", "Event-Driven Architecture"
];

export const timelineData = [
  { year: "2017-2020", title: "Specialized Technician in IT Development", description: "Specialized Institute of Applied Technology (ISTA) - Cité de l'Air." },
  { year: "2020", title: "Software Developer", description: "Desktop application development at AXA Assurance Maroc using C# and .NET frameworks." },
  { year: "2021-Present", title: "Self-Education", description: "MERN stack, Selenium, Scripting, Blockchain studies, and Prompt Engineering." },
  { year: "Jul 2022", title: "Desktop Developer", description: "Developed web solutions using JavaScript and modern web technologies at ECA-Assurances." },
  { year: "2023-Present", title: "Freelance Web Developer", description: "Developing web applications using Node.js, Python, Express, and MongoDB. Specialized in scalable backend solutions." },
  { year: "2023", title: "GED & Document Management Specialist", description: "Expertise in document management systems and DMS solutions at NATC FMCG." },
].sort((a, b) => {
  const yearA = parseInt(a.year.split('-')[0]) || parseInt(a.year.split(' ')[1]) || 0;
  const yearB = parseInt(b.year.split('-')[0]) || parseInt(b.year.split(' ')[1]) || 0;
  return yearB - yearA; // Sort descending (newest first)
});

export const socialLinks = [
  { icon: Github, label: "GitHub", url: "https://github.com/safhiHALIM" },
  { icon: Linkedin, label: "LinkedIn", url: "https://www.linkedin.com/in/abdelhalim-safhi-600583263/" },
  { icon: Twitter, label: "Twitter", url: "https://twitter.com" },
];

export const aboutMe = {
  avatar: "/avatar.png",
};
