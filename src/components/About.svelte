<script>
  // Props for customization
  export let name;
  export let title;
  export let paragraph1;
  export let paragraph2;
  export let profileImage;
</script>

<section class="about-section">
  <div class="container">
    <div class="main-content">
      <div class="profile-image-container">
        <img src={profileImage} alt={name} class="profile-image" />
      </div>
      
      <div class="content">
        <h1 class="name">{name}</h1>
        <h2 class="title">{title}</h2>
        
        <div class="description">
          <p>{paragraph1}</p>
          <p>{paragraph2}</p>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  .about-section {
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: var(--spacing5);
    background: var(--bg-color);
  }

  .container {
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .main-content {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--spacing6);
    width: 100%;
  }

  .profile-image-container {
    position: relative;
    flex-shrink: 0;
  }

  .profile-image {
    width: 400px;
    height: 400px;
    border-radius: 50%;
    object-fit: cover;
    border: 4px solid var(--accent-color);
    box-shadow: 0 8px 32px hsl(from var(--accent-color) h s calc(l - 20%));
    transition: transform 0.3s ease;
  }

  .profile-image:hover {
    transform: scale(1.05);
  }

  .content {
    flex: 1;
    text-align: left;
  }

  .name {
    font: var(--h1);
    color: var(--text-color);
    margin: var(--spacing6) 0 var(--spacing3) 0;
    letter-spacing: -0.02em;
  }

  .title {
    font: var(--h2);
    color: hsl(from var(--text-color) h s calc(l - 20%));
    margin: var(--spacing5) 0 var(--spacing3) 0;
  }

  .description {
    margin-bottom: var(--spacing6);
  }

  .description p {
    font: var(--p);
    color: hsl(from var(--text-color) h s calc(l - 10));
    margin: var(--spacing2) 0;
  }

  /* Responsive design */
  @media (max-width: 768px) {
    .about-section {
      padding: var(--spacing3);
    }

    .main-content {
      flex-direction: column;
      text-align: center;
    }

    .content {
      text-align: center;
    }

    .profile-image {
      width: 280px;
      height: 280px;
    }

    .name {
      font: var(--h1);
      font-size: 2.5rem;
    }

    .title {
      font: var(--h2);
      font-size: 1.3rem;
    }

    .description p {
      font: var(--p);
      font-size: 1rem;
    }
  }

  @media (max-width: 480px) {
    .profile-image {
      width: 220px;
      height: 220px;
    }

    .name {
      font: var(--h1);
      font-size: 2rem;
    }

    .title {
      font: var(--h2);
      font-size: 1.2rem;
    }
  }
</style>