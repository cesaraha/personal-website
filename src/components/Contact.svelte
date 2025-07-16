<script lang="ts">
  // Import EmailJS (you'll need to install: npm install @emailjs/browser)
  import emailjs from '@emailjs/browser';

  let formData = {
    fullName: '',
    email: '',
    phoneNumber: '',
    service: 'Please select an option...',
    specification: '',
    message: ''
  };

  let errors = {
    fullName: '',
    email: '',
    service: '',
    message: ''
  };

  let isSubmitting = false;
  let submitMessage = '';

  // EmailJS configuration - Replace with your actual values
  const EMAILJS_SERVICE_ID = 'service_caha_test';
  const EMAILJS_TEMPLATE_ID = 'template_caha_test';
  const EMAILJS_PUBLIC_KEY = 'Nz7Jnfh-ZmFp7kWIY';

  function validateForm() {
    errors = {
      fullName: '',
      email: '',
      service: '',
      message: ''
    };

    if (!formData.fullName.trim()) {
      errors.fullName = 'Full name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.service || formData.service === 'Please select an option...') {
      errors.service = 'Please select a service';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    return !errors.fullName && !errors.email && !errors.service && !errors.message;
  }

  async function handleSubmit(event: Event) {
    event.preventDefault();
    
    if (!validateForm()) return;

    isSubmitting = true;
    submitMessage = '';

    try {
      // Prepare email template parameters
      const templateParams = {
        to_email: 'c.hdez.alvz@gmail.com', // Replace with your Gmail
        subject: `Request - ${formData.service} - ${formData.fullName}`,
        from_name: formData.fullName,
        from_email: formData.email,
        phone_number: formData.phoneNumber || 'Not provided',
        service: formData.service,
        specification: formData.specification || 'Not specified',
        message: formData.message
      };

      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      console.log('Email sent successfully:', response);
      submitMessage = 'Message sent successfully! I\'ll get back to you soon.';
      
      // Reset form
      formData = {
        fullName: '',
        email: '',
        phoneNumber: '',
        service: 'Please select an option...',
        specification: '',
        message: ''
      };

    } catch (error) {
      console.error('Failed to send email:', error);
      submitMessage = 'Sorry, there was an error sending your message. Please try again.';
    } finally {
      isSubmitting = false;
    }
  }

  // Reactive statement to clear specification when service changes
  $: if (formData.service === 'Please select an option...' || formData.service === '') {
    formData.specification = '';
  }
</script>

<section class="contact-section margin5">
  <div class="container">
    <h2 class="section-title">Get In Touch</h2>
    <p class="section-description">
      I'd love to hear from you! Whether you have a question, want to discuss a project, or just want to say hello, feel free to reach out.
    </p>
    
    <form class="contact-form" on:submit={handleSubmit}>
      <div class="form-group">
        <label for="fullName" class="form-label">Full Name</label>
        <input
          type="text"
          id="fullName"
          class="form-input"
          class:error={errors.fullName}
          bind:value={formData.fullName}
          placeholder="Enter your full name"
        />
        {#if errors.fullName}
          <span class="error-message">{errors.fullName}</span>
        {/if}
      </div>

      <div class="form-group">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          id="email"
          class="form-input"
          class:error={errors.email}
          bind:value={formData.email}
          placeholder="Enter your email address"
        />
        {#if errors.email}
          <span class="error-message">{errors.email}</span>
        {/if}
      </div>

      <div class="form-group">
        <label for="phoneNumber" class="form-label">Phone Number <span class="optional">(Optional)</span></label>
        <input
          type="tel"
          id="phoneNumber"
          class="form-input"
          bind:value={formData.phoneNumber}
          placeholder="Enter your phone number"
        />
      </div>

      <div class="form-group">
        <label for="service" class="form-label">Service</label>
        <select
          id="service"
          class="form-select"
          class:error={errors.service}
          bind:value={formData.service}
        >
          <option value="Please select an option...">Please select an option...</option>
          <option value="R&D projects">R&D projects</option>
          <option value="App development">App development</option>
          <option value="Website creation">Website creation</option>
          <option value="Private classes">Private classes</option>
          <option value="Other">Other</option>
        </select>
        {#if errors.service}
          <span class="error-message">{errors.service}</span>
        {/if}
      </div>

      {#if formData.service && formData.service !== 'Please select an option...'}
        <div class="form-group">
          <label for="specification" class="form-label">Please specify</label>
          <input
            type="text"
            id="specification"
            class="form-input"
            bind:value={formData.specification}
            placeholder="Please provide a general description of your request"
            maxlength="80"
          />
          <div class="character-count">
            {formData.specification.length}/80 characters
          </div>
        </div>
      {/if}

      <div class="form-group">
        <label for="message" class="form-label">Message</label>
        <textarea
          id="message"
          class="form-textarea"
          class:error={errors.message}
          bind:value={formData.message}
          placeholder="Please provide a detailed description of your request"
          rows="5"
        ></textarea>
        {#if errors.message}
          <span class="error-message">{errors.message}</span>
        {/if}
      </div>

      <button type="submit" class="submit-btn" disabled={isSubmitting}>
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>

      {#if submitMessage}
        <div class="submit-message" class:success={submitMessage.includes('successfully')} class:error={submitMessage.includes('error')}>
          {submitMessage}
        </div>
      {/if}
    </form>
  </div>
</section>

<style>
  .contact-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing6) var(--spacing5);
    background: var(--bg-color);
  }

  .container {
    max-width: 800px;
    width: 100%;
    text-align: center;
  }

  .section-title {
    font: var(--h2);
    color: var(--text-color);
    margin-bottom: var(--spacing3);
  }

  .section-description {
    font: var(--p);
    color: hsl(from var(--text-color) h s calc(l - 15));
    margin-bottom: var(--spacing6);
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .contact-form {
    text-align: left;
    background: hsl(from var(--bg-color) h s calc(l + 1));
    padding: var(--spacing6);
    border-radius: var(--spacing3);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
  }

  .form-group {
    margin-bottom: var(--spacing5);
  }

  .form-label {
    display: block;
    font: 500 1rem var(--ff2);
    color: var(--text-color);
    margin-bottom: var(--spacing2);
  }

  .optional {
    font-weight: 400;
    color: hsl(from var(--text-color) h s calc(l - 30));
    font-size: 0.9em;
  }

  .form-input,
  .form-textarea,
  .form-select {
    width: 100%;
    padding: var(--spacing3);
    background: hsl(from var(--bg-color) h s calc(l + 5));
    border: 2px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--spacing2);
    color: var(--text-color);
    font: var(--p);
    transition: all 0.3s ease;
    resize: vertical;
  }

  .form-select {
    cursor: pointer;
  }

  .form-select option {
    background: hsl(from var(--bg-color) h s calc(l + 5));
    color: var(--text-color);
    padding: var(--spacing2);
  }

  .form-input:focus,
  .form-textarea:focus,
  .form-select:focus {
    outline: none;
    border-color: var(--accent-color);
    box-shadow: 0 0 0 3px hsl(from var(--accent-color) h s calc(l - 10) / 0.2);
    background: hsl(from var(--bg-color) h s calc(l + 7));
  }

  .form-input::placeholder,
  .form-textarea::placeholder {
    color: hsl(from var(--text-color) h s calc(l - 35));
  }

  .form-input.error,
  .form-textarea.error,
  .form-select.error {
    border-color: hsl(0, 70%, 60%);
  }

  .form-textarea {
    min-height: 120px;
    font-family: var(--ff);
    line-height: 1.5;
  }

  .character-count {
    font-size: 0.8em;
    color: hsl(from var(--text-color) h s calc(l - 25));
    text-align: right;
    margin-top: var(--spacing1);
  }

  .error-message {
    display: block;
    color: hsl(0, 70%, 60%);
    font-size: 0.9em;
    margin-top: var(--spacing1);
  }

  .submit-btn {
    width: 100%;
    padding: var(--spacing3) var(--spacing5);
    background: var(--accent-color);
    color: var(--bg-color);
    border: none;
    border-radius: var(--spacing2);
    font: 500 1.1rem var(--ff2);
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: var(--spacing3);
    box-shadow: 
        var(--spacing1) var(--spacing1) 0 hsl(from var(--accent-color) h s calc(l - 20)),
        var(--spacing2) var(--spacing2) 0 hsl(from var(--bg-color) h s calc(l - 3));
  }

  .submit-btn:hover {
    background: hsl(from var(--accent-color) h s calc(l - 10));
    transform: scale(1.05);
    box-shadow: 0 8px 24px hsl(from var(--accent-color) h s calc(l - 20) / 0.4);
  }

  .submit-btn:active {
    transform: translateY(0);
  }

  .submit-btn:focus {
    outline: none;
    box-shadow: 0 0 0 3px hsl(from var(--accent-color) h s calc(l - 10) / 0.3);
  }

  .submit-btn:disabled {
    opacity: 0.6;
    cursor: not-allowed;
    transform: none;
  }

  .submit-message {
    margin-top: var(--spacing3);
    padding: var(--spacing3);
    border-radius: var(--spacing2);
    font-size: 0.9rem;
    text-align: center;
  }

  .submit-message.success {
    background: hsl(120, 50%, 90%);
    color: hsl(120, 50%, 20%);
    border: 1px solid hsl(120, 50%, 70%);
  }

  .submit-message.error {
    background: hsl(0, 50%, 90%);
    color: hsl(0, 50%, 20%);
    border: 1px solid hsl(0, 50%, 70%);
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .contact-section {
      padding: var(--spacing5) var(--spacing3);
    }

    .contact-form {
      padding: var(--spacing5);
    }

    .section-title {
      font-size: 1.8rem;
    }

    .section-description {
      font-size: 0.95rem;
    }
  }

  @media (max-width: 480px) {
    .contact-form {
      padding: var(--spacing4);
    }

    .form-group {
      margin-bottom: var(--spacing4);
    }

    .section-title {
      font-size: 1.6rem;
    }
  }
</style>