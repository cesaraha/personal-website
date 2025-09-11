<script>
    import { currentLanguage } from '../stores/language.js';
    import { getTranslation } from '../lib/translations.js';
   
    $: t = getTranslation($currentLanguage).legalNotices;
</script>

<section class="legal-page-section">
    <h1 class="legal-page-title">{t.title}</h1>
    
    <div class="legal-page-body">
        <h5 class="legal-page-subtitle">{t.siteEditor.subtitle}</h5>
        <p class="legal-page-content">
            <strong>{t.siteEditor.name} :</strong> {t.siteEditor.nameValue} <br />
            <strong>{t.siteEditor.status} :</strong> {t.siteEditor.statusValue} <br />
            <strong>{t.siteEditor.phone} :</strong> {t.siteEditor.phoneValue} <br />
            <strong>{t.siteEditor.email} :</strong> {t.siteEditor.emailValue} <br />
            <strong>{t.siteEditor.siret} :</strong> {t.siteEditor.siretValue}
        </p>
        
        <h5 class="legal-page-subtitle">{t.publicationDirector.subtitle}</h5>
        <p class="legal-page-content">
            <strong>{t.publicationDirector.director} :</strong> {t.publicationDirector.directorName} <br />
            <strong>{t.publicationDirector.contact} :</strong> {t.publicationDirector.contactEmail}
        </p>
        
        <h5 class="legal-page-subtitle">{t.hosting.subtitle}</h5>
        <p class="legal-page-content">
            <strong>{t.hosting.host} :</strong> {t.hosting.hostName} <br />
            <strong>{t.hosting.hostAddress} :</strong> {t.hosting.hostAddressValue} <br />
            <strong>{t.hosting.hostPhone} :</strong> {t.hosting.hostPhoneValue} <br />
            <strong>{t.hosting.hostEmail} :</strong> {t.hosting.hostEmailValue}
        </p>
        
        <h5 class="legal-page-subtitle">{t.intellectualProperty.subtitle}</h5>
        <p class="legal-page-content">
            {t.intellectualProperty.content}
        </p>
    </div>
</section>