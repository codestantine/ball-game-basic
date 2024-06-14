console.log("Hello from index.js")
const vibrantColors = ["#ff5733", "#ff33a6", "#ffd133", "#8e44ad", "#3357ff"]
const btnright = document.querySelector("#btnright");
const btnleft = document.querySelector("#btnleft");
const btnup = document.querySelector("#btnup");
const btndown = document.querySelector("#btndown");
let translateX = -50;
let translateY = -50;
let userValue = 80;

function randColor() {
	let index = Math.floor(Math.random() * vibrantColors.length);
	return vibrantColors[index];

}

btnright.addEventListener("click", () => {
	const ball = document.querySelector(".ball");
	translateX += userValue;
	ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
	ball.style.background = randColor();
})
btnleft.addEventListener("click", () => {
	const ball = document.querySelector(".ball");
	translateX -= userValue;
	ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
	ball.style.background = randColor();
})

btnup.addEventListener("click", () => {
	const ball = document.querySelector(".ball");
	translateY -= userValue;
	ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
	ball.style.background = randColor();
})
btndown.addEventListener("click", () => {
	const ball = document.querySelector(".ball");
	translateY += userValue;
	ball.style.transform = `translate(${translateX}px, ${translateY}px)`;
	ball.style.background = randColor();
})

// Event listener for the input field
const numberInput = document.getElementById('numberInput');
numberInput.addEventListener('input', function() {
	// Use parseInt to convert the input to a number
	userValue = parseInt(numberInput.value) || 80;
});
