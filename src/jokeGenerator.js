const text = document.getElementById("jokeText");
const button = document.getElementById("jokeButton");
const beeButton = document.getElementById("beeButton");

button.addEventListener("click", getDadJoke);
beeButton.addEventListener("click", getBeeJoke);

async function getDadJoke() {
	const options = {
		method: "GET", // specify this is a GET request
		headers: {
			Accept: "application/json" // request the response in JSON format
		}
	};

	try {
		let data = await fetch("https://icanhazdadjoke.com/", options);
		let logJoke = await data.json();
		jokeText.innerText = logJoke.joke;
		console.log(logJoke);
	} catch (error) {
		console.log(error.message);
	}
}

async function getBeeJoke() {
	const options = {
		method: "GET", // specify this is a GET request
		headers: {
			Accept: "application/json" // request the response in JSON format
		}
	};

	try {
		let data = await fetch(
			"https://icanhazdadjoke.com/search?term=bees",
			options
		);
		let logJoke = await data.json();
		beeJokesArr = logJoke.results;
		console.log(logJoke.results);

		let randIdx = Math.floor(Math.random() * 5);
		let beeJoke = beeJokesArr[randIdx];
		console.log(beeJoke);

		jokeText.innerText = beeJoke.joke;
	} catch (error) {
		console.log(error.message);
	}
}
