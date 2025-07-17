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

<div class="list-cards-section">
	<h1>{titleSection}</h1>
	<div class="cards-column margin5 flex">
		<div class="full-card margin5 flex">
			<div class="card-fill margin5 flex">
				<div class="img-container">
					<img src={img} class="big-logo" alt={altText} />
				</div>
				<div class="elem-body">
					<h3 class="elem-title">{heading1}</h3>
					<h4 class="elem-place-date">{placeAndDate1}</h4>
					<p class="elem-text">{details1}</p>
				</div>
			</div>
		</div>
		<div class="full-card margin5 flex">
			<div class="card-fill margin5 flex">
				<div class="img-container">
					<img src={img2} class="small-logo" alt={altText2} />
				</div>
				<div class="elem-body">
					<h3 class="elem-title">{heading2}</h3>
					<h4 class="elem-place-date">{placeAndDate2}</h4>
					<p class="elem-text">{details2}</p>
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
		margin: var(--spacing2) var(--spacing2);
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
	.img-container {
		width: 25%;
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
		margin: auto;
		width: 80%;
		max-width: 1000px;
		align-items: center;
	}
</style>
