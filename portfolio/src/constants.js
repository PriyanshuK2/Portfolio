// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';

// Experience Section Logo's
import tcslogo from './assets/company_logo/tcs.png';
import nulllogo from './assets/company_logo/null.png';
import adroidlogo from './assets/company_logo/adroid.png';

// Education Section Logo's
import nsutlogo from './assets/education_logo/nsut.png';
import schoollogo from './assets/education_logo/school.png';

// Project Section Logo's
import edupointlogo from './assets/work_logo/edupoint.png';


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SASS', logo: sassLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'TypeScript', logo: typescriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: tcslogo,
      role: "System Engineer",
      company: "Tata Consultancy Services",
      date: "October 2024 - Present",
      desc: "Developed dynamic and scalable web applications using the React and Springboot, handling both frontend and backend development. Collaborated with cross-functional teams to build responsive UI, implement RESTful APIs, and optimize application performance in an agile environment.",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "TypeScript",
        "Java",
        "Springboot",
        "Tailwind CSS",
        "MySQL",
        "Redux",
        "Microservices",
      ],
    },
    {
      id: 1,
      img: adroidlogo,
      role: "Summer Intern",
      company: "Adroid Connectz",
      date: "June 2024 - July 2024",
      desc: "Worked as a Summer Intern, designing and implementing scalable UI components and responsive websites and worked on Data Science handling data on large scale.",
      skills: [
        "Python",
        "HTML",
        "CSS",
        "Javascript",
        "Bootstrap",
      ],
    },
  ];
  
  export const education = [
    {
      id: 0,
      img: nsutlogo,
      school: "Netaji Subhas University of Technology (previously NSIT) Dwarka, Delhi",
      date: "October 2020 - August 2024",
      grade: "7.33 CGPA",
      desc: "I have completed my B.Tech in Electronics and Communication Engineering from Netaji Subhas University of Technology(NSUT), Delhi. During my time at NSUT, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at NSUT has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelor of Technology (ECE) - B.Tech",
    },
    {
      id: 1,
      img: schoollogo,
      school: "Union Academy Senior Secondary School, New Delhi",
      date: "Apr 2019 - March 2020",
      grade: "82%",
      desc: "I completed my class 12 education from Union Academy Senior Secondary School, New Delhi, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM).",
      degree: "CBSE(XII) - PCM",
    },
    {
      id: 2,
      img: schoollogo,
      school: "Union Academy Senior Secondary School, New Delhi",
      date: "Apr 2017 - March 2018",
      grade: "74%",
      desc: "I completed my class 10 education from Union Academy Sr. Sec. School, New Delhi, under the CBSE board.",
      degree: "CBSE(X)",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Edupoint",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase detailed GitHub profile information. Simply enter a GitHub username, and the app fetches comprehensive data, including profile stats, repositories, followers, and contributions. The intuitive interface ensures a seamless experience, making it a must-visit tool for developers and recruiters.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "React JS", "API"],
      github: "https://github.com/codingmastr/GitHub-Profile-Search-App-Using-React-JS",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
  ];  