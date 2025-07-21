<script>
	export let titleSection;
	export let heading1;
	export let placeAndDate1;
	export let details1;
	export let heading2;
	export let placeAndDate2;
	export let details2;
	export let heading3;
	export let placeAndDate3;
	export let details3;
</script>

<div class="list-cards-section margin-section test-bg-section">
	<h1 class="section-title">{titleSection}</h1>
	<div class="cards-column">
		<div class="full-card">
			<div class="card-fill">
				<div class="elem-body long-card-text">
					<h4 class="elem-title">{heading1}</h4>
					<h5 class="elem-place-date">{placeAndDate1}</h5>
					<p class="elem-text">{details1}</p>
				</div>
			</div>
		</div>
		<div class="full-card">
			<div class="card-fill">
				<div class="elem-body long-card-text">
					<h4 class="elem-title">{heading2}</h4>
					<h5 class="elem-place-date">{placeAndDate2}</h5>
					<p class="elem-text">{details2}</p>
				</div>
			</div>
		</div>
		<div class="full-card">
			<div class="card-fill">
				<div class="elem-body long-card-text">
					<h4 class="elem-title">{heading3}</h4>
					<h5 class="elem-place-date">{placeAndDate3}</h5>
					<p class="elem-text">{details3}</p>
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
		margin: 0 auto;
		display: flex;
		width: 95%;
		min-height: 180px;
		background-color: var(--bg-color);
		border-radius: var(--spacing4) var(--spacing4) 0 var(--spacing4);
		border: 1px solid white;
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
	.elem-body {
		display: block;
		margin: auto;
		width: 100%;
		max-width: 1000px;
		align-items: center;
	}
	.elem-place-date {
		margin-top: var(--spacing1);
	}
	.elem-text {
		margin-top: var(--spacing2);
	}
</style>
