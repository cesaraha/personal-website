<script lang="ts">
	export let titleSection;
	export let heading1;
	export let details1;
	export let fullDescription1;
	export let img1;
	export let ref1;
	export let isDisabled1;
	export let heading2;
	export let details2;
	export let fullDescription2;
	export let img2;
	export let ref2;
	export let isDisabled2;
	export let heading3;
	export let details3;
	export let fullDescription3;
	export let img3;
	export let ref3;
	export let isDisabled3;
	export let heading4;
	export let details4;
	export let fullDescription4;
	export let img4;
	export let ref4;
	export let isDisabled4;
	export let heading5;
	export let details5;
	export let fullDescription5;
	export let img5;
	export let ref5;
	export let isDisabled5;
	export let heading6;
	export let details6;
	export let fullDescription6;
	export let img6;
	export let ref6;
	export let isDisabled6;
	export let heading7;
	export let details7;
	export let fullDescription7;
	export let img7;
	export let ref7;
	export let isDisabled7;
	export let readMore;
	export let viewOnGithub;

	// Define the project type
	interface Project {
		title: string;
		description: string;
		image: string;
	}

	// Modal state
	let showModal = false;
	let currentProject: Project | null = null;

	function openModal(project: Project) {
		currentProject = project;
		showModal = true;
		document.body.style.overflow = 'hidden'; // Prevent background scrolling
	}

	function closeModal() {
		showModal = false;
		currentProject = null;
		document.body.style.overflow = ''; // Restore scrolling
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape') {
			closeModal();
		}
	}

	function handleOverlayClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			closeModal();
		}
	}
</script>

<svelte:window on:keydown={handleKeydown} />

<div class="card-section margin-section">
	<h1 class="section-title">{titleSection}</h1>
	<div class="card-group">
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img1} class="card-img" alt="Project" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading1}</h5>
					<p class="card-text">{details1}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading1,
									description: fullDescription1,
									image: img1
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled1 ? '#' : ref1}
							class="accent-btn {isDisabled1 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled1 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled1}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img2} class="card-img" alt="Project2" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading2}</h5>
					<p class="card-text">{details2}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading2,
									description: fullDescription2,
									image: img2
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled2 ? '#' : ref2}
							class="accent-btn {isDisabled2 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled2 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled2}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img3} class="card-img" alt="Project3" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading3}</h5>
					<p class="card-text">{details3}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading3,
									description: fullDescription3,
									image: img3
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled3 ? '#' : ref3}
							class="accent-btn {isDisabled3 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled3 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled3}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img4} class="card-img" alt="Project4" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading4}</h5>
					<p class="card-text">{details4}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading4,
									description: fullDescription4,
									image: img4
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled4 ? '#' : ref4}
							class="accent-btn {isDisabled4 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled4 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled4}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img5} class="card-img" alt="Project5" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading5}</h5>
					<p class="card-text">{details5}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading5,
									description: fullDescription5,
									image: img5
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled5 ? '#' : ref5}
							class="accent-btn {isDisabled5 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled5 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled5}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img6} class="card-img" alt="Project6" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading6}</h5>
					<p class="card-text">{details6}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading6,
									description: fullDescription6,
									image: img6
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled6 ? '#' : ref6}
							class="accent-btn {isDisabled6 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled6 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled6}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div class="card-link-wrapper">
			<div class="card">
				<div class="image-content">
					<span class="overlay"></span>
					<div class="card-image">
						<img src={img7} class="card-img" alt="Project7" />
					</div>
				</div>
				<div class="card-content">
					<h5 class="card-title">{heading7}</h5>
					<p class="card-text">{details7}</p>
					<div class="button-group">
						<button
							class="blue-btn"
							on:click={() =>
								openModal({
									title: heading7,
									description: fullDescription7,
									image: img7
								})}
						>
							<span class="link-blue-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled7 ? '#' : ref7}
							class="accent-btn {isDisabled7 ? 'accent-btn-disabled' : ''}"
							on:click={isDisabled7 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled7}
							target="_blank"
						>
							<span class="link-accent-btn">{viewOnGithub}</span>
						</a>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

