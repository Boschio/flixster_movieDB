// GLOBAL CONSTANTS
const API_KEY = '3ecab21081541b994be53f6076bcf782';

// Variables
let movieForm = document.getElementById("form");
let movieArea = document.querySelector(".movies-area")
let button = document.getElementById("search");
let moreButton = document.getElementById("loadBtn");
let results;
let page = 1;

// pages can be ++ whenever load more button is pressed

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    movieArea.innerHTML = ``;
    results = document.querySelector('input').value;

    getResults(results);
    moreButton.style.display = "flex";
});

moreButton.addEventListener("click", () => {
    page++;
    getResults(results);

});

async function getResults(event) {
    let response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${page}`);
    console.log(response);
    let responseData = await response.json();
    console.log(responseData);

    for (let i=0;i<responseData.results.length;i++) {
        displayResults(responseData.results[i]);
    }
}

function displayResults(e) {
    movieArea.innerHTML += `
        <div>
            
            <img id="poster" src="http://image.tmdb.org/t/p/w500/${e.poster_path}">
            <p id = "rating">${e.vote_average}</p>
            <p id = "title">${e.title}</p>
        </div>
    `;
}