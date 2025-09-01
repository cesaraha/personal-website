<script>
	import PythonIcon from '$lib/icons/PythonIcon.svelte';
	import JupyterIcon from '$lib/icons/JupyterIcon.svelte';
	import AnacondaIcon from '$lib/icons/AnacondaIcon.svelte';
	import NumpyIcon from '$lib/icons/NumpyIcon.svelte';
	import ScipyIcon from '$lib/icons/ScipyIcon.svelte';
	import SympyIcon from '$lib/icons/SympyIcon.svelte';
	import TensorflowIcon from '$lib/icons/TensorflowIcon.svelte';
	import KerasIcon from '$lib/icons/KerasIcon.svelte';
	import ScikitLearnIcon from '$lib/icons/Scikit-learnIcon.svelte';
	import OpenCvIcon from '$lib/icons/OpenCVIcon.svelte';
	import PandasIcon from '$lib/icons/PandasIcon.svelte';
	import HtmlIcon from '$lib/icons/HTMLIcon.svelte';
	import CssIcon from '$lib/icons/CSSIcon.svelte';
	import JavascriptIcon from '$lib/icons/JavascriptIcon.svelte';
	import MySqlIcon from '$lib/icons/MySQLIcon.svelte';
	import GitHubIcon from '$lib/icons/GitHubIcon.svelte';
	import NetlifyIcon from '$lib/icons/NetlifyIcon.svelte';
	import DjangoIcon from '$lib/icons/DjangoIcon.svelte';
	import SvelteIcon from '$lib/icons/SvelteIcon.svelte';
	import FastApiIcon from '$lib/icons/FastAPIIcon.svelte';
	import AxiosIcon from '$lib/icons/AxiosIcon.svelte';

	const section1Cards = [
		{ icon: PythonIcon, title: 'Python' },
		{ icon: JupyterIcon, title: 'Jupyter' },
		{ icon: AnacondaIcon, title: 'Anaconda' }
	];
	const section2Cards = [
		{ icon: NumpyIcon, title: 'NumPy' },
		{ icon: ScipyIcon, title: 'SciPy' },
		{ icon: SympyIcon, title: 'SymPy' },
		{ icon: TensorflowIcon, title: 'TensorFlow' },
		{ icon: KerasIcon, title: 'Keras' },
		{ icon: ScikitLearnIcon, title: 'Scikit-learn' },
		{ icon: OpenCvIcon, title: 'OpenCV' },
		{ icon: PandasIcon, title: 'Pandas' }
	];
	const section3Cards = [
		{ icon: HtmlIcon, title: 'HTML' },
		{ icon: CssIcon, title: 'CSS' },
		{ icon: JavascriptIcon, title: 'JavaScript' },
		{ icon: MySqlIcon, title: 'MySQL' }
	];
	const section4Cards = [
		{ icon: DjangoIcon, title: 'Django' },
		{ icon: FastApiIcon, title: 'FastAPI'},
		{ icon: SvelteIcon, title: 'Svelte' },
		{ icon: AxiosIcon, title: 'Axios'},
		{ icon: GitHubIcon, title: 'GitHub' },
		{ icon: NetlifyIcon, title: 'Netlify' }
	];

	import Header from '../components/Header.svelte';
	import Cards from '../components/Cards.svelte';
	import HeroSection from '../components/HeroSection.svelte';
	import About from '../components/About.svelte';
	import Contact from '../components/Contact.svelte';
	import GridSectioned from '../components/GridSectioned.svelte';
	import Footer from '../components/Footer.svelte';
	import { currentLanguage } from '../stores/language.js';
	import { getTranslation } from '../lib/translations.js';

	$: t = getTranslation($currentLanguage);
</script>

<svelte:head>
	<title>{t.titlePage}</title>
</svelte:head>

<Header />
<HeroSection
	backgroundImage="img/develop.jpg"
	firstLine={t.hero.firstLine}
	secondLine={t.hero.secondLine}
	cta1={t.hero.cta1}
	ctaLink1="#Projects"
	cta2={t.hero.cta2}
	ctaLink2="#Contact"
