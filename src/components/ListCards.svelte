<script>
	export let titleSection;
	export let heading1;
	export let placeAndDate1;
	export let details1;
	export let img;
	export let altText;
	export let heading2;
	export let placeAndDate2;
	export let details2;
	export let img2;
	export let altText2;
</script>

<div class="list-cards-section margin-section test-bg-section">
	<h1 class="section-title">{titleSection}</h1>
	<div class="cards-column">
		<div class="full-card">
			<div class="card-fill">
				<div class="img-container">
					<img src={img} class="big-logo" alt={altText} />
				</div>
				<div class="elem-body long-card-text">
					<h4 class="elem-title">{heading1}</h4>
					<h5 class="elem-place-date">{placeAndDate1}</h5>
					<p class="elem-text">{details1}</p>
				</div>
			</div>
		</div>
		<div class="full-card">
			<div class="card-fill">
				<div class="img-container">
					<img src={img2} class="small-logo" alt={altText2} />
				</div>
				<div class="elem-body long-card-text">
					<h4 class="elem-title">{heading2}</h4>
					<h5 class="elem-place-date">{placeAndDate2}</h5>
					<p class="elem-text">{details2}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.cards-column {
		display: block;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.full-card {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: auto;
		margin: var(--spacing2) auto;
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		flex: 1 1 0;
		border-radius: var(--spacing3);
		align-self: flex-start;
	}
	.card-fill {
		position: relative;
		display: flex;
		width: 95%;
		min-height: 180px;
		margin: 0 auto;
		background-color: var(--bg-color);
		border-radius: var(--spacing4) var(--spacing4) 0 var(--spacing4);
		/*remove border if animation is added */
		border: 1px solid white; 
	}
	.img-container {
		width: 20%;
		max-width: 180px;
		min-width: 50px;
		padding: var(--spacing3);
		display: block;
		margin: auto;
	}
	.img-container img.big-logo {
		max-height: 75%;
		max-width: 75%;
		display: block;
		margin: auto;
	}
	.elem-body {
		display: block;
		margin: 0 auto;
		width: 80%;
		max-width: 1000px;
		align-items: center;
	}
	.elem-place-date {
		margin-top: var(--spacing1);
	}
	.elem-text {
		margin-top: var(--spacing2);
	}
	.img-container::before,
	.img-container::after {
        content: '';
		height: 100%;
		width: 1px;
        position: absolute;
        top: 0%;
		left: 20%;
        pointer-events: none;
		background-color: var(--text-color);
    }

	.card-fill::before,
	.card-fill:after {
		content: '';
		position: absolute;
		height: 100%;
		width: 100%;
		top: 50%;
		left: 50%;
		top: 50%;
        translate: -50% -50%;
		border-radius: var(--spacing4) var(--spacing4) 0 var(--spacing4);
		z-index: -1;
		padding: 0;
		background-color: var(--accent-color);
		/*
		background-image: conic-gradient(from var(--angle), transparent, var(--accent-color));
		animation: 3s spin linear infinite;
		*/
	}
	.card-fill::before {
		filter: blur(var(--spacing2));
		opacity: 0.5;
	}
	/*
	@property --angle {
		syntax: "<angle>";
		initial-value: 0deg;
		inherits: false;
	}

	@keyframes spin {
		from {
			--angle: 0deg;
		}
		to {
			--angle: 360deg;
		}
	}
		*/
</style>
