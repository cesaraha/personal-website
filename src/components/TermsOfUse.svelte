<script>
    import { currentLanguage } from '../stores/language.js'; // Adjust path as needed
    import { getTranslation } from '../lib/translations.js'; // Adjust path as needed
    
    $: t = getTranslation($currentLanguage).termsOfUse;
</script>

<section class="legal-page-section">
    <h1 class="legal-page-title">{t.title}</h1>
    
    <div class="legal-page-body">
        <h5 class="legal-page-subtitle">{t.purpose.subtitle}</h5>
        <p class="legal-page-content">
            {t.purpose.content}
        </p>
        
        <h5 class="legal-page-subtitle">{t.siteAccess.subtitle}</h5>
        <p class="legal-page-content">
            {t.siteAccess.content}
        </p>
        
        <h5 class="legal-page-subtitle">{t.siteUsage.subtitle}</h5>
        <p class="legal-page-content">
            {t.siteUsage.content}
        </p>
        <ul class="legal-page-content">
            {#each t.siteUsage.prohibitions as prohibition}
                <li>{prohibition}</li>
            {/each}
        </ul>
        
        <h5 class="legal-page-subtitle">{t.intellectualProperty.subtitle}</h5>
        <p class="legal-page-content">
            {t.intellectualProperty.content}
        </p>
        
        <h5 class="legal-page-subtitle">{t.responsibility.subtitle}</h5>
        <p class="legal-page-content">
            {t.responsibility.content}
        </p>
        
        <h5 class="legal-page-subtitle">{t.personalData.subtitle}</h5>
        <p class="legal-page-content">
            {t.personalData.content}
            <a href="/politique-confidentialite">{t.personalData.linkText}</a>{t.personalData.additionalContent}
        </p>
        
        <h5 class="legal-page-subtitle">{t.termsModification.subtitle}</h5>
        <p class="legal-page-content">
            {t.termsModification.content}
        </p>
    </div>
</section>