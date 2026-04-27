import p1 from "../assets/projects/p1.png";
import p2 from "../assets/projects/p2.png";

export const createProject = ({
  id,
  title,
  image,
  description,
  technologies,
  githubUrl,
  liveUrl,
}) => ({
  id,
  title,
  image,
  description,
  technologies,
  githubUrl,
  liveUrl,
});

export const projects = [
  createProject({
    id: "p1",
    title: "Sysu Centralized Management System",
    image: p1,
    description:
      "A full-stack web application for SYSU International Inc. By integrating with SAP and adding a custom-built dashboard, with a central space to monitor the status, location and manage user data with real-time accuracy.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL",
      "Firebase",
    ],
    githubUrl: "",
    liveUrl: "",
  }),
  createProject({
    id: "p2",
    title: "Sysu Go (Driver App)",
    image: p2,
    description:
      "A real-time native application for drivers integrated for Sysu Centralized Management System. It features a custom-built dashboard to monitor vehicle status and precise GPS locations, leveraging a high-performance backend to ensure data accuracy and streamlined fleet operations.",
    technologies: [
      "Kotlin",
      "JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL",
      "Firebase",
    ],
    githubUrl: "",
    liveUrl: "",
  }),
];
