<script>
	export let backgroundImage;
	export let firstLine;
	export let secondLine;
	export let cta1 = '';
	export let ctaLink1 = '';
	export let cta2 = '';
	export let ctaLink2 = '';
</script>

<section class="hero-section" style="background-image: url({backgroundImage})">
	<div class="hero-overlay">
		<div class="hero-content">
			<h1 class="hero-phrase">
				<span class="first-line">{firstLine}</span>
				<span class="second-line">{secondLine}</span>
			</h1>
			<div class="container-buttons">
				<a href={ctaLink1} class="blue-btn">
                    <span class="link-blue-btn">{cta1}</span>
                </a>
				<a href={ctaLink2} class="accent-btn">
                    <span class="link-accent-btn">{cta2}</span>
                </a>
			</div>
		</div>
	</div>
</section>

<style>
	.hero-section {
		width: 100%;
		height: 100vh;
		background-size: cover;
		background-position: center;
		background-repeat: no-repeat;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.hero-overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: hsl(from var(--bg-color) h s l / 0.6);
		display: flex;
		align-items: center;
		justify-content: flex-start;
		padding-left: var(--spacing5);
        padding-right: var(--spacing5);
	}

	.hero-content {
		display: block;
		text-align: left;
		max-width: none;
		padding: 0;
	}

	.hero-phrase {
		font-family: 'Tanker-Regular', sans-serif;
		margin-bottom: var(--spacing4);
		line-height: 1.2;
		width: 100%;
		max-width: 800px;
	}

	.first-line {
		color: var(--text-color);
		display: block;
		margin-bottom: var(--spacing1);
		font: 700 clamp(2.3rem, calc(3.5vw + 1rem), 3.8rem)/1em var(--ff-primary);
		text-shadow:
			2px 2px 4px rgba(255, 255, 255, 0.8),
			4px 4px 8px rgba(0, 0, 0, 0.6),
			0 0 20px rgba(0, 0, 0, 0.4);
	}

	.second-line {
		color: var(--accent-color);
		display: block;
		font: 700 clamp(3rem, calc(4.7vw + 1rem), 6rem)/1em var(--ff-primary);
		text-shadow:
			2px 2px 4px rgba(0, 0, 0, 0.8),
			4px 4px 8px rgba(0, 0, 0, 0.6),
			0 0 20px rgba(255, 255, 255, 0.4),
			0 0 40px hsl(from var(--accent-color) h s calc(l - 30));
	}
	.container-buttons {
		display: flex;
		gap: var(--spacing3);
        width: 100%;
	}

	/* Responsive adjustments */
	@media (max-width: 768px) {
		.first-line {
			/* font-size: 2rem; */
			text-shadow:
				2px 2px 4px rgba(255, 255, 255, 0.8),
				3px 3px 6px rgba(0, 0, 0, 0.6),
				0 0 15px rgba(0, 0, 0, 0.4);
		}

		.second-line {
			/* font-size: 3rem; */
			text-shadow:
				2px 2px 4px rgba(0, 0, 0, 0.8),
				3px 3px 6px rgba(0, 0, 0, 0.6),
				0 0 15px rgba(255, 255, 255, 0.4),
				0 0 30px hsl(from var(--accent-color) h s calc(l - 30));
		}

		.hero-overlay {
			padding-left: var(--spacing4);
            padding-right: var(--spacing4);
		}
	}

	@media (max-width: 480px) {
		.first-line {
			/* font-size: 1.5rem; */
			text-shadow:
				1px 1px 2px rgba(255, 255, 255, 0.8),
				2px 2px 4px rgba(0, 0, 0, 0.6),
				0 0 10px rgba(0, 0, 0, 0.4);
		}

		.second-line {
			text-shadow:
				1px 1px 2px rgba(0, 0, 0, 0.8),
				2px 2px 4px rgba(0, 0, 0, 0.6),
				0 0 10px rgba(255, 255, 255, 0.4),
				0 0 15px hsl(from var(--accent-color) h s calc(l - 20));
		}

		.hero-overlay {
			padding-left: var(--spacing3);
            padding-right: var(--spacing3);
		}

		.hero-section {
			height: 80vh;
		}
	}
</style>
