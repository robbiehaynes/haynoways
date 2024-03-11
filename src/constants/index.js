import studydrive from "../assets/logos/studydrive.webp";
import jlr from "../assets/logos/jlr.webp";

const experiences = [
    {
        title: "Student Brand Ambassador",
        company_name: "Studydrive",
        icon: studydrive,
        iconBg: "#FFFFFF",
        date: "Nov 2022 - Jan 2023",
        points: [
            "A student ambassador for Studydrive as we run campaigns across the United Kingdom to bring new users onto the platform",
            "Developed strategies to increase brand awareness and generate leads",
            "Generated the most sign ups out of my ambassador cohort",
        ],
    },
    {
        title: "Undergraduate Software Engineer",
        company_name: "JLR",
        icon: jlr,
        iconBg: "#FFFFFF",
        date: "Jul 2023 - Present",
        points: [
            "Using Python to automate manual data pipelines saving time for value added work",
            "Creating data visualisations and dashboards with Tableau to help stakeholders make data driven decisions",
            "Dockerisation to compartmentalise development environment on the servers.",
            "Bash & Powershell scripting to automate SSH port forwarding into remote servers.",
            "Helped facilitate events and webinars online and at universities, engaging with perspective applicants.",
        ],
    },
];

export { experiences };    