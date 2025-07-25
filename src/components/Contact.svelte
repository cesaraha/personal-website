<script lang="ts">
	// Import EmailJS (you'll need to install: npm install @emailjs/browser)
	import emailjs from '@emailjs/browser';

	export let title : string;
	export let description : string;
	export let fullNameTag : string;
	export let phFullName : string;
	export let emailTag : string;
	export let phEmail : string;
	export let phoneTag : string;
	export let optionalTag : string;
	export let phPhone : string;
	export let serviceTag : string;
	export let option1 : string;
	export let option2 : string;
	export let option3 : string;
	export let option4 : string;
	export let option5 : string;
	export let option6 : string;
	export let specifyTag : string;
	export let phSpecify : string;
	export let characters : string;
	export let messageTag : string;
	export let phMessage : string;
	export let buttonAlways : string;
	export let buttonSending  : string;
	export let errorField : string;
	export let errorValidEmail : string;
	export let errorService : string;
	export let submitSuccess : string;
	export let submitError : string;

	let formData = {
		fullName: '',
		email: '',
		phoneNumber: '',
		service: option1,
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
			errors.fullName = errorField;
		}

		if (!formData.email.trim()) {
			errors.email = errorField;
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			errors.email = errorValidEmail;
		}

		if (!formData.service || formData.service === option1) {
			errors.service = errorService;
		}

		if (!formData.message.trim()) {
			errors.message = errorField;
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
				to_email: 'c.aha.contact@gmail.com',
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
			submitMessage = submitSuccess;

			// Reset form
			formData = {
				fullName: '',
				email: '',
				phoneNumber: '',
				service: option1,
				specification: '',
				message: ''
			};
		} catch (error) {
			console.error('Failed to send email:', error);
			submitMessage = submitError;
		} finally {
			isSubmitting = false;
		}
	}

	// Store the current option1 to detect language changes
	let currentOption1 = option1;
	
	// Reactive statement to update service when language changes
	$: if (option1 !== currentOption1) {
		// Language has changed, reset service to new default
		if (formData.service === currentOption1) {
			formData.service = option1;
		}
		currentOption1 = option1;
	}

	// Reactive statement to clear specification when service changes
	$: if (formData.service === option1 || formData.service === '') {
		formData.specification = '';
	}

</script>

<section class="contact-section margin-section">
	<div class="container">
		<h2 class="section-title">{title}</h2>
		<p class="section-description">
			{description}
		</p>

		<form class="contact-form" on:submit={handleSubmit}>
			<div class="form-group">
				<label for="fullName" class="form-label">{fullNameTag}</label>
				<input
					type="text"
					id="fullName"
					class="form-input"
					class:error={errors.fullName}
					bind:value={formData.fullName}
					placeholder={phFullName}
				/>
				{#if errors.fullName}
					<span class="error-message">{errors.fullName}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="email" class="form-label">{emailTag}</label>
				<input
					type="email"
					id="email"
					class="form-input"
					class:error={errors.email}
					bind:value={formData.email}
					placeholder={phEmail}
				/>
				{#if errors.email}
					<span class="error-message">{errors.email}</span>
				{/if}
			</div>

			<div class="form-group">
				<label for="phoneNumber" class="form-label"
					>{phoneTag} <span class="optional">{optionalTag}</span></label
				>
				<input
					type="tel"
					id="phoneNumber"
					class="form-input"
					bind:value={formData.phoneNumber}
					placeholder={phPhone}
				/>
			</div>

			<div class="form-group">
				<label for="service" class="form-label">{serviceTag}</label>
				<select
					id="service"
					class="form-select"
					class:error={errors.service}
					bind:value={formData.service}
				>
					<option value={option1}>{option1}</option>
					<option value={option2}>{option2}</option>
					<option value={option3}>{option3}</option>
					<option value={option4}>{option4}</option>
					<option value={option5}>{option5}</option>
					<option value={option6}>{option6}</option>
				</select>
				{#if errors.service}
					<span class="error-message">{errors.service}</span>
				{/if}
			</div>

			{#if formData.service && formData.service !== option1}
				<div class="form-group">
					<label for="specification" class="form-label">{specifyTag}</label>
					<input
						type="text"
						id="specification"
						class="form-input"
						bind:value={formData.specification}
						placeholder={phSpecify}
						maxlength="80"
					/>
					<div class="character-count">
						{formData.specification.length}/80 {characters}
					</div>
				</div>
			{/if}

			<div class="form-group">
				<label for="message" class="form-label">{messageTag}</label>
				<textarea
					id="message"
					class="form-textarea"
					class:error={errors.message}
					bind:value={formData.message}
					placeholder={phMessage}
					rows="5"
				></textarea>
				{#if errors.message}
					<span class="error-message">{errors.message}</span>
				{/if}
			</div>

			<button type="submit" class="submit-btn mint-btn" disabled={isSubmitting}>
				<span class="link-mint-btn">{isSubmitting ? buttonSending : buttonAlways}</span>
			</button>

			{#if submitMessage}
				<div
					class="submit-message"
					class:success={submitMessage.includes('successfully')}
					class:error={submitMessage.includes('error')}
				>
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
		padding: var(--spacing3) var(--spacing3);
		background: var(--bg-color);
	}

	.container {
		max-width: 800px;
		width: 100%;
	}

	.section-title {
		font: var(--h2);
		color: var(--text-color);
		margin-bottom: var(--spacing5);
		text-align: center;
	}

	.section-description {
		font: var(--p);
		color: hsl(from var(--text-color) h s calc(l - 15));
		margin-bottom: var(--spacing5);
		max-width: 800px;
		margin-left: auto;
		margin-right: auto;
	}

	.contact-form {
		text-align: left;
		background: hsl(from var(--bg-color) h s calc(l + 1));
		padding: var(--spacing5);
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
		font-family: var(--ff2);
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
		.contact-section {
			padding: var(--spacing0) var(--spacing3);
			margin: var(--spacing0);
		}
		.section-title {
			font-size: 2.5rem;
			margin-bottom: var(--spacing4);
		}
		.section-description {
			margin-bottom: var(--spacing4);
		}
		.contact-form {
			padding: var(--spacing3);
		}
		.form-group {
			margin-bottom: var(--spacing2);
		}
		.form-input,
		.form-textarea,
		.form-select {
			padding: var(--spacing2);
		}
	}
</style>
