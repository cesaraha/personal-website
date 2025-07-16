<script>
    export let heading;
    export let details;
    export let link;
    export let linkText;
    export let img;
    export let selector;
    export let altText;
</script>

<section class="margin6 flex {selector}">
    <div class="text-section">
        <h2>{heading}</h2>
        <p>{details}</p>
        <a class="btn" href={link}>{linkText}</a>
    </div>
    <div class="img-section">
        <img src={img} alt={altText} />
    </div>
</section>

<style>
    /* section */
    section {
        width: 90%;
        max-width: 1080px;
        margin: var(--spacing3) auto;
        text-wrap: balance;
    }
    
    .img-section {
        width: 25%;
        max-width: 300px;
        max-height: 400px;
    }
    
    .text-section {
        width: 65%;
        padding-left: var(--spacing6);
    }
    
    .img-section img {
        max-width: 300px;
        max-height: 400px;
        border-radius: var(--spacing5);
        display: block;
        margin: 0 auto;
    }
    
    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: var(--spacing4);
        flex-wrap: wrap;
    }
    
    .flex > * {
        flex: 1;
        min-width: 400px;
    }
    
    .btn {
        all: unset;
        display: inline-block;
        margin: var(--spacing2) 0;
        background: var(--accent-color);
        padding: var(--spacing2) var(--spacing3);
        color: var(--bg-color);
        border-radius: var(--spacing2);
        font: var(--p);
        cursor: pointer;
        font-weight: 600;
        box-shadow: 
            var(--spacing1) var(--spacing1) 0 hsl(from var(--accent-color) h s calc(l - 20)),
            var(--spacing2) var(--spacing2) 0 hsl(from var(--bg-color) h s calc(l - 3));
    }
    
    .btn:hover {
        background: hsl(from var(--accent-color) h s calc(l + 10));
        transition: 0.3s ease-in-out;
        transform: scale(1.05);
    }
</style>