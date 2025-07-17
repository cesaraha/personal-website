<script>
  import { currentLanguage } from '../stores/language.js';
  
  /**
   * @param {'fr' | 'en' | 'sp'} lang
   */
  function setLanguage(lang) {
    currentLanguage.set(lang);
  }
  
  /**
   * @param {KeyboardEvent} event
   * @param {'fr' | 'en' | 'sp'} lang
   */
  function handleKeydown(event, lang) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setLanguage(lang);
    }
  }
</script>

<div class="languages-container">
    <div class="language-landing">
        <button 
          type="button"
          class="flag-button"
          class:active={$currentLanguage === 'fr'}
          on:click={() => setLanguage('fr')}
          on:keydown={(e) => handleKeydown(e, 'fr')}
          aria-label="Switch to French"
        >
          <img src="img/fra-lang.png" class="flag" alt="French flag" />
        </button>
        <button 
          type="button"
          class="flag-button"
          class:active={$currentLanguage === 'en'}
          on:click={() => setLanguage('en')}
          on:keydown={(e) => handleKeydown(e, 'en')}
          aria-label="Switch to English"
        >
          <img src="img/eng-lang.png" class="flag" alt="English flag" />
        </button>
        <button 
          type="button"
          class="flag-button"
          class:active={$currentLanguage === 'sp'}
          on:click={() => setLanguage('sp')}
          on:keydown={(e) => handleKeydown(e, 'sp')}
          aria-label="Switch to Spanish"
        >
          <img src="img/spa-lang.png" class="flag" alt="Spanish flag" />
        </button>
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
    
    .flag-button {
        all: unset;
        display: inline-block;
        cursor: pointer;
        border-radius: 4px;
        padding: 2px;
        transition: all 0.3s ease;
    }
    
    .flag-button:hover,
    .flag-button:focus {
        transform: scale(1.1);
        outline: 2px solid var(--accent-color, #0066cc);
        outline-offset: 2px;
    }
    
    .flag-button.active {
        transform: scale(1.1);
        filter: brightness(1.2);
        box-shadow: 0 0 8px rgba(0, 0, 0, 0.3);
    }
    
    .flag {
        width: 32px;
        height: 32px;
        display: block;
        pointer-events: none; /* Prevents img from interfering with button events */
    }
</style>