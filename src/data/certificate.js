import c1 from "../assets/certificates/c1.jpg";
import c2 from "../assets/certificates/c2.jpg";
import c3 from "../assets/certificates/c3.jpg";
import c4 from "../assets/certificates/c4.jpg";
import c5 from "../assets/certificates/c5.jpg";
import c6 from "../assets/certificates/c6.jpg";
import c7 from "../assets/certificates/c7.jpg";
import c8 from "../assets/certificates/c8.jpg";
import c9 from "../assets/certificates/c9.jpg";

export const createCertificate = ({ id, title, issueDate, image }) => ({
  id,
  title,
  issueDate,
  image,
});

export const certificatesAlbum = [
  {
    id: "epcps",
    issuer: "EPCPS",
    color: "270, 100%, 50%",
    certificates: [
      createCertificate({
        id: "c1",
        title: "Basic IT Management",
        issueDate: "Nov. 30,2025",
        image: c1,
      }),
      createCertificate({
        id: "c2",
        title:
          "Real-Time IoT Visualization and Automation using Arduino and Blynk",
        issueDate: "Nov. 26,2025",
        image: c2,
      }),
      createCertificate({
        id: "c3",
        title: "Introduction to Robotics",
        issueDate: "Nov. 29,2025",
        image: c3,
      }),
      createCertificate({
        id: "c4",
        title: "Web Development Starter Guide: How Web Works",
        issueDate: "Nov. 26,2025",
        image: c4,
      }),
    ],
  },
  {
    id: "icpep",
    issuer: "ICPEP",
    color: "210, 100%, 50%",
    certificates: [
      createCertificate({
        id: "c5",
        title: "Next-Gen NLP on a Budget: The Art of Small Language Modeling",
        issueDate: "July. 12,2025",
        image: c5,
      }),
      createCertificate({
        id: "c6",
        title: "Generative AI to Assist Research Journaling in the Academe",
        issueDate: "November. 11,2025",
        image: c6,
      }),
      createCertificate({
        id: "c7",
        title: "Just Build the Damn Thing",
        issueDate: "November. 11,2025",
        image: c7,
      }),
    ],
  },
  {
    id: "udemy",
    issuer: "UDEMY",
    color: "294, 70%, 60%",
    certificates: [
      createCertificate({
        id: "c8",
        title: "Mastering MySQL: From Beginner to Advanced",
        issueDate: "November 19, 2025",
        image: c8,
      }),
    ],
  },
  {
    id: "cisco",
    issuer: "CISCO",
    color: "200, 100%, 35%",
    certificates: [
      createCertificate({
        id: "c9",
        title: "Introduction to Cybersecurity",
        issueDate: "November 19, 2025",
        image: c9,
      }),
    ],
  },
];
