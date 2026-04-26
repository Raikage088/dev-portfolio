import p1 from "../assets/projects/p1.png";

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
      "A full-stack application for SYSU International Inc. By integrating with SAP and adding a custom-built dashboard, with a central space to monitor the status, location and manage user data with real-time accuracy.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "Node.js",
      "Express",
      "Socket.IO",
      "MySQL",
    ],
    githubUrl: "",
    liveUrl: "",
  }),
];
