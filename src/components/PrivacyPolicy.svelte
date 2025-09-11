<script>
    import { currentLanguage } from '../stores/language.js';
    import { getTranslation } from '../lib/translations.js';
   
    $: t = getTranslation($currentLanguage).privacyPolicy;
</script>

<section class="legal-page-section">
    <h1 class="legal-page-title">{t.title}</h1>
    
    <div class="legal-page-body">
        <h5 class="legal-page-subtitle">{t.dataController.subtitle}</h5>
        <p class="legal-page-content">
            <strong>{t.dataController.responsible}</strong> : {t.dataController.responsibleName} <br />
            <strong>{t.dataController.status}</strong> : {t.dataController.statusValue} <br />
            <strong>{t.dataController.contact}</strong> : {t.dataController.contactEmail} <br />
        </p>
        
        <h5 class="legal-page-subtitle">{t.dataCollection.subtitle}</h5>
        
        <h6 class="legal-page-subtitle-two">{t.dataCollection.contactForm.subtitle}</h6>
        <p class="legal-page-content">
            <strong>{t.dataCollection.contactForm.dataCollected}</strong> : {t.dataCollection.contactForm.dataTypes} <br />
            <strong>{t.dataCollection.contactForm.purpose}</strong> : {t.dataCollection.contactForm.purposeText} <br />
            <strong>{t.dataCollection.contactForm.legalBasis}</strong> : {t.dataCollection.contactForm.legalBasisText} <br />
            <strong>{t.dataCollection.contactForm.retention}</strong> : {t.dataCollection.contactForm.retentionText}
        </p>
        
        <h6 class="legal-page-subtitle-two">{t.dataCollection.cookiesNavigation.subtitle}</h6>
        <p class="legal-page-content">
            <strong>{t.dataCollection.cookiesNavigation.dataCollected}</strong> : {t.dataCollection.cookiesNavigation.dataTypes} <br />
            <strong>{t.dataCollection.cookiesNavigation.purpose}</strong> : {t.dataCollection.cookiesNavigation.purposeText} <br />
            <strong>{t.dataCollection.cookiesNavigation.legalBasis}</strong> : {t.dataCollection.cookiesNavigation.legalBasisText} <br />
            <strong>{t.dataCollection.cookiesNavigation.retention}</strong> : {t.dataCollection.cookiesNavigation.retentionText}
        </p>
        
        <h5 class="legal-page-subtitle">{t.dataUsage.subtitle}</h5>
        <p class="legal-page-content">
            {t.dataUsage.intro} <br />
        </p>
        <ul class="legal-page-content">
            {#each t.dataUsage.purposes as purpose}
                <li>{purpose}</li>
            {/each}
        </ul>
        <p class="legal-page-content">
            <strong>{t.dataUsage.weDoNot}</strong>
        </p>
        <ul class="legal-page-content">
            {#each t.dataUsage.prohibitions as prohibition}
                <li>{prohibition}</li>
            {/each}
        </ul>
        
        <h5 class="legal-page-subtitle">{t.dataSharing.subtitle}</h5>
        <p class="legal-page-content">{t.dataSharing.intro}</p>
        <ul class="legal-page-content">
            {#each t.dataSharing.exceptions as exception}
                <li>{exception}</li>
            {/each}
        </ul>
        
        <h5 class="legal-page-subtitle">{t.gdprRights.subtitle}</h5>
        <p class="legal-page-content">
            {t.gdprRights.intro}
        </p>
        <ul class="legal-page-content">
            {#each t.gdprRights.rights as right}
                <li>{right}</li>
            {/each}
        </ul>
        <p class="legal-page-content">
            <strong>{t.gdprRights.exerciseRights}</strong> {t.gdprRights.contactText}
        </p>
        
        <h5 class="legal-page-subtitle">{t.complaints.subtitle}</h5>
        <p class="legal-page-content">
            {t.complaints.intro}
        </p>
        <ul class="legal-page-content">
            <li><strong>{t.complaints.website}</strong> {t.complaints.websiteUrl}</li>
            <li><strong>{t.complaints.address}</strong> {t.complaints.addressText}</li>
            <li><strong>{t.complaints.phone}</strong> : {t.complaints.phoneNumber}</li>
        </ul>
    </div>
</section>