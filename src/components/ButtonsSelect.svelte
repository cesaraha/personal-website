<div class="full-page">
	<div class="contents">
		<div class="question-container">
			<h2 class="question">What are you looking for?</h2>
		</div>
		<div class="button-pair">
			<a href="/portfolio" class="btn">Portfolio</a>
			<a href="/freelance" class="btn">Freelance</a>
		</div>
	</div>
</div>

<style>
    .full-page {
		width: 90%;
		max-width: 1120px;
		height: 100vh;
		margin: auto;
        padding: var(--spacing3);
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.contents {
		width: 100%;
		max-width: 1120px;
		height: 100vh;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.question-container {
		display: flex;
		justify-content: center;
		align-items: center;
		margin-bottom: var(--spacing5);
		padding: 0 var(--spacing3);
		text-align: center;
		width: 100%;
	}
	.question {
		text-wrap: balance;
	}

	.button-pair {
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: center;
		gap: var(--spacing6);
		padding: 0 var(--spacing2) var(--spacing6) var(--spacing2);
		flex-wrap: wrap;
	}

	.btn {
		all: unset;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 120px;
		height: 120px;
		background: var(--accent-color);
		color: var(--bg-color);
		border-radius: 50%;
		font: var(--p);
		cursor: pointer;
		font-weight: 600;
		text-align: center;
		box-shadow:
			var(--spacing1) var(--spacing1) 0 hsl(from var(--accent-color) h s calc(l - 20)),
			var(--spacing2) var(--spacing2) 0 hsl(from var(--bg-color) h s calc(l - 3));
		transition: all 0.3s ease;
		text-decoration: none;
	}

	.btn:hover {
		background: hsl(from var(--accent-color) h s calc(l + 10));
		transform: scale(1.05);
	}

	/* Responsive Design */
	@media (max-width: 768px) {
		.full-page {
			padding: var(--spacing3);
		}

		.question-container {
			margin-bottom: var(--spacing5);
		}

		.question {
			font-size: 1.5rem;
		}

		.button-pair {
			flex-direction: column;
			gap: var(--spacing5);
		}

		.btn {
			width: 110px;
			height: 110px;
			font-size: 0.9rem;
		}
	}

	@media (max-width: 480px) {
		.full-page {
			padding: var(--spacing2);
		}

		.question-container {
			margin-bottom: var(--spacing4);
			padding: 0 var(--spacing2);
		}

		.question {
			font-size: 1.2rem;
		}

		.button-pair {
			gap: var(--spacing5);
			padding: var(--spacing2);
		}

		.btn {
			width: 100px;
			height: 100px;
			font-size: 0.85rem;
		}
	}
</style>
