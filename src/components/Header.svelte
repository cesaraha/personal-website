<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import { currentLanguage } from '../stores/language.js';
	import { getTranslation } from '../lib/translations.js';

	$: t = getTranslation($currentLanguage).navigation;

	let hamOpen = false;
	let langDropdownOpen = false;
	let navRef: HTMLElement | null = null;
	let hamRef: HTMLElement | null = null;
	let langRef: HTMLElement | null = null;

	const languages = [
		{ code: 'fr' as const, flag: 'img/fra-lang.png', name: 'Français' },
		{ code: 'en' as const, flag: 'img/eng-lang.png', name: 'English' },
		{ code: 'sp' as const, flag: 'img/spa-lang.png', name: 'Español' }
	];

	$: currentLang = languages.find((lang) => lang.code === $currentLanguage) || languages[0];
	$: otherLanguages = languages.filter((lang) => lang.code !== $currentLanguage);

	function toggleMenu() {
		hamOpen = !hamOpen;
	}

	function toggleLangDropdown() {
		langDropdownOpen = !langDropdownOpen;
	}

	function handleClickOutside(event: MouseEvent) {
		if (
			hamOpen &&
			navRef &&
			hamRef &&
			!navRef.contains(event.target as Node) &&
			!hamRef.contains(event.target as Node)
		) {
			hamOpen = false;
		}

		if (langDropdownOpen && langRef && !langRef.contains(event.target as Node)) {
			langDropdownOpen = false;
		}
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === 'Escape' && hamOpen) {
			hamOpen = false;
		}
		if (event.key === 'Escape' && langDropdownOpen) {
			langDropdownOpen = false;
		}
	}

	// Language selection functions
	function setLanguage(lang: 'fr' | 'en' | 'sp') {
		currentLanguage.set(lang);
		langDropdownOpen = false;
	}

	function handleLangKeydown(event: KeyboardEvent, lang: 'fr' | 'en' | 'sp') {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			setLanguage(lang);
		}
	}

	function handleDropdownToggleKeydown(event: KeyboardEvent) {
		if (event.key === 'Enter' || event.key === ' ') {
			event.preventDefault();
			toggleLangDropdown();
		}
	}

	onMount(() => {
		document.addEventListener('click', handleClickOutside);
		document.addEventListener('keydown', handleKeydown);
		return () => {
			document.removeEventListener('click', handleClickOutside);
			document.removeEventListener('keydown', handleKeydown);
		};
	});
</script>

