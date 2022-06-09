// GLOBAL CONSTANTS
const API_KEY = '3ecab21081541b994be53f6076bcf782';

// Variables
let movieForm = document.getElementById("form");
let moviesGrid = document.querySelector("#movies-grid")
let searchButton = document.getElementById("search");
let moreButton = document.getElementById("load-more-movies-btn");
let closeButton = document.getElementById("close-search-btn");
let results;
let page = 1;
let x = true;

movieForm.addEventListener("submit", (event) => {
    event.preventDefault();
    moviesGrid.innerHTML = ``;
    results = document.querySelector('input').value;
    page = 1;
    searchMovies(results);
    closeButton.style.display = "flex";
});

moreButton.addEventListener("click", () => {
    page++;
    if (x) {
        loadNowPlaying(results);
    } else {
        searchMovies(results);
    }
    closeButton.style.display = "flex";
});

closeButton.addEventListener("click", (event) => {
    event.preventDefault();
    moviesGrid.innerHTML = ``;
    page = 1;
    x = true;
    loadNowPlaying();
    closeButton.style.display = "none";
})

async function loadNowPlaying() {
    let response = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=en-US&page=${page}`);
    // console.log(response);
    let responseData = await response.json();
    console.log(responseData);

    for (let i=0;i<responseData.results.length;i++) {
        displayResults(responseData.results[i]);
    }
}

async function searchMovies(event) {
    x = false;
    console.log(event)
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&page=${page}&include_adult=false&query=${event}`);
    console.log(response);
    let responseData = await response.json();
    console.log(responseData);
    for (let i=0;i<responseData.results.length;i++) {
        displayResults(responseData.results[i]);
    }
}

function displayResults(e) {
    moviesGrid.innerHTML += `
        <div class="movie-card">
            <img class="movie-poster" src="http://image.tmdb.org/t/p/w500${e.poster_path}">
            <p class="movie-votes">${e.vote_average}</p>
            <p class="movie-title">${e.title}</p>
        </div>
    `;
}

window.onload = function () {
    loadNowPlaying();
}