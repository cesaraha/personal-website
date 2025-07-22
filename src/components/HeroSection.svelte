<script>
    export let backgroundImage;
    export let firstLine;
    export let secondLine;
    export let ctaText = "";
    export let ctaLink = "";
</script>

<section class="hero-section" style="background-image: url({backgroundImage})">
    <div class="hero-overlay">
        <div class="hero-content">
            <h1 class="hero-phrase">
                <span class="first-line">{firstLine}</span>
                <span class="second-line">{secondLine}</span>
            </h1>
            {#if ctaText && ctaLink}
                <a href={ctaLink} class="hero-cta">{ctaText}</a>
            {/if}
        </div>
    </div>
</section>

<style>
    .hero-section {
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
    }
   
    .hero-overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(4, 2, 47, 0.6);
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding-left: var(--spacing6);
    }
   
    .hero-content {
        text-align: left;
        max-width: none;
        padding: 0;
        z-index: 1;
    }
   
    .hero-phrase {
        font-family: "Inter", sans-serif;
        margin-bottom: var(--spacing5);
        line-height: 1.2;
        width: 100%;
        max-width: 800px;
    }
   
    .first-line {
        color: var(--text-color);
        display: block;
        font-size: 4.2rem;
        text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.8),
            4px 4px 8px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(0, 0, 0, 0.4);
    }
    
    .second-line {
        color: var(--accent-color);
        display: block;
        font-size: 4rem;
        text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.8),
            4px 4px 8px rgba(0, 0, 0, 0.6),
            0 0 20px rgba(0, 0, 0, 0.4),
            0 0 40px hsl(from var(--accent-color) h s calc(l - 30));
    }
   
    .hero-cta {
        all: unset;
        display: inline-block;
        background: var(--accent-color);
        color: var(--bg-color);
        padding: var(--spacing3) var(--spacing5);
        border-radius: var(--spacing2);
        font: var(--p);
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
        text-decoration: none;
        box-shadow:
            var(--spacing1) var(--spacing1) 0 hsl(from var(--accent-color) h s calc(l - 20)),
            var(--spacing2) var(--spacing2) 0 hsl(from var(--bg-color) h s calc(l - 3));
    }
   
    .hero-cta:hover {
        background: hsl(from var(--accent-color) h s calc(l + 5));
        transform: scale(1.05);
    }
   
    /* Responsive adjustments */
    @media (max-width: 768px) {
        .first-line {
            font-size: 3rem;
            text-shadow: 
                2px 2px 4px rgba(0, 0, 0, 0.8),
                3px 3px 6px rgba(0, 0, 0, 0.6),
                0 0 15px rgba(0, 0, 0, 0.4);
        }
       
        .second-line {
            font-size: 4.5rem;
            text-shadow: 
                2px 2px 4px rgba(0, 0, 0, 0.8),
                3px 3px 6px rgba(0, 0, 0, 0.6),
                0 0 15px rgba(0, 0, 0, 0.4),
                0 0 30px hsl(from var(--accent-color) h s calc(l - 30));
        }
       
        .hero-overlay {
            padding-left: var(--spacing4);
        }
    }
   
    @media (max-width: 480px) {
        .first-line {
            font-size: 2rem;
            text-shadow: 
                1px 1px 2px rgba(0, 0, 0, 0.8),
                2px 2px 4px rgba(0, 0, 0, 0.6),
                0 0 10px rgba(0, 0, 0, 0.4);
        }
       
        .second-line {
            font-size: 3rem;
            text-shadow: 
                1px 1px 2px rgba(0, 0, 0, 0.8),
                2px 2px 4px rgba(0, 0, 0, 0.6),
                0 0 10px rgba(0, 0, 0, 0.4),
                0 0 15px hsl(from var(--accent-color) h s calc(l - 20));
        }
       
        .hero-overlay {
            padding-left: var(--spacing3);
        }
       
        .hero-section {
            height: 80vh;
        }
    }
</style>