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
							class="mint-btn"
							on:click={() =>
								openModal({
									title: heading1,
									description: fullDescription1,
									image: img1
								})}
						>
							<span class="link-mint-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled1 ? '#' : ref1}
							class="mint-btn {isDisabled1 ? 'mint-btn-disabled' : ''}"
							on:click={isDisabled1 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled1}
							target="_blank"
						>
							<span class="link-mint-btn">{viewOnGithub}</span>
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
							class="mint-btn"
							on:click={() =>
								openModal({
									title: heading2,
									description: fullDescription2,
									image: img2
								})}
						>
							<span class="link-mint-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled2 ? '#' : ref2}
							class="mint-btn {isDisabled2 ? 'mint-btn-disabled' : ''}"
							on:click={isDisabled2 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled2}
							target="_blank"
						>
							<span class="link-mint-btn">{viewOnGithub}</span>
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
							class="mint-btn"
							on:click={() =>
								openModal({
									title: heading3,
									description: fullDescription3,
									image: img3
								})}
						>
							<span class="link-mint-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled3 ? '#' : ref3}
							class="mint-btn {isDisabled3 ? 'mint-btn-disabled' : ''}"
							on:click={isDisabled3 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled3}
							target="_blank"
						>
							<span class="link-mint-btn">{viewOnGithub}</span>
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
							class="mint-btn"
							on:click={() =>
								openModal({
									title: heading4,
									description: fullDescription4,
									image: img4
								})}
						>
							<span class="link-mint-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled4 ? '#' : ref4}
							class="mint-btn {isDisabled4 ? 'mint-btn-disabled' : ''}"
							on:click={isDisabled4 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled4}
							target="_blank"
						>
							<span class="link-mint-btn">{viewOnGithub}</span>
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
							class="mint-btn"
							on:click={() =>
								openModal({
									title: heading5,
									description: fullDescription5,
									image: img5
								})}
						>
							<span class="link-mint-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled5 ? '#' : ref5}
							class="mint-btn {isDisabled5 ? 'mint-btn-disabled' : ''}"
							on:click={isDisabled5 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled5}
							target="_blank"
						>
							<span class="link-mint-btn">{viewOnGithub}</span>
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
							class="mint-btn"
							on:click={() =>
								openModal({
									title: heading6,
									description: fullDescription6,
									image: img6
								})}
						>
							<span class="link-mint-btn">{readMore}</span>
						</button>
						<a
							href={isDisabled6 ? '#' : ref6}
							class="mint-btn {isDisabled6 ? 'mint-btn-disabled' : ''}"
							on:click={isDisabled6 ? (e) => e.preventDefault() : null}
							aria-disabled={isDisabled6}
							target="_blank"
						>
							<span class="link-mint-btn">{viewOnGithub}</span>
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
    <button 
      class="modal-close" 
      on:click={closeModal} 
      aria-label="Close modal"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
		gap: var(--spacing3);
	}
	.card-group,
	.card > * {
		flex: 1;
		min-width: 250px;
	}
	.card-link-wrapper {
		display: flex;
		text-decoration: none;
		color: inherit;
		flex: 1 1 320px;
		max-width: 320px;
	}
	.card {
		width: 100%;
		min-height: 450px;
		background: hsl(from var(--bg-color) h s calc(l + 2));
		border: 1px solid hsl(from var(--accent-color) h s calc(l - 20) / 0.3);
		border-radius: var(--spacing3);
		transition: all 0.3s ease;
		backdrop-filter: blur(var(--spacing2));
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
		overflow: hidden;
		gap: var(--spacing2);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	.card:hover {
		transform: scale(1.02);
		background: hsl(from var(--bg-color) h s calc(l + 3));
		border-color: var(--accent-color);
		box-shadow: 0 var(--spacing2) var(--spacing4) rgba(0, 0, 0, 0.4);
	}
	.image-content,
	.card-content {
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: var(--spacing3) var(--spacing3);
		z-index: 1000;
	}
	.image-content {
		position: relative;
		row-gap: var(--spacing2);
		padding: var(--spacing2) 0;
	}
	.overlay {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: var(--accent-color);
		border-radius: var(--spacing3) var(--spacing3) 0 var(--spacing3);
	}
	.overlay::before,
	.overlay::after {
		content: '';
		position: absolute;
		right: 0;
		bottom: -40px;
		height: 40px;
		width: 40px;
		background-color: var(--accent-color);
	}
	.overlay::after {
		border-radius: 0 var(--spacing3) 0 0;
		background-color: hsl(from var(--bg-color) h s calc(l + 2));
	}
	.card-image {
		position: relative;
		width: 150px;
		height: 150px;
		border-radius: 50%;
		background-color: var(--bg-color);
		padding: 2px;
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
		padding: 0 var(--spacing1) var(--spacing1) var(--spacing1);
		text-align: center;
		flex-grow: 1;
		height: var(--spacing7);
	}
	.card-title {
		color: var(--text-color);
		align-items: flex-start;
		min-height: 70px;
	}
	.card-text {
		font: var(--p);
		color: hsl(from var(--text-color) h s calc(l - 15));
		flex-grow: 1;
		margin: var(--spacing1) var(--spacing1) var(--spacing2) var(--spacing1);
		display: -webkit-box;
		-webkit-box-orient: vertical;
		text-overflow: ellipsis;
		min-height: 72px;
	}

	.button-group {
		display: flex;
		gap: var(--spacing1);
		width: 100%;
		margin-bottom: var(--spacing2);
		padding: 0 var(--spacing1);
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
		border: 1px solid hsl(from var(--accent-color) h s calc(l - 20) / 0.3);
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
		background: hsl(from var(--accent-color) h s calc(l - 20) / 0.1);
		color: var(--accent-color);
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
		border: 4px solid var(--accent-color);
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
	@media (max-width: 768px) {
		.card-section {
			padding: var(--spacing5) var(--spacing3);
			margin-top: var(--spacing6);
		}
		.card-group {
			gap: var(--spacing3);
		}
		.card {
			min-height: 380px;
		}
		.card-image {
			width: 120px;
			height: 120px;
		}
		.overlay::before,
		.overlay::after {
			bottom: -35px;
			height: 35px;
			width: 35px;
		}
		.image-content {
			padding: 20px 0;
		}
		.card-content {
			padding: 15px 20px 20px 20px;
		}
		.card-title {
			font-size: 1.5rem;
		}
		.card-text {
			font-size: 0.9rem;
		}
	}
	@media (max-width: 480px) {
		.card-section {
			margin: var(--spacing4) auto;
			padding: 0 var(--spacing2);
		}

		.card-group {
			gap: var(--spacing0);
		}

		.card {
			min-height: 360px;
		}

		.card-image {
			width: 100px;
			height: 100px;
		}

		.overlay::before,
		.overlay::after {
			bottom: -30px;
			height: 30px;
			width: 30px;
		}

		.image-content {
			padding: var(--spacing1) 0;
		}

		.card-content {
			padding: var(--spacing0) var(--spacing0) var(--spacing2) var(--spacing0);
		}

		.card-title {
			font-size: 1.5rem;
		}

		.card-text {
			font-size: 0.9rem;
		}

		.card-link-wrapper {
			flex: 1 1 280px;
		}
	}
</style>
