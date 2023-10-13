import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { info } from "../../info/Info";
import AboutMe from "./AboutMe";

function useInfo() {
  const [data, setData] = useState(null);

  useEffect(() => {
    setData(info);
  }, []);

  return data;
}

export default function About() {
  const data = useInfo();

  if (!data) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName, baseColor } = data;

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <AboutMe
        firstName={firstName}
        lastName={lastName}
        baseColor={baseColor}
        bio={data.bio}
        skills={data.skills}
        hobbies={data.hobbies}
      />
    </Box>
  );
}
