<script lang="ts">
    import { onMount } from 'svelte';
    import { currentLanguage } from '../stores/language.js';
    import { getTranslation } from '../lib/translations.js';

    $: t = getTranslation($currentLanguage).construction;

    let langDropdownOpen = false;
    let langRef: HTMLElement | null = null;

    const languages = [
        { code: 'fr' as const, flag: 'img/fra-lang.png', name: 'Français' },
        { code: 'en' as const, flag: 'img/eng-lang.png', name: 'English' },
        { code: 'sp' as const, flag: 'img/spa-lang.png', name: 'Español' }
    ];

    $: currentLang = languages.find((lang) => lang.code === $currentLanguage) || languages[0];
    $: otherLanguages = languages.filter((lang) => lang.code !== $currentLanguage);

    function toggleLangDropdown() {
        langDropdownOpen = !langDropdownOpen;
    }

    function handleClickOutside(event: MouseEvent) {
        if (langDropdownOpen && langRef && !langRef.contains(event.target as Node)) {
            langDropdownOpen = false;
        }
    }

    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && langDropdownOpen) {
            langDropdownOpen = false;
        }
    }

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

<div class="construction-container">
    <img src="/img/construction.png" alt="Site in construction" class="construction-image">
    
    <!-- Language Selector in top right corner -->
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
            </svg>
        </button>
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
    
    <!-- Translated Content -->
    <span class="site-in-construction">{t.title}</span>
    <span class="construction-portfolio-text">
        {t.lookingText}
        <a href="https://cesaraha.github.io" class="construction-portfolio-link">{t.clickHere}</a>.
        {t.hireText} c.aha.contact@gmail.com.
    </span>
</div>

<style>
    .construction-container {
        width: 100vw;
        height: 100vh;
        position: relative;
        display: block;
        margin: 0 auto;
        background-image: url(/img/construction.png);
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
    }

    .construction-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .construction-portfolio-text {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: rgba(255, 255, 255, 0.7);
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1.2em;
        font-weight: bold;
        text-align: center;
        max-width: 90%;
        box-sizing: border-box;
    }

    .construction-portfolio-link {
        color: var(--accent-color);
        text-decoration: none;
    }

    .construction-portfolio-link:hover {
        color: var(--accent-color-two);
        text-decoration: underline;
    }

    .site-in-construction {
        position: absolute;
        top: 20%;
        left: 50%;
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.7);
        padding: 10px 20px;
        border-radius: 5px;
        font: var(--h2);
        text-align: center;
    }

    /* Language selection styles */
    .language-selection {
        position: absolute;
        top: 20px;
        right: 20px;
        display: flex;
        align-items: center;
        z-index: 1000;
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
        background: rgba(255, 255, 255, 0.8);
        border: 1px solid transparent;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    }

    .lang-dropdown-trigger:hover,
    .lang-dropdown-trigger:focus {
        background: rgba(255, 255, 255, 0.9);
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
        background: rgba(255, 255, 255, 0.95);
        border: 1px solid rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        backdrop-filter: blur(10px);
        box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
        min-width: 140px;
        z-index: 1001;
        overflow: hidden;
        padding: 4px 0;
    }

    .lang-option {
        all: unset;
        display: flex;
        align-items: center;
        gap: 8px;
        width: 100%;
        padding: 8px 12px;
        cursor: pointer;
        transition: background 0.2s ease;
        font-size: 14px;
        color: var(--text-color);
    }

    .lang-option:hover,
    .lang-option:focus {
        background: rgba(0, 0, 0, 0.05);
        outline: none;
    }

    .flag {
        width: 24px;
        height: 24px;
        display: block;
        pointer-events: none;
        border-radius: 2px;
        object-fit: cover;
    }

    .lang-name {
        font-weight: 500;
    }

    /* Responsive adjustments */
    @media (max-width: 768px) {
        .construction-portfolio-text {
            font-size: 1em;
            padding: 8px 16px;
            max-width: 95%;
        }

        .site-in-construction {
            font-size: 1.5em;
            padding: 8px 16px;
            max-width: 90%;
        }

        .language-selection {
            top: 15px;
            right: 15px;
        }
    }
</style>