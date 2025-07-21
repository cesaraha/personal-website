<script>
	// Props for customization
	export let name;
	export let title;
	export let paragraph1;
	export let paragraph2;
	export let profileImage;
</script>

<section class="about-section margin-section test-bg-section">
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
		border: 4px solid var(--accent-color);
		box-shadow: 0 8px 32px hsl(from var(--accent-color) h s calc(l - 20%));
		transition: transform 0.3s ease;
	}

	.content {
		flex: 1;
		text-align: left;
	}

	.name {
		font: var(--h1);
		color: var(--text-color);
		margin-bottom: var(--spacing4);
		letter-spacing: -0.02em;
	}

	.title {
		font: var(--h3);
		color: hsl(from var(--text-color) h s calc(l - 20%));
		margin-bottom: var(--spacing3);
	}

	.first-paragraph {
		margin-bottom: var(--spacing2);
	}

	.description p {
		font: var(--p);
		color: hsl(from var(--text-color) h s calc(l - 10));
	}

	/* Responsive design */
	@media (max-width: 768px) {
		.about-section {
			padding: var(--spacing3);
		}

		.main-content {
			flex-direction: column;
			text-align: center;
		}

		.content {
			text-align: center;
		}

		.profile-image {
			width: 280px;
			height: 280px;
		}

		.name {
			font: var(--h1);
			font-size: 2.5rem;
		}

		.title {
			font: var(--h2);
			font-size: 1.3rem;
		}

		.description p {
			font: var(--p);
			font-size: 1rem;
		}
	}

	@media (max-width: 480px) {
    .main-content {
		gap: var(--spacing3);
	}
    .about-section {
		  padding: var(--spacing4) var(--spacing4) 0 var(--spacing4);
	  }
		.profile-image {
			width: 220px;
			height: 220px;
		}

		.name {
			font: var(--h1);
			font-size: 2rem;
      margin: var(--spacing0) 0;
		}

		.title {
			font: var(--h2);
			font-size: 1.2rem;
      margin: var(--spacing3) 0 var(--spacing3) 0;
		}
		.description {
		margin-bottom: 0;
	}
	}
</style>
