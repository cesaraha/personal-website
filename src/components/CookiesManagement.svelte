<script>
    import { currentLanguage } from '../stores/language.js';
    import { getTranslation } from '../lib/translations.js';
   
    $: t = getTranslation($currentLanguage).cookieManagement;
</script>

<section class="legal-page-section">
    <h1 class="legal-page-title">{t.title}</h1>
    
    <div class="legal-page-body">
        <h5 class="legal-page-subtitle">{t.whatIsCookie.subtitle}</h5>
        <p class="legal-page-content">
            {t.whatIsCookie.content}
        </p>
        
        <h5 class="legal-page-subtitle">{t.cookieTypes.subtitle}</h5>
        
        <h6 class="legal-page-subtitle-two">{t.cookieTypes.strictlyNecessary.subtitle}</h6>
        <p class="legal-page-content">
            {t.cookieTypes.strictlyNecessary.content} <br />
            <strong>{t.cookieTypes.strictlyNecessary.examples}</strong>
        </p>
        <ul class="legal-page-content">
            {#each t.cookieTypes.strictlyNecessary.examplesList as example}
                <li>{example}</li>
            {/each}
        </ul>
        
        <h6 class="legal-page-subtitle-two">{t.cookieTypes.analytics.subtitle}</h6>
        <p class="legal-page-content">
            {t.cookieTypes.analytics.content} <br />
            <strong>{t.cookieTypes.analytics.purpose} :</strong> {t.cookieTypes.analytics.purposeText} <br />
            <strong>{t.cookieTypes.analytics.duration} :</strong> {t.cookieTypes.analytics.durationText} <br />
            <strong>{t.cookieTypes.analytics.consent} :</strong> {t.cookieTypes.analytics.consentText}
        </p>
        
        <h5 class="legal-page-subtitle">{t.preferencesManagement.subtitle}</h5>
        <p class="legal-page-content">
            {t.preferencesManagement.content}
        </p>
        
        <h5 class="legal-page-subtitle">{t.browserSettings.subtitle}</h5>
        <p class="legal-page-content">{t.browserSettings.intro}</p>
        <ul class="legal-page-content">
            {#each t.browserSettings.options as option}
                <li>{option}</li>
            {/each}
        </ul>
        
        <h6 class="legal-page-subtitle-two">{t.browserSettings.browserInstructions.subtitle}</h6>
        <p class="legal-page-content">
            <strong>{t.browserSettings.browserInstructions.chrome} :</strong> {t.browserSettings.browserInstructions.chromeInstructions} <br />
            <strong>{t.browserSettings.browserInstructions.firefox} :</strong> {t.browserSettings.browserInstructions.firefoxInstructions} <br />
            <strong>{t.browserSettings.browserInstructions.safari} :</strong> {t.browserSettings.browserInstructions.safariInstructions} <br />
            <strong>{t.browserSettings.browserInstructions.edge} :</strong> {t.browserSettings.browserInstructions.edgeInstructions}
        </p>
        
        <h5 class="legal-page-subtitle">{t.contact.subtitle}</h5>
        <p class="legal-page-content">
            {t.contact.content}
            {t.contact.email}
        </p>
    </div>
</section>