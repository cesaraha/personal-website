<script>
	// Props for customization
	export let name;
	export let title;
	export let paragraph1;
	export let paragraph2;
	export let profileImage;
</script>

<section class="about-section margin-section">
	<div class="container">
		<div class="main-content">
			<div class="profile-image-container">
				<img src={profileImage} alt={name} class="profile-image" />
			</div>
			<div class="content">
				<h1 class="name">{name}</h1>
				<h3 class="title">{title}</h3>
				<div class="description">
					<p class="first-paragraph">{paragraph1}</p>
					<p class="second-paragraph">{paragraph2}</p>
				</div>
			</div>
		</div>
	</div>
</section>

<style>
	.about-section {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: var(--spacing5);
	}

	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		align-items: center;
		text-wrap: justify;
	}

	.main-content {
		display: flex;
		flex-direction: row;
		align-items: center;
		gap: var(--spacing5);
		width: 100%;
		padding: var(--spacing3) var(--spacing5);
	}

	.profile-image-container {
		position: relative;
		flex-shrink: 0;
	}

	.profile-image {
		width: 350px;
		height: 350px;
		border-radius: 50%;
		object-fit: cover;
		border: 4px solid var(--text-color);
		box-shadow: 0 8px 32px hsl(from var(--accent-color) h s calc(l - 20%));
		transition: transform 0.3s ease;
	}

	.content {
		flex: 1;
		text-align: left;
	}

	.name {
		margin-bottom: var(--spacing4);
	}

	.title {
		margin-bottom: var(--spacing3);
	}

	.first-paragraph {
		margin-bottom: var(--spacing2);
	}

	.description p {
		color: hsl(from var(--text-color) h s calc(l - 5));
	}

	/* Responsive design */
	@media (max-width: 950px) {
		.about-section {
			width: 100%;
			padding: 0;
			margin-bottom: var(--spacing4);
		}

		.main-content {
			width: 95%;
			flex-direction: column;
			text-align: center;
			padding: 0 calc(var(--spacing4) + var(--spacing2)) var(--spacing5);
		}

		.name,
		.title {
			text-align: center;
		}

		.description {
			text-align: left;
			text-wrap: justify;
		}

		.profile-image {
			width: 270px;
			height: 270px;
		}
	}

	@media (max-width: 600px) {
		.about-section {
			width: 100%;
			padding: 0;
			margin: var(--spacing2) 0 var(--spacing5) 0;
		}

		.main-content {
			gap: var(--spacing4);
			width: 100%;
		}
		
		.profile-image {
			width: 220px;
			height: 220px;
		}

		.name {
			margin: var(--spacing0) 0;
		}

		.title {
			margin: var(--spacing3) 0 var(--spacing3) 0;
		}
		.description {
			margin-bottom: 0;
			text-wrap: balance;
		}
	}
</style>