{#if showModal && currentProject}
	<div
		class="modal-overlay"
		on:click={handleOverlayClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		tabindex="-1"
	>
		<div class="modal-content">
			<button class="modal-close" on:click={closeModal} aria-label="Close modal">
				<svg
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M18 6L6 18M6 6L18 18"
						stroke="currentColor"
						stroke-width="2"
						stroke-linecap="round"
						stroke-linejoin="round"
					/>
				</svg>
			</button>

			<div class="modal-header">
				<img src={currentProject.image} alt={currentProject.title} class="modal-image" />
				<h2 class="modal-title">{currentProject.title}</h2>
			</div>

			<div class="modal-body">
				<p class="modal-description">{currentProject.description}</p>
			</div>
		</div>
	</div>
{/if}

<style>
	.card-section {
		text-wrap: balance;
	}
	.card-group {
		display: flex;
		flex-wrap: wrap;
		justify-content: center;
		align-items: stretch;
		gap: clamp(var(--spacing2), 3vw, var(--spacing3));
	}
	
	.card-group,
	.card > * {
		flex: 1;
		width: 100%;
	}

	.card-link-wrapper {
		display: flex;
		text-decoration: none;
		color: inherit;
		flex: 1 1 calc(33% - var(--spacing3));
		max-width: calc(33% - var(--spacing3));
		min-width: 280px;
	}
	.card {
		width: 100%;
		min-height: clamp(300px, 40vh, 400px);
		background: hsl(from var(--bg-color) h s calc(l + 2));
		border-radius: clamp(var(--spacing2), 2vw, var(--spacing3));
		transition: all 0.3s ease;
		backdrop-filter: blur(var(--spacing2));
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		gap: clamp(var(--spacing1), 2vw, var(--spacing2));
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.card:hover {
		transform: scale(1.02);
		background: hsl(from var(--bg-color) h s calc(l + 3));
		border-color: var(--text-color);
		box-shadow: 0 var(--spacing2) var(--spacing4) rgba(0, 0, 0, 0.4);
	}

	.image-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		position: relative;
		height: clamp(130px, 20vh, 180px);
		padding: clamp(var(--spacing1), 3vw, var(--spacing2)) 0;
		z-index: 1000;
		flex-shrink: 0;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--text-color);
		border-radius: clamp(calc(var(--spacing2) - 1px), calc(2vw - 1px), calc(var(--spacing3) - 1px))
			clamp(calc(var(--spacing2) - 1px), calc(2vw - 1px), calc(var(--spacing3) - 1px)) 0
			clamp(calc(var(--spacing2) - 1px), calc(2vw - 1px), calc(var(--spacing3) - 1px));
	}
	.overlay::before,
	.overlay::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: max(-25px, -4vw);
		height: min(25px, 4vw);
		width: min(25px, 4vw);
		background-color: var(--text-color);
	}
	.overlay::after {
		border-radius: 0 clamp(var(--spacing2), 2vw, var(--spacing3)) 0 0;
		background-color: hsl(from var(--bg-color) h s calc(l + 2));
	}
	.card-image {
		position: relative;
		width: clamp(100px, 15vw, 150px);
		height: clamp(100px, 15vw, 150px);
		border-radius: 50%;
		background-color: var(--bg-color);
		padding: 1px;
		z-index: 1;
	}
	.card-image .card-img {
		height: 100%;
		width: 100%;
		object-fit: cover;
		border-radius: 50%;
		border: var(--spacing0) solid var(--bg-color);
	}
	.card-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 0 clamp(var(--spacing1), 2vw, var(--spacing2))
			clamp(var(--spacing2), 3vw, var(--spacing3)) clamp(var(--spacing1), 2vw, var(--spacing2));
		text-align: center;
		flex-grow: 1;
		width: 100%;
		box-sizing: border-box;
		justify-content: space-between;
		z-index: 1000;
	}
	.card-title {
		color: var(--text-color);
		margin-bottom: clamp(var(--spacing1), 2vw, var(--spacing2));
		padding: 0;
		min-height: auto;
		flex-shrink: 0;
	}
	.card-text {
		color: hsl(from var(--text-color) h s calc(l - 15));
		flex-grow: 1;
		margin: 0 clamp(var(--spacing0), 1.25vw, var(--spacing1))
			clamp(var(--spacing2), 3vw, var(--spacing3)) clamp(var(--spacing0), 1.25vw, var(--spacing1));
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		min-height: auto;
		align-items: flex-start;
	}

	.button-group {
		display: flex;
		gap: clamp(var(--spacing1), 2vw, var(--spacing2));
		width: 100%;
		margin-top: auto;
		padding: 0;
		justify-content: center;
		flex-shrink: 0;
	}
	.button-group > * {
		flex: 1;
		max-width: 120px;
		min-width: 80px;
	}

	/* Modal styles */
	.modal-overlay {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 10000;
		padding: var(--spacing3);
	}

	.modal-content {
		background: var(--bg-color);
		border-radius: var(--spacing3);
		max-width: 600px;
		width: 100%;
		max-height: 80vh;
		overflow-y: auto;
		position: relative;
		box-shadow: 0 20px 60px rgba(0, 0, 0, 0.4);
		border: 1px solid hsl(from var(--text-color) h s calc(l - 20) / 0.3);
	}

	.modal-close {
		position: absolute;
		top: var(--spacing3);
		right: var(--spacing3);
		background: none;
		border: none;
		color: var(--text-color);
		cursor: pointer;
		width: 40px;
		height: 40px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: 50%;
		transition: all 0.3s ease;
		z-index: 1;
	}

	.modal-close:hover {
		background: hsl(from var(--text-color) h s calc(l - 20) / 0.1);
		color: var(--text-color);
	}

	.modal-header {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing4) var(--spacing4) var(--spacing3) var(--spacing4);
		text-align: center;
	}

	.modal-image {
		width: 120px;
		height: 120px;
		border-radius: 50%;
		object-fit: cover;
		margin-bottom: var(--spacing3);
		border: 4px solid var(--text-color);
	}

	.modal-title {
		color: var(--text-color);
		margin: 0;
		font-size: 1.8rem;
	}

	.modal-body {
		padding: 0 var(--spacing4) var(--spacing4) var(--spacing4);
	}

	.modal-description {
		color: var(--text-color);
		line-height: 1.6;
		font: var(--p);
		margin: 0;
	}

	/* Responsive design */
	@media (max-width: 950px) {
		.card-section {
			padding: var(--spacing5) var(--spacing3);
			margin-top: var(--spacing6);
		}

		.card-link-wrapper {
			flex: 1 1 calc(40% - var(--spacing2));
			max-width: calc(40% - var(--spacing2));
			min-width: 230px;
		}
		.card {
			margin: 0 auto;
		}
		.card-title {
			font: 500 clamp(0.65rem, calc(0.1vw + 1rem), 1.95rem)/1.4em var(--ff-primary);
		}
		.card-text {
			font: clamp(0.45rem, 0.70rem, 1rem)/1.5em var(--ff-secondary);
		}
		.link-blue-btn,
		.link-accent-btn {
			font: clamp(0.45rem, 0.75rem, 1rem)/1.5em var(--ff-secondary);
		}
	}
	@media (max-width: 600px) {
		.card-section {
			margin: var(--spacing4) auto;
			padding: 0 var(--spacing2);
		}

		.card-group {
			gap: var(--spacing2);
		}
		.card-link-wrapper {
			flex: 1 1 100%;
			max-width: 100%;
			min-width: 240px;
		}
		.card {
			min-height: 360px;
		}

		.image-content {
			padding: var(--spacing1) 0;
		}

		.card-content {
			padding: var(--spacing0) var(--spacing0) var(--spacing2) var(--spacing0);
		}

		.card-title {
			font: 500 clamp(0.65rem, 1.375rem, 1.95rem)/1.4em var(--ff-primary);
			padding: 0 var(--spacing2);
		}
		.card-text {
			font: clamp(0.45rem, 0.9rem, 1rem)/1.5em var(--ff-secondary);
		}
		.link-blue-btn,
		.link-accent-btn {
			font: clamp(0.45rem, 0.8rem, 1rem)/1.5em var(--ff-secondary);
		}
	}
</style>
