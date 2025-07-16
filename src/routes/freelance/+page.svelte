<script>
	import HeaderFreelance from '../../components/HeaderFreelance.svelte';
	import Cards from '../../components/Cards.svelte';
	import HeroSection from '../../components/HeroSection.svelte';
	import About from '../../components/About.svelte';
	import Contact from '../../components/Contact.svelte';
</script>

<HeaderFreelance />
<HeroSection
	backgroundImage="img/develop.jpg"
	firstLine="YOU THINK ABOUT IT"
	secondLine="I DO THE REST"
	ctaText="Get in Touch"
	ctaLink="#Contact"
/>
<section id="About">
	<About
		name="César Hernandez"
		title="A bit about me"
		paragraph1="I am a doctor in Medical Engineering, with experience in R&D projects related to optical imaging, image processing and Deep Learning. I started Web development as a side hustle but it's becoming more of a reality."
		paragraph2="In my research, I'm particularly interested in AI solutions applied to imaging (bonus points if it's medical), combining clean code practices and optimisation. As a web developer, I like to create and design web applications and sites with user-centered design to deliver exceptional digital experiences, always adapted to the client's needs."
		profileImage="img/fotocv.jpg"
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
<section id="Contact">
	<Contact />
</section>