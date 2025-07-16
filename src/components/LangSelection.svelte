<div class="languages-container">
	<div class="language-landing">
		<img src="img/fra-lang.png" class="flag" alt="French flag" />
		<img src="img/eng-lang.png" class="flag" alt="English flag" />
		<img src="img/spa-lang.png" class="flag" alt="Spanish flag" />
	</div>
</div>

<style>
    .languages-container {
        position: absolute;
        width: 90%;
        padding-top: var(--spacing3);
    }
    .language-landing {
        width: 100%;
		display: flex;
		justify-content: right;
		align-items: center;
        padding: auto;
		gap: var(--spacing3);
	}
    .flag {
        width: 32px;
        height: 32px;
    }

    .flag:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
        cursor: pointer;
    }
</style>