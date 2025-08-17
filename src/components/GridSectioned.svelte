<script>
	export let titleSection;
	export let nameSection1;
	export let nameSection2;
	export let nameSection3;
	export let nameSection4;

	// Define the cards for each section - icons will be passed as Svelte components
	export let section1Cards;
	export let section2Cards;
	export let section3Cards;
	export let section4Cards;
</script>

<div class="grid-section margin-section">
	<h1 class="section-title">{titleSection}</h1>
	<div class="each-section">
		<h5 class="name-section">{nameSection1}</h5>
		<div class="container-squares">
			{#each section1Cards as card}
				<div class="card">
					<div class="card-icon">
						<svelte:component this={card.icon} />
					</div>
					<div class="card-title">{card.title}</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="each-section">
		<h5 class="name-section">{nameSection2}</h5>
		<div class="container-squares">
			{#each section2Cards as card}
				<div class="card">
					<div class="card-icon">
						<svelte:component this={card.icon} />
					</div>
					<div class="card-title">{card.title}</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="each-section">
		<h5 class="name-section">{nameSection3}</h5>
		<div class="container-squares">
			{#each section3Cards as card}
				<div class="card">
					<div class="card-icon">
						<svelte:component this={card.icon} />
					</div>
					<div class="card-title">{card.title}</div>
				</div>
			{/each}
		</div>
	</div>
	<div class="each-section">
		<h5 class="name-section">{nameSection4}</h5>
		<div class="container-squares">
			{#each section4Cards as card}
				<div class="card">
					<div class="card-icon">
						<svelte:component this={card.icon} />
					</div>
					<div class="card-title">{card.title}</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.grid-section {
		max-width: 1200px;
		margin: 0 auto var(--spacing5) auto;
	}
	.name-section {
		margin-bottom: var(--spacing3);
	}
	.each-section {
		padding: var(--spacing3) var(--spacing4);
		border: 2px solid var(--text-color);
		border-radius: var(--spacing2);
		margin: 0 var(--spacing5) var(--spacing4) var(--spacing5);
		position: relative;
		z-index: 1;
	}

	.each-section::before,
	.each-section:after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: 50%;
		left: 50%;
		top: 50%;
		translate: -50% -50%;
		border-radius: var(--spacing2);
		z-index: -2;
		background-color: hsl(from var(--text-color) h s calc(l + 10));
		/*
		background-image: conic-gradient(from var(--angle), transparent, var(--accent-color));
		animation: 3s spin linear infinite;
		*/
	}
	.each-section::before {
		filter: blur(var(--spacing2));
		opacity: 0.5;
	}

	.each-section::after {
		/* Solid background to block the glow from affecting the button */
		background-color: var(--bg-color);
		z-index: -1;
	}

	.container-squares {
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		gap: var(--spacing4);
	}

	.card {
		min-height: 150px;
		max-height: 200px;

		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		padding: var(--spacing1) var(--spacing1);

		background: var(--text-color);
		border: 2px solid var(--text-color);
		border-radius: var(--spacing2);

		transition: all 0.3s ease;
	}

	.card:hover {
		transform: scale(1.02);
		box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
	}

	.card-icon {
		width: 60px;
		height: 60px;
		margin-bottom: 0.75rem;
		color: var(--bg-color);
	}

	.card-icon :global(svg) {
		width: 100%;
		height: 100%;
		fill: currentColor; /* Uses the color property from .card-icon */
	}

	.card-title {
		font-size: var(--p);
		text-align: center;
		color: var(--bg-color);
	}

	/* Responsive breakpoints */
	@media (max-width: 1200px) {
		.container-squares {
			grid-template-columns: repeat(3, 1fr); /* 3 cards per row */
		}
	}

	@media (max-width: 768px) {
		.container-squares {
			grid-template-columns: repeat(2, 1fr); /* 2 cards per row */
		}
	}

	@media (max-width: 480px) {
		.container-squares {
			grid-template-columns: 1fr; /* 1 card per row */
			gap: 0.75rem;
		}
	}
</style>