/>
<section id="About">
	<About
		name={t.about.name}
		title={t.about.title}
		paragraph1={t.about.paragraph1}
		paragraph2={t.about.paragraph2}
		profileImage="img/fotocv.jpg"
	/>
</section>
<section id="Skills">
	<GridSectioned
		titleSection={t.skills.title}
		nameSection1={t.skills.nameSection1}
		nameSection2={t.skills.nameSection2}
		nameSection3={t.skills.nameSection3}
		nameSection4={t.skills.nameSection4}
		{section1Cards}
		{section2Cards}
		{section3Cards}
		{section4Cards}
	/>
</section>
<section id="Projects">
	<Cards
		titleSection={t.projects.title}
		readMore={t.readMore}
		viewOnGithub={t.viewOnGithub}
		heading1={t.projects.project1.heading}
		details1={t.projects.project1.details}
		fullDescription1={t.projects.project1.description}
		img1="img/numbers-mnist.png"
		ref1="https://github.com/CesarHernandezAlvarez/optical-imaging-scattering-media"
		isDisabled1={false}
		heading2={t.projects.project2.heading}
		details2={t.projects.project2.details}
		fullDescription2={t.projects.project2.description}
		img2="img/caha-logo-blue.png"
		ref2="https://github.com/CesarHdezAlvz/my-portfolio-website"
		isDisabled2={false}
		heading3={t.projects.project3.heading}
		details3={t.projects.project3.details}
		fullDescription3={t.projects.project3.description}
		img3="img/arithmetics.png"
		ref3="https://github.com/CesarHdezAlvz/math-generator-ai"
		isDisabled3={false}
		heading4={t.projects.project4.heading}
		details4={t.projects.project4.details}
		fullDescription4={t.projects.project4.description}
		img4="img/document-glass.jpg"
		ref4="#"
		isDisabled4={true}
		heading5={t.projects.project5.heading}
		details5={t.projects.project5.details}
		fullDescription5={t.projects.project5.description}
		img5="img/microscope.jpg"
		ref5="#"
		isDisabled5={true}
		heading6={t.projects.project6.heading}
		details6={t.projects.project6.details}
		fullDescription6={t.projects.project6.description}
		img6="img/parking.jpg"
		ref6="#"
		isDisabled6={true}
		heading7={t.projects.project7.heading}
		details7={t.projects.project7.details}
		fullDescription7={t.projects.project7.description}
		img7="img/medical-imaging-segmentation.png"
		ref7="#"
		isDisabled7={true}
	/>
</section>
<section id="Contact">
	<Contact
		title={t.contact.title}
		description={t.contact.description}
		fullNameTag={t.contact.tags.name}
		phFullName={t.contact.placeholder.name}
		emailTag={t.contact.tags.email}
		phEmail={t.contact.placeholder.email}
		phoneTag={t.contact.tags.phone}
		optionalTag={t.contact.tags.optional}
		phPhone={t.contact.placeholder.phone}
		serviceTag={t.contact.tags.service}
		option1={t.contact.dropdown.option1}
		option2={t.contact.dropdown.option2}
		option3={t.contact.dropdown.option3}
		option4={t.contact.dropdown.option4}
		option5={t.contact.dropdown.option5}
		option6={t.contact.dropdown.option6}
		specifyTag={t.contact.tags.specify}
		phSpecify={t.contact.placeholder.specify}
		characters={t.contact.characters}
		messageTag={t.contact.tags.message}
		phMessage={t.contact.placeholder.message}
		buttonAlways={t.contact.button.always}
		buttonSending={t.contact.button.sending}
		errorField={t.contact.errors.field}
		errorValidEmail={t.contact.errors.validEmail}
		errorService={t.contact.errors.service}
		submitSuccess={t.contact.submit.success}
		submitError={t.contact.submit.error}
	/>
</section>
<Footer />
