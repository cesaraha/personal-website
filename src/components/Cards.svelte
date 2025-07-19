<script>
    export let titleSection;
    export let heading;
    export let details;
    export let img;
    export let heading2;
    export let details2;
    export let img2;
	export let heading3;
	export let details3;
	export let img3;
	export let heading4;
	export let details4;
	export let img4;
	export let heading5;
	export let details5;
	export let img5;
</script>

<div class="card-section">
    <h1>{titleSection}</h1>
    <div class="card-group margin4 flex">
        <div class="card-link-wrapper">
            <div class="card margin4 flex">
                <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img src={img} class="card-img" alt="Project" />
                    </div>
                </div>
                <div class="card-content">
                    <h5 class="card-title">{heading}</h5>
                    <p class="card-text">{details}</p>
                    <a href={'#'} class="btn">View Project</a>
                </div>
            </div>
        </div>
        <div class="card-link-wrapper">
            <div class="card margin4 flex">
                <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img src={img2} class="card-img" alt="Project2" />
                    </div>
                </div>
                <div class="card-content">
                    <h5 class="card-title">{heading2}</h5>
                    <p class="card-text">{details2}</p>
                    <a href={'#'} class="btn">View Project</a>
                </div>
            </div>
        </div>
        <div class="card-link-wrapper">
            <div class="card margin4 flex">
                <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img src={img3} class="card-img" alt="Project3" />
                    </div>
                </div>
                <div class="card-content">
                    <h5 class="card-title">{heading3}</h5>
                    <p class="card-text">{details3}</p>
                    <a href={'#'} class="btn">View Project</a>
                </div>
            </div>
        </div>
        <div class="card-link-wrapper">
            <div class="card margin4 flex">
                <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img src={img4} class="card-img" alt="Project4" />
                    </div>
                </div>
                <div class="card-content">
                    <h5 class="card-title">{heading4}</h5>
                    <p class="card-text">{details4}</p>
                    <a href={'#'} class="btn">View Project</a>
                </div>
            </div>
        </div>
        <div class="card-link-wrapper">
            <div class="card margin4 flex">
                <div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img src={img5} class="card-img" alt="Project5" />
                    </div>
                </div>
                <div class="card-content">
                    <h5 class="card-title">{heading5}</h5>
                    <p class="card-text">{details5}</p>
                    <a href={'#'} class="btn">View Project</a>
                </div>
            </div>
        </div>
    </div>
</div>

<style>
    .card-section {
        width: 90%;
		max-width: 1120px;
        margin: var(--spacing2) auto;
        text-wrap: balance;
        padding: var(--spacing4) var(--spacing5);
    }
    .card-group {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: stretch;
        gap: var(--spacing3);
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
    .image-content{
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
        background-color: var(--accent-color);
        padding: var(--spacing0);
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
    }
    .card-text {
        font: var(--p);
        color: hsl(from var(--text-color) h s calc(l - 15));
        flex-grow: 1;
        margin: var(--spacing1) var(--spacing1) var(--spacing2) var(--spacing1);
		display: -webkit-box;
        -webkit-box-orient: vertical;
        text-overflow: ellipsis;
    }
    .btn {
        all: unset;
        display: inline-block;
        margin: 0 0 var(--spacing3) 0;
        background: var(--accent-color);
        padding: var(--spacing1) var(--spacing3);
        color: var(--bg-color);
        border-radius: var(--spacing2);
        font: var(--p);
        cursor: pointer;
        font-weight: 600;
        box-shadow:
            var(--spacing0) var(--spacing0) 0 hsl(from var(--accent-color) h s calc(l - 20)),
            var(--spacing1) var(--spacing1) 0 hsl(from var(--bg-color) h s calc(l - 3));
        transition: all 0.3s ease;
    }
    .btn:hover {
        background: hsl(from var(--accent-color) h s calc(l + 10));
        transform: scale(1.05);
    }
    .flex {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
    .flex > * {
        flex: 1;
        min-width: 250px;
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
			font-size: 0.90rem;
		}
		.btn {
			margin-top: var(--spacing4);
            padding: var(--spacing1) var(--spacing2);
            font-size: 0.8rem;
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

        .btn {
			margin-top: var(--spacing1);
            padding: var(--spacing1) var(--spacing2);
            font-size: 0.9rem;
        }

    }
</style>