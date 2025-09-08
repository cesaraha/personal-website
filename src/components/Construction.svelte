<div class ="construction-container">
    <img src="/img/construction.png" alt="Site in construction" class="construction-image">
    <span class="site-in-construction">Site under construction</span>
    <span class="construction-portfolio-text">Looking for the portfolio? Click 
        <a href="https://cesaraha.github.io" class="construction-portfolio-link">here</a>.
    </span>
</div>

<style>
    .construction-container {
        width: 100vw;
        height: 100vh;
        display: block;
        margin: 0 auto;
        background-image: url(/img/construction.png);
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
        transform: translateX(-50%);
        background-color: rgba(255, 255, 255, 0.7);
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 1.2em;
        font-weight: bold;
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
    }
</style>