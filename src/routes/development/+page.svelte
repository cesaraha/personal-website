<script>
	import HeaderFreelance from '../../components/HeaderFreelance.svelte';
	import Cards from '../../components/Cards.svelte';
	import HeroSection from '../../components/HeroSection.svelte';
	import About from '../../components/About.svelte';
	import Contact from '../../components/Contact.svelte';
    import { currentLanguage } from '../../stores/language.js';
    import { getTranslation } from '../../lib/translations.js';

	$: t = getTranslation($currentLanguage).development;
</script>

<svelte:head>
    <title>{t.title}</title>
</svelte:head>

<HeaderFreelance />
<HeroSection
    backgroundImage="img/develop.jpg"
    firstLine={t.heroFirstLine}
    secondLine={t.heroSecondLine}
    ctaText={t.heroCtaText}
    ctaLink="#Contact"
/>
<section id="About">
	<About
        name={t.aboutName}
        title={t.aboutTitle}
        paragraph1={t.aboutParagraph1}
        paragraph2={t.aboutParagraph2}
        profileImage="img/fotocv.jpg"
    />
</section>

<section id="Projects">
	<Cards
        titleSection={t.projectsTitle}
        heading1={t.project1.heading}
        details1={t.project1.details}
        img1="img/numbers-mnist.png"
        ref1='https://github.com/CesarHernandezAlvarez/optical-imaging-scattering-media'
        isDisabled1={false}
        heading2={t.project2.heading}
        details2={t.project2.details}
        img2="img/medical-imaging-segmentation.png"
        ref2='#'
        isDisabled2={true}
        heading3={t.project3.heading}
        details3={t.project3.details}
        img3="img/document-glass.jpg"
        ref3='#'
        isDisabled3={true}
        heading4={t.project4.heading}
        details4={t.project4.details}
        img4="img/microscope.jpg"
        ref4='#'
        isDisabled4={true}
        heading5={t.project5.heading}
        details5={t.project5.details}
        img5="img/parking.jpg"
        ref5='#'
        isDisabled5={true}
        heading6={t.project6.heading}
        details6={t.project6.details}
        img6="img/caha-logo-mint.png"
        ref6='https://github.com/CesarHdezAlvz/my-portfolio-website'
        isDisabled6={false}
    />
</section>
<section id="Contact">
	<Contact />
</section>