import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [touched, setTouched] = useState({});
  const [submittedName, setSubmittedName] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validate = (data) => {
    const errors = {};
    if (!data.name.trim()) errors.name = 'Name is required';
    if (!data.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = 'Email is invalid';
    }
    if (!data.message.trim()) errors.message = 'Message is required';
    else if (data.message.trim().length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    return errors;
  };

  const errors = validate(formData);
  const isFormValid = Object.keys(errors).length === 0;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      setSubmittedName(formData.name);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      });
      setTouched({});
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    }
  };

  return (
    <div className="contact-form-card">
      <h3>ANY PROJECT?</h3>

      {submitted && (
        <div style={{ padding: '1rem', backgroundColor: '#ffffff', border: '1px solid rgba(0,0,0,0.1)', color: '#111111', borderRadius: 'var(--radius-sm)', marginBottom: '1.5rem', fontWeight: '700' }}>
          ✓ Thank you, {submittedName}! Your message has been sent successfully.
        </div>
      )}

      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label htmlFor="name">NAME *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="ENTER YOUR NAME"
            required
          />
          {touched.name && errors.name && (
            <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.2rem' }}>{errors.name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="email">EMAIL *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="NAME@EXAMPLE.COM"
            required
          />
          {touched.email && errors.email && (
            <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.2rem' }}>{errors.email}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="subject">SUBJECT</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="PROJECT INQUIRY / INTERNSHIP"
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">MESSAGE *</label>
          <textarea
            id="message"
            name="message"
            rows="3"
            value={formData.message}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="WRITE YOUR MESSAGE HERE..."
            required
          />
          {touched.message && errors.message && (
            <span style={{ color: '#dc2626', fontSize: '0.8rem', fontWeight: '700', marginTop: '0.2rem' }}>{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="btn-black-pill"
          disabled={!isFormValid}
          style={{
            marginTop: '1rem',
            opacity: !isFormValid ? 0.6 : 1,
            cursor: !isFormValid ? 'not-allowed' : 'pointer'
          }}
        >
          Submit now ↗
        </button>
      </form>
    </div>
  );
}

export default ContactForm;