import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  sql,
  leetCode,
  gitHub,
  linkedIn,
  webDesign,
  reactDeveloper,
  fullstackDeveloper,
  robot,
  thinking,
  goodSalt,
  reyes,
  dayplanner,
  weatherknight,
  funquiz,
  budgetbuddy,
  mezcalbook,
  passwordgen,
  Mike,
  Nicole,
  Danny,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About Me",
  },
  {
    id: "works",
    title: "Portfolio",
  },
  {
    id: "resume",
    title: "Resume",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Designer",
    icon: webDesign,
  },
  {
    title: "React Developer",
    icon: reactDeveloper,
  },
  {
    title: "Full Stack Developer",
    icon: robot,
  },
  {
    title: "Content Creator",
    icon: thinking,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: sql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Lead Software Developer",
    company_name: "Good Salt Restaurant Group",
    icon: goodSalt,
    iconBg: "#B6CECE",
    date: "Jul 2022 - Present",
    points: [
      "Led development of an innovative MERN-based employee portal, reducing retrieval time by 50% and streamlining workflow efficiency.",
      "Managed database, routes, and UI/UX design for an intuitive web application.",
      "Designed highly efficient employee portal for streamlined inventory access.",
      "Delivered 4 robust function applications on schedule with client commendations.",
      "Improved user engagement by 30% through UI/UX design and automated testing.",
    ],
  },
  {
    title: "Service Team Lead and Tech Specialist",
    company_name: "Reyes Mezcaleria",
    icon: reyes,
    iconBg: "#E6DEDD",
    date: "May 2018 - Present",
    points: [
      "Led high-performing team, achieving exceptional service and 30% faster on-boarding.",
      "Implemented inventory courses and sales classes, boosting customer satisfaction and repeat business.",
      "Optimized website, increasing traffic by 40% and improving user experience.",
      "Achieved 99% website up time and reduced update turnaround by 30% as head of IT operations.",
      "Enhanced user experience, increasing traffic by 40% and reducing bounce rate by 20%.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Josh is a digital wizard! Our website saw a 50% traffic boost after his optimization work. We were extremely grateful for his expertise.",
    name: "Mike Pestena",
    designation: "GM",
    company: "The Monroe",
    image: Mike,
  },
  {
    testimonial:
      "In my experience, Joshua Vaneps is a rare find in the world of web development. His dedication to our success was unmatched, and his professionalism was a breath of fresh air.",
    name: "Nicole Peters",
    designation: "GM",
    company: "Good Salt Restaurant Group",
    image: Nicole,
  },
  {
    testimonial:
      "Working with Josh has been a revelation. He doesn't just build websites; he builds success stories",
    name: "Daniel Delaney",
    designation: "Manager",
    company: "Reyes Mezcaleria",
    image: Danny,
  },
];

const projects = [
  {
    name: "Weather Knight",
    description:
      "Weather Knight is a fun interactive weather dashboard that utilizes the Open Weather API to provide accurate and detailed weather information to its users. It is completely responsive on the web and mobile and is a blast to use.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "API's",
        color: "green-pink-text-gradient",
      },
    ],
    image: weatherknight,
    source_code_link: "https://github.com/joshuavaneps/weather-knight",
    deployed_site_link: "https://joshuavaneps.github.io/weather-knight/",
  },
  {
    name: "Budget Buddy",
    description:
      "Budget Buddy is a place where everyone will be presented with the opportunity to understand the financial implications of their chosen location and can confidently navigate their financial journey, creating a solid foundation for a secure future.",
    tags: [
      {
        name: "API's",
        color: "green-pink-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "nodejs",
        color: "orange-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: budgetbuddy,
    source_code_link: "https://github.com/mambrocio/group-COL",
    deployed_site_link: "https://mambrocio.github.io/group-COL/",
  },
  {
    name: "Mezcal Information Guide",
    description:
      "A web-based application designed to facilitate employee access to an extensive database containing comprehensive information about mezcal spirits within a restaurant setting.",
    tags: [
      {
        name: "handlebars",
        color: "blue-text-gradient",
      },
      {
        name: "sql",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
      {
        name: "Tailwind",
        color: "green-text-gradient",
      },
    ],
    image: mezcalbook,
    source_code_link: "https://github.com/JoshuaVaneps/Mezcal-Book",
    deployed_site_link: "https://mezcal-book-580ae53d198b.herokuapp.com/",
  },
  {
    name: "Fun Code Quiz",
    description:
      "This is a quiz with basic coding questions written with HTML, CSS, and JS. It asks 3 questions and gives you 10 seconds to answer them all. The quiz is over when all 3 questions are answered or the timer runs out.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: funquiz,
    source_code_link: "https://github.com/JoshuaVaneps/fun-code-quiz",
    deployed_site_link:
      "https://joshuavaneps.github.io/fun-code-quiz/index.html",
  },
  {
    name: "Super Password Generator",
    description:
      "This application enables users to generate random passwords based on selected criteria. It has a clean and polished, responsive user interface that adapts to multiple screen sizes.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: passwordgen,
    source_code_link:
      "https://github.com/JoshuaVaneps/Super-Password-Generator",
    deployed_site_link:
      "https://joshuavaneps.github.io/Super-Password-Generator/",
  },
  {
    name: "Fun Interactive Day Planner",
    description:
      "This is a simple calendar application that allows a user to save events for each hour of the day. Events are saved in local storage and displayed with color-coding to indicate whether they are in the past, present, or future.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "orange-text-gradient",
      },
    ],
    image: dayplanner,
    source_code_link:
      "https://github.com/JoshuaVaneps/fun-interactive-day-planner",
    deployed_site_link:
      "https://joshuavaneps.github.io/fun-interactive-day-planner/",
  },
];

const Icons = [
  {
    name: "logo-github",
    link: "https://github.com/JoshuaVaneps",
    image: gitHub,
  },
  {
    name: "logo-linkedin",
    link: "www.linkedin.com/in/joshua-vaneps-465949286",
    image: linkedIn,
  },
  {
    name: "logo-leetcode",
    link: "https://leetcode.com/joshuavaneps/",
    image: leetCode,
  },
];

export { services, technologies, experiences, testimonials, projects, Icons };
