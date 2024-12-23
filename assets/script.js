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
const arrow = document.querySelector('.arrow');
const dots = document.querySelectorAll('.dot');
console.log(dots)
let currentIndex = 0;

function updateDots(index) {
	dots.forEach((dot, i) => {
		if (i === index) {
			dot.classList.add("dot_selected");
		} else {
			dot.classList.remove("dot_selected");
		}
	});
}

function updateCarousel(index) {
	if(currentIndex === -1) {
		currentIndex = 3;
	} else if (currentIndex === slides.length) {
		currentIndex = 0;
	} else {
        currentIndex = index;
    }

	const imagePath = `assets/images/slideshow/${slides[currentIndex].image}`;
	bannerImg.src = imagePath;

	const tagLine = slides[currentIndex].tagLine;
	document.querySelector("p").innerHTML = tagLine;

}

arrowLeft.addEventListener("click", () => {
	currentIndex = currentIndex - 1;
	updateCarousel(currentIndex);
	updateDots(currentIndex);
});

arrowRight.addEventListener("click", () => {
	currentIndex = currentIndex + 1;
	updateCarousel(currentIndex);
	updateDots(currentIndex);
});

/**FIN */