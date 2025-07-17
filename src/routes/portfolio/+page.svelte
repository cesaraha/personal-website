<script>
	import HeaderPortfolio from '../../components/HeaderPortfolio.svelte';
	import ListCards from '../../components/ListCards.svelte';
	import Cards from '../../components/Cards.svelte';
	import ListNoImage from '../../components/ListNoImage.svelte';
	import About from '../../components/About.svelte';
</script>

<svelte:head>
    <title>Portfolio</title>
</svelte:head>

<HeaderPortfolio />
<section id="About">
	<About
		name="César Hernandez"
		title="A bit about me"
		paragraph1="I am a doctor in Medical Engineering, with experience in R&D projects related to optical imaging, image processing and Deep Learning. I started Web development as a side hustle but it's becoming more of a reality."
		paragraph2="In my research, I'm particularly interested in AI solutions applied to imaging (bonus points if it's medical), combining clean code practices and optimisation. As a web developer, I like to create and design web applications and sites with user-centered design to deliver exceptional digital experiences, always adapted to the client's needs."
		profileImage="img/fotocv.jpg"
	/>
</section>
<section id="Background">
	<ListCards
		titleSection="Studies"
		heading="BS in Medical Engineering"
		placeAndDate="Sinaloa, Mexico | Sep 2014 - Jan 2018"
		details="Focused in the development of prototyping by using electronics, mechanics and programming skills."
		img="img/Upsin_logo_oficial_blanco.png"
		altText="UPSIN"
		heading2="PhD in Medical Engineering and Diploma in R&D"
		placeAndDate2="London, United Kingdom | Oct 2019 - Apr 2025"
		details2="Development of optical imaging systems by using conventional reconstruction methods, optimisation algorithms and Deep Learning."
		img2="img/QM_logo_White.png"
		altText2="QMUL"
	/>
</section>
<section id="Experiences">
	<ListNoImage
		titleSection="Professional experience"
		heading="PhD Researcher"
		placeAndDate="Queen Mary University of London | Oct 2019 - Apr 2025"
		details="Optical imaging, Deep Learning for the reconstruction of images with Python, Tensorflow and Keras."
		heading2="Laboratory Demonstrator"
		placeAndDate2="Queen Mary University of London | Sep 2021 - Aug 2023"
		details2="Teaching and tutoring for Math, Physics, Electronics and Python programming to undergraduate students."
		heading3="R&D Engineer"
		placeAndDate3="Tecnológico de Monterrey | Aug 2017 - Jan 2018"
		details3="Development of an eyetracking system by using C# and VS Code."
	/>
</section>
<section id="Projects">
	<Cards
		titleSection="Projects"
		heading="Optical imaging in scattering media"
		details="Development of Deep Learning algorithms for the reconstruction of 2D laser projections going through a diffusive layer (Doctoral thesis project)"
		img="img/numbers-mnist.png"
		heading2="Medical imaging segmentation"
		details2="Development of applications for the display, exploration and segmentation of MRI slices in four different modalities."
		img2="img/medical-imaging-segmentation.png"
		heading3="OCR for scanned documents and images"
		details3="Development of an algorithm capable of recognizing words in scanned documents and image files for easy location and classification."
		img3="img/document-glass.jpg"
		heading4="Cell segmentation in microscopy images"
		details4="Development of image processing algorithms for the segmentation of cells in microscopy images for counting and classification purposes."
		img4="img/microscope.jpg"
		heading5="Object detection and tracking with OpenCV"
		details5="Development of applications for the detection and tracking of objects using OpenCV and Python. Trained with YOLOv5 and YOLOv8 models."
		img5="img/parking.jpg"
	/>
</section>