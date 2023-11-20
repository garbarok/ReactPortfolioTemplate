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
  position: "Nice to meet you",
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
      text: "Frontend Developer",
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
  bio: `Beginning my tech career in 2021, I've rapidly advanced from quality assurance and customer support to a role as a Frontend Developer, gaining valuable experience at companies like AddComm. Skilled in JavaScript, React, TypeScript, and web development tools, I'm now focusing on expanding my expertise into backend technologies. Driven by a passion for user-centric design, I'm dedicated to honing my skills and embracing new challenges in web development.`,
  skills: {
    proficientWith: [
      "react",
      "javascript",
      "typescript",
      "html5",
      "css3",
      "git",
      "github",
      "tailwindcss",
      "agile methodologies",
      "testing",
      "docker",
      "jest",
    ],
    exposedTo: [
      "nodejs",
      "next.js",
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
