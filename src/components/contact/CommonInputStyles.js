const commonInputStyles = {
  sx: {
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: 'white', // Border color
      },
      '&:hover fieldset': {
        borderColor: 'white', // Border color on hover
      },
      '&.Mui-focused fieldset': {
        borderColor: 'white', // Border color when focused
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white', // Label color
      '&.Mui-focused': {
        color: 'white', // Label color when focused
      },
    },
    '& .MuiInputBase-input': {
      color: 'white', // Input text color
    },
    backgroundColor: 'transparent', // Change as needed
    fullWidth: true,
    margin: 'normal',
    variant: 'outlined',
    required: true,
  },
};

export default commonInputStyles;
