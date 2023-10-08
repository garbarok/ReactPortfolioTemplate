import React from "react";
import Terminal from "./Terminal";
import Style from "./About.module.scss";
import { Box } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faJs,
  faReact,
  faGit,
  faGithub,
  faHtml5,
  faCss3,
  faDocker,
  faNodeJs,
  faVuejs,



} from "@fortawesome/free-brands-svg-icons";

export default function AboutMe({ firstName, lastName, baseColor, bio, skills, hobbies }) {

  const aboutMeText = (
    <>
      <p>
        <span style={{ color: baseColor }}>
          about  <span className={Style.green}>(main)</span> ${" "}
        </span>
        {bio.split('\n').map((str, index) => (
  <React.Fragment key={index}>
    {str}
    <br />
  </React.Fragment>
))}
      </p>
    </>
  );

  const skillIcons = {
    javascript: faJs,
    react: faReact,
    git: faGit,
    github: faGithub,
    html5: faHtml5,
    css3: faCss3,
    docker: faDocker,


  }

  const exposedSkillIcons = {
    nodejs: faNodeJs,
    vue: faVuejs,
  }

  const skillsText = (
    <>
      <p style={{ color: baseColor }}>Skills I'm Proficient With:</p>
      <ul className={Style.skills}>
        {skills.proficientWith.map((proficiency, index) => (
          <li key={index}>
            {skillIcons[proficiency] ? <FontAwesomeIcon icon={skillIcons[proficiency]} /> : null} {" "}
            {proficiency.charAt(0).toUpperCase() + proficiency.slice(1)}
          </li>
        ))}
      </ul>

      <p style={{ color: baseColor }}>Technologies I've Been Exposed To:</p>
      <ul className={Style.skills}>
        {skills.exposedTo.map((skill, index) => (
          <li key={index}>
            {exposedSkillIcons[skill] ? <FontAwesomeIcon icon={exposedSkillIcons[skill]} /> : null} {" "}
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </li>
        ))}
      </ul>
    </>
  );


  const miscText = (
    <>
      <p>
        <span style={{ color: baseColor }}>
          In my spare time, I'm probably:
        </span>{" "}
      </p>
      <ul>
        {hobbies.map((hobby, index) => (
          <li key={index}>
            <Box component={"span"} mr={"1rem"}>
              {hobby.emoji}
            </Box>
            {hobby.label}
          </li>
        ))}
      </ul>
    </>
  );

  return <Terminal text={[aboutMeText, skillsText, miscText]} />;
}
