const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

const bannerImg = document.querySelector('.banner-img');
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');
const dotsContainer = document.querySelector('.dots');

let currentIndex = 0;
//Creer dynamiquement les divs avec la classe dot en fonction de la taille du tableau,
//Si le tableau a 8 image je creer 8 divs

function createDots() {
	slides.forEach(() =>{
		const dot = document.createElement('div');
		dot.classList.add('dot');
		dotsContainer.appendChild(dot);
	});
}

function updateDots(index) {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

function updateCarousel(index) {
	if (index < 0) {
		currentIndex = slides.length -1;
	} else if (index >= slides.length) {
		currentIndex = 0;
	} else {
        currentIndex = index;
    }

	const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImg.src = imagePath;

	const tagLine = slides[currentIndex].tagLine;
	document.querySelector("p").innerHTML = tagLine;

	updateDots(currentIndex);
}

arrowLeft.addEventListener("click", () => {
	updateCarousel(currentIndex -1);
});

arrowRight.addEventListener("click", () => {
	updateCarousel(currentIndex +1);
});

createDots();
updateDots(0);




