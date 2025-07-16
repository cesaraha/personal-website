<div class="card-group-section">
	<div class="card-group">
		<div class="card-wrapper">
			<div class="card">
				<div class="image-content">
                    <span class="overlay"></span>
                    <div class="card-image">
                        <img src="img/fotocv.jpg" alt="Logo Caha" class="card-img" />
                    </div>
                </div>
                <div class="card-content">
                    <h2 class="name">Cesarucho</h2>
                    <p class="description">El caballo corre por el campo. El rey cebolla. ¿Podrías abrirnos tu caparazón?</p>

                    <a class="btn" href={'#'}>View on GitHub</a>
                </div>
			</div>
		</div>
	</div>
</div>

<style>
    .card-group-section {
        min-height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--bg-color);
    }
    .card-group {
        margin: 0 40px;
    }
    .card {
        width: 320px;
        border-radius: 25px;
        background-color: hsl(from var(--bg-color) h s calc(l + 2));
    }
    .card:hover {
        transform: scale(1.02);
        transition: transform 0.3s ease-in-out;
        border: 1px solid hsl(from var(--accent-color) h s calc(l - 10));
    }
    .image-content,
    .card-content {
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 15px 25px;
    }
    .image-content{
        position: relative;
        row-gap: 5px;
        padding: 25px 0;
    }
    .overlay {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: var(--accent-color);
        border-radius: 25px 25px 0 25px;
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
        border-radius: 0 25px 0 0;
        background-color: hsl(from var(--bg-color) h s calc(l + 2));
    }
    .card-image {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: var(--accent-color);
        padding: 3px;
    }
    .card-image .card-img {
        height: 100%;
        width: 100%;
        object-fit: cover;
        border-radius: 50%;
        border: 4px solid var(--bg-color);
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