import { useState } from 'react';
import useForm from '../../hooks/useForm';
import { TextField, Button, Snackbar, Typography, Stack } from '@mui/material';
import styles from "./ContactForm.module.scss";
import commonInputStyles from './CommonInputStyles';


export default function ContactForm() {
  const initialForm = { name: '', email: '', subject: '', message: '' };
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const { formState, handleChange, handleSubmit, resetForm } = useForm(initialForm, setSnackbarMessage, setSnackbarOpen);

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <div className={styles.form}>
      <Typography variant="h5" className={styles.heading} gutterBottom>
        Contact me
      </Typography>
      <form onSubmit={handleSubmit} style={{ width: '50%' }}>
        <Stack direction="column" spacing={2}>
          <TextField
            {...commonInputStyles}
            label="Name"
            name="name"
            placeholder="Enter your name"
            aria-describedby='Enter your name'
            onChange={handleChange}
            value={formState.name}
          />
          <TextField
            {...commonInputStyles}
            label="Email"
            name="email"
            type='email'
            placeholder="Enter your email"
            aria-describedby='Enter your email'
            onChange={handleChange}
            value={formState.email}
          />
          <TextField
            {...commonInputStyles}
            label="Subject"
            name="subject"
            placeholder="Enter the subject"
            aria-describedby='Enter your subject'
            onChange={handleChange}
            value={formState.subject}
          />
          <TextField
            {...commonInputStyles}
            label="Message"
            name="message"
            placeholder="Enter your message"
            aria-describedby='Enter your message'
            onChange={handleChange}
            value={formState.message}
            multiline
            minRows={4}
          />
          <Button
            type="submit"
            variant="contained"
            className={styles.button}
            onClick={resetForm}
            sx={{
              mt: 2,
              alignSelf: 'center'
            }}
          >
            Send message
          </Button>
        </Stack>
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