<header>
	<a href={'/'} class="logo-link">
		<img class="logo" src="img/caha-logo-blue.png" alt="Caha logo" />
	</a>

	<div class="center-content">
		<button
			class="ham"
			on:click={toggleMenu}
			bind:this={hamRef}
			aria-label="Toggle navigation"
			aria-expanded={hamOpen}
		>
			<img src={hamOpen ? 'img/xmark-solid.svg' : 'img/bars-solid.svg'} alt="" />
		</button>
		<nav class:show={hamOpen} bind:this={navRef}>
			<a href={'/'}>{t.home}</a>
			<a href={'/#About'}>{t.about}</a>
			<a href={'/#Skills'}>{t.skills}</a>
			<a href={'/#Projects'}>{t.projects}</a>
			<a href={'/#Contact'}>{t.contact}</a>
		</nav>
	</div>

	<div class="language-selection" bind:this={langRef}>
		<button
			type="button"
			class="lang-dropdown-trigger"
			on:click={toggleLangDropdown}
			on:keydown={handleDropdownToggleKeydown}
			aria-label="Language selection"
			aria-expanded={langDropdownOpen}
			aria-haspopup="true"
		>
			<img src={currentLang.flag} class="flag" alt={currentLang.name} />
			<svg
				class="dropdown-arrow"
				class:rotated={langDropdownOpen}
				width="12"
				height="12"
				viewBox="0 0 24 24"
				fill="none"
			>
				<path
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M6 9l6 6 6-6"
				/>
			</svg></button
		>
		{#if langDropdownOpen}
			<div class="lang-dropdown">
				{#each otherLanguages as lang}
					<button
						type="button"
						class="lang-option"
						on:click={() => setLanguage(lang.code)}
						on:keydown={(e) => handleLangKeydown(e, lang.code)}
						aria-label="Switch to {lang.name}"
					>
						<img src={lang.flag} class="flag" alt={lang.name} />
						<span class="lang-name">{lang.name}</span>
					</button>
				{/each}
			</div>
		{/if}
	</div>
</header>

<style>
	/* header */
	header {
		width: 95%;
		max-width: none;
		margin: var(--spacing1) auto;
		display: flex;
		align-items: center;
		justify-content: space-between;
		position: sticky;
		top: 0;
		padding: var(--spacing1) var(--spacing4);
		background: hsl(from var(--bg-color) h s calc(l - 5));
		border-radius: var(--spacing5);
		z-index: 1000;
		backdrop-filter: blur(10px);
		border: 1px solid rgba(255, 255, 255, 0.1);
	}

	.center-content {
		display: flex;
		align-items: center;
		justify-content: center;
		flex: 1;
		position: relative;
	}

	nav {
		display: flex;
		align-items: center;
		gap: var(--spacing5);
	}

	.ham {
		display: none;
		translate: 0 1px;
		width: 40px;
		height: 40px;
		cursor: pointer;
		padding: var(--spacing0);
		background: transparent;
		border: none;
		border-radius: var(--spacing1);
		transition: background 0.2s ease;
	}

	.ham:hover {
		background: rgba(255, 255, 255, 0.1);
	}

	.ham:focus {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
	}

	.ham img {
		width: 100%;
		height: 100%;
		filter: invert(1);
	}

	/* Language selection styles */
	.language-selection {
        position: relative;
        display: flex;
        align-items: center;
    }

	.lang-dropdown-trigger {
        all: unset;
        display: flex;
        align-items: center;
        gap: 6px;
        cursor: pointer;
        border-radius: 6px;
        padding: 6px 8px;
        transition: all 0.3s ease;
        background: rgba(255, 255, 255, 0.1);
        border: 1px solid transparent;
    }

    .lang-dropdown-trigger:hover,
    .lang-dropdown-trigger:focus {
        background: rgba(255, 255, 255, 0.2);
        outline: 2px solid var(--accent-color);
        outline-offset: 1px;
    }

    .dropdown-arrow {
        transition: transform 0.3s ease;
        color: var(--text-color);
    }

    .dropdown-arrow.rotated {
        transform: rotate(180deg);
    }

    .lang-dropdown {
        position: absolute;
        top: calc(100% + 8px);
        right: 0;
        background: var(--bg-color);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: var(--spacing2);
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        min-width: 140px;
        z-index: 1001;
        overflow: hidden;
        padding: var(--spacing1) 0;
    }

    .lang-option {
        all: unset;
        display: flex;
        align-items: center;
        gap: var(--spacing2);
        width: 100%;
        padding: var(--spacing1) var(--spacing3);
        cursor: pointer;
        transition: background 0.2s ease;
        font-size: 14px;
        color: var(--text-color);
    }

    .lang-option:hover,
    .lang-option:focus {
        background: rgba(255, 255, 255, 0.1);
        outline: none;
    }

	.flag {
        width: 24px;
        height: 24px;
        display: block;
        pointer-events: none;
        border-radius: 2px;
    }

    .lang-name {
        font-weight: 500;
        translate: 0 -1px;
    }

	.logo-link {
		display: flex;
		align-items: center;
		transition: transform 0.2s ease;
		width: min(40px, 15%);
	}

	.logo-link:hover {
		transform: scale(1.05);
	}

	.logo {
		width: 100%;
		height: auto;
		display: block;
	}

	nav a {
		color: var(--text-color);
		text-decoration: none;
		position: relative;
		transition: color 0.2s ease;
		padding: var(--spacing2) var(--spacing2);
		border-radius: var(--spacing1);
	}

	nav a:hover {
		color: var(--accent-color);
		background: rgba(255, 255, 255, 0.05);
	}

	nav a:focus {
		outline: 2px solid var(--accent-color);
		outline-offset: 2px;
	}

	/* Add dividers between nav items (except the last one) */
	nav a:not(:last-child)::before {
		content: '|';
		position: absolute;
		right: calc(var(--spacing5) / -2);
		top: 50%;
		transform: translateY(-50%);
		color: var(--text-color);
		opacity: 0.5;
		pointer-events: none;
	}

	/* Active link indicator */
	nav a::after {
		content: '';
		position: absolute;
		bottom: -2px;
		left: 50%;
		width: 0;
		height: 2px;
		background: var(--accent-color);
		transition:
			width 0.3s ease,
			left 0.3s ease;
	}

	nav a:hover::after {
		width: 80%;
		left: 10%;
	}

	@media (max-width: 950px) {
		header {
			padding: var(--spacing1) var(--spacing3);
		}

		.ham {
			display: block;
		}

		nav {
			display: none;
		}

		nav.show {
			display: flex;
			flex-direction: column;
			position: absolute;
			top: calc(100% + var(--spacing2));
			right: 33.33%;
			background: var(--bg-color);
			padding: var(--spacing2);
			gap: var(--spacing1);
			border-radius: var(--spacing2);
			border: 1px solid rgba(255, 255, 255, 0.1);
			backdrop-filter: blur(10px);
			box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
			min-width: 200px;
		}

		nav.show a {
			padding: var(--spacing1) var(--spacing1);
		}

		/* Remove dividers on mobile */
		nav.show a:not(:last-child)::before {
			display: none;
		}

		/* Adjust language selection on mobile */
		.lang-dropdown-trigger {
            padding: 4px 6px;
        }
        
        .flag {
            width: 20px;
            height: 20px;
        }
        
        .lang-dropdown {
            min-width: 120px;
        }
        
        .lang-option {
            padding: var(--spacing1) var(--spacing2);
            font-size: 13px;
        }
	}

	@media (max-width: 600px) {
		header {
			width: 95%;
			padding: var(--spacing2) var(--spacing3);
		}

		nav.show {
			right: var(--spacing0);
			left: var(--spacing0);
			min-width: auto;
		}
	}
</style>
