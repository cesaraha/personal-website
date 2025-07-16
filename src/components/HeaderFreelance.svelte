<script lang="ts">
    import { onMount, onDestroy } from 'svelte';
    let hamOpen = false;
    let navRef: HTMLElement | null = null;
    let hamRef: HTMLElement | null = null;
    
    function toggleMenu() {
        hamOpen = !hamOpen;
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
    }
    
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape' && hamOpen) {
            hamOpen = false;
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
        <img class="logo" src="img/Caha-logo.png" alt="Caha logo" />
    </a>
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
        <a href={'#About'}>About me</a>
        <a href={'#Projects'}>Projects</a>
        <a href={'#Contact'}>Contact</a>
    </nav>
</header>

<style>
    /* header */
    header {
        width: 95%;
        max-width: none;
        margin: var(--spacing2) auto;
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: sticky;
        top: 0;
        padding: var(--spacing1) var(--spacing5);
        background: hsl(from var(--bg-color) h s calc(l + 2));
        border-radius: var(--spacing5);
        z-index: 1000;
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    nav {
        display: flex;
        align-items: center;
        gap: var(--spacing5);
    }
    
    .ham {
        display: none;
        width: 24px;
        height: 24px;
        cursor: pointer;
        padding: var(--spacing1);
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
        filter: none;
    }
    
    @media (max-width: 800px) {
        header {
            padding: var(--spacing2) var(--spacing4);
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
            right: 0;
            background: var(--bg-color);
            padding: var(--spacing4);
            gap: var(--spacing4);
            border-radius: var(--spacing2);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
            min-width: 200px;
        }
        
        /* Remove dividers on mobile */
        nav.show a:not(:last-child)::before {
            display: none;
        }
    }
    
    @media (max-width: 600px) {
        header {
            width: 95%;
            padding: var(--spacing2) var(--spacing3);
        }
        
        nav.show {
            right: var(--spacing2);
            left: var(--spacing2);
            min-width: auto;
        }
    }
    
    .logo-link {
        display: flex;
        align-items: center;
        transition: transform 0.2s ease;
    }
    
    .logo-link:hover {
        transform: scale(1.05);
    }
    
    .logo {
        width: 3rem;
        height: auto;
        display: block;
    }
    
    nav a {
        color: var(--text-color);
        text-decoration: none;
        position: relative;
        transition: color 0.2s ease;
        padding: var(--spacing1) var(--spacing2);
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
        transition: width 0.3s ease, left 0.3s ease;
    }
    
    nav a:hover::after {
        width: 80%;
        left: 10%;
    }
</style>