import React, { useState } from "react";
import IconLink from "./IconLink";
import { Box, Skeleton } from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import CodeIcon from "@mui/icons-material/Code";
import { useImageCache } from "../../utils/imageCacheContext";

function PortfolioBlock(props) {
  const { image, live, source, title, stack } = props;
  const { cache, preloadImage } = useImageCache();
  const [isLoading, setIsLoading] = useState(true);

  React.useEffect(() => {
    preloadImage(image);
    const img = new Image();
    img.onload = () => setIsLoading(false);
    img.src = image;
  }, [image, preloadImage]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{ textAlign: "center" }}
    >
      {isLoading ? (
        <Skeleton variant="rectangular" width={210} height={118} />
      ) : (
        <Box
          component={"img"}
          src={cache[image]?.src || image}
          alt={"mockup"}
          sx={{ marginBottom: "-90px" }}
        />
      )}
      <h1 sx={{ fontSize: "1.2rem" }}>{title}</h1>
      <h3 sx={{ fontSize: "0.8rem" }}>{stack}</h3>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={live} title={"Live Demo"} icon={<LanguageIcon />} />
        </Box>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={<CodeIcon />} />
        </Box>
      </Box>
    </Box>
  );
}

export default PortfolioBlock;
