// GLOBAL CONSTANTS
const API_KEY = '3ecab21081541b994be53f6076bcf782';

// Variables
let movieForm = document.getElementById("form");
let movieArea = document.querySelector(".movies-area")
let button = document.getElementById("search");
let moreButton = document.getElementById("loadBtn");
let results;

// pages can be ++ whenever load more button is pressed

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    movieArea.innerHTML = ``;
    results = document.querySelector('input').value;

    getResults(results);
    moreButton.style.display = "flex";
});

moreButton.addEventListener("click", () => {

    getResults(results);

});

async function getResults(event) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
    console.log(response);
    let responseData = await response.json();
    console.log(responseData);
    //responseData.results.foreach((e) => {
        displayResults(responseData.results[1]);
    //})
}

function displayResults(e) {
    movieArea.innerHTML += `
        <p>${e.title}"</p>
        <img id="test" src="https://boschio.github.io/flixster_starter/${e.poster_path}">
    `;
}