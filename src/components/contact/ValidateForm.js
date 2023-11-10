export default function validateForm (formState) {
    const newErrors = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required.';
    if (!formState.email.trim()) newErrors.email = 'Email is required.';
    if (!formState.subject.trim()) newErrors.subject = 'Subject is required.';
    if (!formState.message.trim()) newErrors.message = 'Message is required.';
    return newErrors;
}