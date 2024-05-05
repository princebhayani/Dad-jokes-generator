const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const apikey = "your api key";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeEl.innerText = "Updating...";

        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";

        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An Error happen try agin later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error);
    }
}

btnEl.addEventListener("click", getJoke);


