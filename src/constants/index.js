import studydrive from "../assets/logos/studydrive.webp";
import jlr from "../assets/logos/jlr.webp";
import cplusplus from "../assets/tech/icons8-c++.svg";
import firebase from "../assets/tech/icons8-firebase.svg";
import html5 from "../assets/tech/icons8-html5.svg";
import java from "../assets/tech/icons8-java.svg";
import python from "../assets/tech/icons8-python.svg";
import react from "../assets/tech/icons8-react.svg";
import swift from "../assets/tech/icons8-swift.svg";
import tailwind from "../assets/tech/icons8-tailwind-css.svg";

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
        company_name: "Jaguar Land Rover",
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

const logos = [
    {
        'src': cplusplus,
        'alt': 'C++'
    },
    {
        'src': firebase,
        'alt': 'Firebase'
    },
    {
        'src': html5,
        'alt': 'HTML5'
    },
    {
        'src': java,
        'alt': 'Java'
    },
    {
        'src': python,
        'alt': 'Python'
    },
    {
        'src': react,
        'alt': 'React'
    },
    {
        'src': swift,
        'alt': 'Swift'
    },
    {
        'src': tailwind,
        'alt': 'Tailwind CSS'
    },
]

export { experiences, logos };    