import self from "../img/self.png";
import mock1 from "../img/mock1.png";
import mock2 from "../img/mock2.png";
import mock3 from "../img/mock3.png";
import mock4 from "../img/mock4.png";


export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export const info = {
  firstName: "Óscar",
  lastName: "Gallego",
  initials: "OGR",
  position: "a Frontend Developer",
  selfPortrait: self,
  gradient: `-webkit-linear-gradient(135deg, ${colors})`,
  baseColor: colors[0],
  miniBio: [
    {
      emoji: "☕",
      text: "Powered by coffee",
    },
    {
      emoji: "🌍",
      text: "Located in Spain",
    },
    {
      emoji: "💼",
      text: "Frontend Developer & QA at AddComm",
    },
    {
      emoji: "✉️",
      text: "Email: work@oscargallegoruiz.email",
    },
  ],
  socials: [
    {
      link: "https://github.com/garbarok",
      icon: "fa fa-github",
      label: "github",
    },
    {
      link: "https://www.linkedin.com/in/oscargallegoruiz/",
      icon: "fa fa-linkedin",
      label: "linkedin",
    },
  ],
  bio: `I began my professional journey at AddComm in April 2022, initially serving as a Manual Tester and Customer Support Specialist. In this role, I contributed to projects for prominent Dutch firms such as Onguard and Carerix, leveraging the Flowize tool. My responsibilities encompassed integrating diverse HR systems, generating payment links, and efficiently handling extensive data sets to fulfill our client expectations.
  
  Transitioning to the development team in January 2023, I shifted my focus towards software assurance and issue resolution. A notable project during this period was enhancing the PDF Editor feature of Flowize, where I predominantly utilized JavaScript and PHP.
  
  As I evolve in my role as a Junior Frontend Developer, I am passionate about harnessing my acquired skills to design and refine web solutions. My aim is to produce platforms that are intuitive and user-centric.`,  
  skills: {
    proficientWith: [
      "javascript",
      "react",
      "git",
      "github",
      "html5",
      "css3",
      "Agile methodologies",
      "QA and testing",
      "docker",
      "jest",
    ],
    exposedTo: [
      "nodejs",
      "next.js",
      "typescript",
      "tailwindcss",
      "vue",
      "sql",
      "java",
      "php"
    ],
  },
  hobbies: [
    {
      label: "reading",
      emoji: "📖",
    },
    {
      label: "cycling",
      emoji: "🚴🏼",
    },
    {
      label: "Learning some new tech",
      emoji: "🤓",
    },
    {
      label: "cooking",
      emoji: "👨🏼‍🍳",
    }
  ],
  portfolio: [
    {
      title: "Weather App",
      stack: "Vue, Vuex, Vue Router, TailwindCSS",
      live: "https://weatherapp.oscargallegoruiz.com/",
      source: "https://github.com/garbarok/weather-app",
      image: mock4,
    },
    {
      title: "Full Stack App",
      stack: "React, Next.js, PostgreSQL, Primsa",
      live: "https://fullstack.garbarok.com",
      source: "https://github.com/garbarok/fullstack-app",
      image: mock1,
    },
    {
      title: "AdoptMe (React)",
      stack: "React, Vite",
      live: "https://adopt-me-red.vercel.app/",
      source: "https://github.com/garbarok/AdoptMe",
      image: mock2,
    },
    {
      title: "BlackJack Game",
      stack: "HTML, CSS, JavaScript",
      live: "https://garbarok.github.io/Blackjack-Game/",
      source: "https://github.com/garbarok/Blackjack-Game",
      image: mock3,
    },
  ],
};
