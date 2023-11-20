import Terminal from "../about/Terminal";
import ContactForm from "./ContactForm";
import { Box } from "@mui/material";

function Contact() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      mt={"3rem"}
    >
      <Terminal>
        <ContactForm />
      </Terminal>
    </Box>
  );
}

export default Contact;
