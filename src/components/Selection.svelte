<script>
	import { currentLanguage } from '../stores/language.js';

	/**
	 * @param {'fr' | 'en' | 'sp'} lang
	 */
	function setLanguage(lang) {
		currentLanguage.set(lang);
	}

	/**
	 * @param {KeyboardEvent} event
	 * @param {'fr' | 'en' | 'sp'} lang
	 */
	function handleKeydown(event, lang) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setLanguage(lang);
		}
	}

	export let option1;
	export let option2;
	export let option3;
</script>

<div class="top-navigation">
	<img src="/img/caha-logo-blue.png" alt="Logo" class="logo" />
	<div class="language-selection">
		<button type="button"
				class="flag-button"
				class:active={$currentLanguage === 'fr'}
				on:click={() => setLanguage('fr')}
				on:keydown={(e) => handleKeydown(e, 'fr')}
				aria-label="Switch to French">
			<img src="/img/fra-lang.png" class="flag" alt="French flag" />
		</button>
		<button type="button"
				class="flag-button"
				class:active={$currentLanguage === 'en'}
				on:click={() => setLanguage('en')}
				on:keydown={(e) => handleKeydown(e, 'en')}
				aria-label="Switch to English">
			<img src="/img/eng-lang.png" class="flag" alt="English flag" />
		</button>
		<button type="button"
				class="flag-button"
				class:active={$currentLanguage === 'sp'}
				on:click={() => setLanguage('sp')}
				on:keydown={(e) => handleKeydown(e, 'sp')}
				aria-label="Switch to Spanish">
			<img src="/img/spa-lang.png" class="flag" alt="Spanish flag" />
		</button>
	</div>
</div>
<div class="full-container">
	<a href="portfolio/" class="option-selection">
		<span class="overlay white-bg"></span>
		<img src="/img/gallery.jpg" alt="Option 1" class="image-one" />
		<div class="text-overlay">
			<h3 class="name-option blue-text">{option1}</h3>
		</div>
	</a>
	<a href="development/" class="option-selection">
		<span class="overlay blue-bg"></span>
		<img src="/img/laptop.jpg" alt="Option 1" class="image-two" />
		<div class="text-overlay">
			<h3 class="name-option white-text">{option2}</h3>
		</div>
	</a>
	<a href="tutoring/" class="option-selection">
		<span class="overlay mint-bg"></span>
		<img src="/img/whiteboard.jpg" alt="Option 1" class="image-three" />
		<div class="text-overlay">
			<h3 class="name-option blue-text">{option3}</h3>
		</div>
	</a>
</div>

<style>
	/* Navigation elements */
	.top-navigation {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		z-index: 2000;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		pointer-events: none; /* Allow clicks to pass through */
		background: transparent; /* Completely transparent background */
	}

	.logo {
		width: 3rem;
		height: 3rem;
		object-fit: contain;
		pointer-events: auto;
	}

	.language-selection {
		display: flex;
		gap: 0.5rem;
		pointer-events: auto;
	}

	.flag-button {
		background: none;
		border: 2px solid transparent;
		display: inline-block;
		border-radius: 0.5rem;
		padding: 0.125rem;
		cursor: pointer;
		transition: all 0.3s ease;
	}

	.flag-button:hover,
	.flag-button:focus {
		transform: scale(1.1);
	}

	.flag-button.active {
		transform: scale(1.2);
		filter: brightness(1.2);
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
	}

	.flag {
		width: 2rem;
		height: auto;
		border-radius: 0.25rem;
		display: block;
	}
	.full-container {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 100vh;
		width: 100vw;
		gap: 0;
	}
	.option-selection {
		position: relative;
		overflow: hidden;
		cursor: pointer;
		flex: 1;
		height: 100vh;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		transition: opacity 0.3s ease;
	}
	.option-selection:hover .overlay {
		opacity: 0.2;
	}

	.mint-bg {
		background-color: hsl(from var(--accent-color) h s l / 0.6);
	}

	.blue-bg {
		background-color: hsl(from var(--bg-color) h s l / 0.6);
	}

	.white-bg {
		background-color: hsl(from var(--text-color) h s l / 0.6);
	}

	.text-overlay {
		width: 90%;
		position: absolute;
		top: 20%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1001;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
		opacity: 0;
		transition: opacity 0.3s ease;
		pointer-events: none;
		padding: 0 10px;
	}
	.blue-text {
		color: hsl(from var(--bg-color) h s calc(l + 5) / 0.8);
	}
	.white-text {
		color: var(--text-color);
	}

	.option-selection:hover .text-overlay {
		opacity: 1;
	}

	.image-one,
	.image-two,
	.image-three {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
	}

	/* Responsive design for vertical screens */
	@media screen and (max-aspect-ratio: 1/1) {
		.full-container {
			flex-direction: column;
			justify-content: center;
		}

		.option-selection {
			width: 100vw;
			height: calc(100vh / 3); /* Divide height equally */
			flex: none; /* Override flex: 1 */
		}
	}

	/* Fine-tuning for very tall screens */
	@media screen and (max-aspect-ratio: 2/3) {
		.option-selection {
			height: calc(100vh / 3);
		}
	}
	/* Show text overlay on touch devices */
	@media (hover: none) and (pointer: coarse) {
		.text-overlay {
			opacity: 1; /* Always visible on touch devices */
			font-size: 1.2rem;
			width: 95%;
			padding: 0 5px;
			top: 25%;
		}
		.text-overlay .name-option {
			font-size: 1.2rem;
		}
		/* Optional: reduce overlay opacity on touch devices for better text readability */
		.overlay {
			opacity: 0.3;
		}
	}
	@media (hover: none) and (pointer: coarse) and (max-width: 480px) {
		.text-overlay {
			width: 90%;
			padding: 0 2px;
			top: 22.5%;
		}
		.text-overlay .name-option {
			font-size: 2.4rem;
		}
	}
	@media (hover: none) and (pointer: coarse) and (min-width: 768px) {
		.text-overlay {
			width: 90%;
			top: 22.5%;
		}
		.text-overlay .name-option {
			font-size: 2.7rem;
		}
	}
	/* Mobile navigation adjustments */
	@media (max-width: 768px) {
		.top-navigation {
			padding: 0.5rem;
		}
		.logo {
			width: 2.5rem;
			height: 2.5rem;
		}
		.flag {
			width: 1.5rem;
		}
		.flag-button {
			padding: 0.2rem;
		}
	}
</style>
