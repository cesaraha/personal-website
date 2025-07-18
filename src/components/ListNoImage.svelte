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

<div class="list-cards-section">
	<h1>{titleSection}</h1>
	<div class="cards-column margin5 flex">
		<div class="full-card">
			<div class="card-fill margin5 flex">
				<div class="elem-body">
					<h3 class="elem-title">{heading1}</h3>
					<h4 class="elem-place-date">{placeAndDate1}</h4>
					<p class="elem-text">{details1}</p>
				</div>
			</div>
		</div>
		<div class="full-card">
			<div class="card-fill margin5 flex">
				<div class="elem-body">
					<h3 class="elem-title">{heading2}</h3>
					<h4 class="elem-place-date">{placeAndDate2}</h4>
					<p class="elem-text">{details2}</p>
				</div>
			</div>
		</div>
		<div class="full-card">
			<div class="card-fill margin5 flex">
				<div class="elem-body">
					<h3 class="elem-title">{heading3}</h3>
					<h4 class="elem-place-date">{placeAndDate3}</h4>
					<p class="elem-text">{details3}</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.list-cards-section {
		width: 90%;
		max-width: 1080px;
		margin: var(--spacing2) auto;
	}
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
		margin: 0 var(--spacing2);
		box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
		flex: 1 1 0;
		border-radius: var(--spacing3);
		padding: var(--spacing1);
		align-self: flex-start;
	}
	.card-fill {
		display: flex;
		width: 95%;
		min-height: 180px;
		background-color: var(--grd-bg-color);
		border-radius: var(--spacing4) var(--spacing4) 0 var(--spacing4);
		border: 1px solid white;
	}
	.elem-body {
		display: block;
		margin: auto;
		width: 100%;
		max-width: 1000px;
		align-items: center;
	}
</style>
