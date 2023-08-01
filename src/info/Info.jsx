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
  bio: "Equipped with expertise as a frontend developer and fortified with a background in customer support, I specialize in delivering exceptional web experiences. My current role encompasses both Quality Assurance (QA) and development, where I apply my problem-solving skills to create robust and user-friendly web interfaces. Eager to contribute my knowledge in programming, I stand ready to take on new challenges and work on exciting projects that aim to enhance the web for everyone.",
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
    ],
    exposedTo: [
      "Nodejs",
      "next.js",
      "typescript",
      "tailwindcss",
      "Vue.js",
      "SQL",
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
      label: "movies",
      emoji: "🎥",
    },
    {
      label: "cooking",
      emoji: "🌶",
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
