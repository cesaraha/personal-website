<script>
	export let construction_line1;
	export let construction_line2;
</script>

<div class="top-navigation">
	<a href={'/'} class="logo-link">
		<img class="logo" src="img/caha-logo-mint.png" alt="Caha logo" />
	</a>
</div>
<div class="construction-container">
	<span class="overlay"></span>
	<img src="/img/construction.png" class="construction-background" alt="Construction site" />
	<div class="text-overlay">
		<h1 class="name-option blue-text">
			<span class="line1">{construction_line1}</span>
			<span class="line2">{construction_line2}</span>
		</h1>
	</div>
</div>

<style>
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
    .logo:hover {
        transform: scale(1.05);
    }
	.construction-container {
		position: relative;
		width: 100vw;
		height: 100vh;
		overflow: hidden;
	}

	.construction-background {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover; /* Default behavior for horizontal screens */
		object-position: center center; /* Keep center visible */
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 1000;
		transition: opacity 0.3s ease;
		background-color: hsl(from var(--bg-color) h s l / 0.6);
	}
	.text-overlay {
		width: 90%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		z-index: 1001;
		font-size: 2rem;
		font-weight: bold;
		text-align: center;
		text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
		transition: opacity 0.3s ease;
		pointer-events: none;
		padding: 0 10px;
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.line1,
	.line2 {
		display: block;
	}

	/* For vertical screens (mobile/tablet portrait) - show full image respecting aspect ratio */
	@media screen and (max-aspect-ratio: 1/1) {
		.construction-background {
			object-fit: cover; /* Show full image, may have letterboxing */
		}
	}

	/* For very tall vertical screens - ensure it covers the width */
	@media screen and (max-aspect-ratio: 1280/1902) {
		.construction-background {
			object-fit: cover; /* Cover the screen, may crop top/bottom */
		}
	}

	/* For horizontal screens (desktop/laptop/tablet landscape) - crop to show center */
	@media screen and (min-aspect-ratio: 1/1) {
		.construction-background {
			object-fit: cover; /* Cover the screen, will crop sides */
			object-position: center center; /* Keep center visible */
		}
	}

	/* Alternative approach if you want more control over the cropping */
	@media screen and (min-aspect-ratio: 16/9) {
		.construction-background {
			object-fit: cover;
			object-position: center center;
		}
	}

    
	@media (max-width: 480px) {
		.text-overlay .name-option {
			font-size: 3rem;
		}
	}
	@media (min-width: 480px) {
		.text-overlay .name-option {
			font-size: 4rem;
		}
	}
    @media (min-width: 768px) {
		.text-overlay .name-option {
			font-size: 6rem;
		}
	}
</style>
