import styles from "./ContactForm.module.scss";
import {
  Snackbar,
  Typography,
  TextField,
  Button,
  withStyles,
} from "@material-ui/core";
import * as React from "react";
import { useState } from "react";

const CustomOutlinedInput = withStyles(() => ({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "black",
      },
      "&:hover fieldset": {
        borderColor: "black",
      },
      "&.Mui-focused fieldset": {
        borderColor: "black",
      },
    },
    "& .MuiInputLabel-root": {
      color: "black",
      "&.Mui-focused": {
        color: "black",
      },
      transform: "translate(15px, 4px) scale(1)", // Adjust these values
    },
    "& .MuiInputLabel-filled": {
      transform: "translate(15px, 4px) scale(1)", // Adjust these values
    },
    "& .MuiInputBase-inputMultiline": {
      backgroundColor: "white",
    },
  },
}))(TextField);

const MessageInput = withStyles(() => ({
  root: {
    "& .MuiInputLabel-root": {
      color: "white",
      placeholder: "black",
      "&.Mui-focused": {
        color: "white",
      },
      transform: "translate(0, 0) scale(1)",
    },
    "& .MuiInputBase-inputMultiline": {
      backgroundColor: "white",
    },
  },
}))(TextField);

const commonInputStyles = {
  fullWidth: true,
  margin: "normal",
  variant: "filled",
  required: true,
  inputProps: { style: { backgroundColor: "white" } },
};

export default function ContactForm() {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = `Subject: ${subject}\n${formData.get("message")}`;

      const response = await fetch(
        `${import.meta.env.VITE_EMAIL_SERVICE_URL}/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        },
      );

      if (response.ok) {
        setSnackbarMessage("Email sent successfully");
      } else {
        setSnackbarMessage("Error: " + response.statusText);
      }
    } catch (error) {
      console.error("Error:", error);
      setSnackbarMessage("An error occurred. Please try again later.");
    }
    setSnackbarOpen(true);
  };

  return (
    <div className={styles.form}>
      <Typography variant="h5" className={styles.heading}>
        Contact me
      </Typography>
      <form onSubmit={handleSubmit}>
        <CustomOutlinedInput
          {...commonInputStyles}
          type="text"
          label="Name"
          name="name"
          placeholder="Enter your name"
          aria-label="Your Name"
        />
        <CustomOutlinedInput
          {...commonInputStyles}
          type="text"
          label="Email"
          name="email"
          placeholder="Enter your email"
          aria-label="Your Email"
        />
        <CustomOutlinedInput
          {...commonInputStyles}
          type="text"
          label="Subject"
          name="subject"
          placeholder="Enter the subject"
          aria-label="Enter the Subject"
        />
        <MessageInput
          fullWidth
          margin="normal"
          type="text"
          name="message"
          label="Message"
          required
          minRows={4}
          multiline
          placeholder="Enter your message"
          aria-label="Enter your message"
        />
        <Button type="submit" variant="contained" className={styles.button}>
          Send message
        </Button>
      </form>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={
          <Button color="inherit" size="small" onClick={handleCloseSnackbar}>
            Close
          </Button>
        }
      />
    </div>
  );
}
