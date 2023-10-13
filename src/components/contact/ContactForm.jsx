import styles from "./ContactForm.module.scss";
import { Typography, TextField, Button } from "@material-ui/core";
import * as React from "react";
export default function ContactForm() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get("name");
    const email = formData.get("email");
    const subject = formData.get("subject");
    const message = `Subject: ${subject}\n${formData.get("message")}`;

    const response = await fetch(
      "https://https://emailservice.2.ie-1.fl0.io/send-email",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      },
    );

    if (response.ok) {
      // Handle success
      console.log("Email sent successfully");
    } else {
      // Handle error
      console.error("Error:", response.statusText);
    }
  };

  return (
    <div className={styles.form}>
      <Typography variant="h5">Contact me</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Your name"
          name="name"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="email"
          label="Your email"
          name="email"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Subject"
          name="subject"
          variant="outlined"
          required
        />
        <TextField
          fullWidth
          margin="normal"
          type="text"
          label="Message"
          name="message"
          variant="outlined"
          multiline
          minRows={4}
          required
        />
        <Button type="submit" variant="contained" className={styles.button}>
          Send message
        </Button>
      </form>
    </div>
  );
}
