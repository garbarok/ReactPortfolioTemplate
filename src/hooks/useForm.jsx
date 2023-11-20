import { useState } from "react";
import validateForm from "../components/contact/ValidateForm";
import { invariantResponse } from "../utils/misc";

export default function useForm(initialForm = {}, setSnackbarMessage, setSnackbarOpen) {

  const [formState, setFormState] = useState(initialForm)
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({ ...formState, [name]: value });
  };


  const handleSubmit = async (event) => {
    event.preventDefault();
    const newErrors = validateForm(formState);
    if (Object.keys(newErrors).length > 0) {
      const errorMessages = Object.values(newErrors).join("\n");
      setSnackbarMessage(errorMessages);
      setSnackbarOpen(true);
      setErrors(newErrors);
      return;
    }
    try {
      const formData = new FormData(event.target);
      const name = formData.get("name");
      const email = formData.get("email");
      const subject = formData.get("subject");
      const message = formData.get("message");

      invariantResponse(typeof name === 'string', 'name must be a string')
      invariantResponse(typeof email === 'string', 'email must be a string')
      invariantResponse(typeof subject === 'string', 'subject must be a string')
      invariantResponse(typeof message === 'string', 'message must be a string')

      const response = await fetch(
        `${import.meta.env.VITE_EMAIL_SERVICE_URL}/api/send-email`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, subject, message }),
        },
      );

      if (response.ok) {
        setSnackbarMessage("Email sent successfully");
        setSnackbarOpen(true);
        resetForm();
      } else {
        setSnackbarMessage("Error: " + response.statusText);
        setSnackbarOpen(true);
      }
      setErrors({});
    } catch (error) {
      setSnackbarMessage("An error occurred. Please try again later.");
      setSnackbarOpen(true);
    }
  };

  const resetForm = () => {
    setFormState(initialForm)
    setErrors({});
  }

  return {
    errors,
    formState,
    handleChange,
    resetForm,
    handleSubmit
  }
}
