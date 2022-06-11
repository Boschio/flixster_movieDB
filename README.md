
## Week 1 Assignment: Flixster

Submitted by: **James A. Bosch**

Estimated time spent: **15** hours spent in total

Deployed Application (optional): [Flixster Deployed Site](https://boschio.github.io/flixster_movieDB/)

### Application Features

#### CORE FEATURES

- [x] User can view a list of current movies from The Movie Database API as a grid view
  - The grid element should have an id of `movies-grid`
  - Each movie wrapper element should have a class of `movie-card`
- [x] For each movie displayed, user can see the following details:
  - Title - the element should have a class of `movie-title`
  - Image - the `img` element should have a class of `movie-poster`
  - Votes - the element should have a class of `movie-votes`
- [x] User can load more current movies by clicking a button at the bottom of the list
  - The button should have an id of `load-more-movies-btn`.
  - When clicked, the page should not refresh.
  - New movies should simply be added to the bottom
- [x] Allow users to search for movies and display them in a grid view
  - There should be a search input element with an id of `search-input`
  - Users should be able to type into the input
  - When a user hits 'Enter', it should send a search request to the movies API
  - The results from the search should be displayed on the page
  - There should be a close icon with an id of `close-search-btn` that exits the search, clears results, and shows the current movies displayed previously
- [x] Website accounts for basic HTML/CSS accessibility features
- [x] Website should be responsive

#### STRETCH FEATURES

- [x] Deploy website using GitHub Pages. 
- [x] Allow user to view more details about a movie within a popup.
- [x] Improve the user experience through CSS & animation.
- [x] Allow movie video trailers to be played using [embedded YouTube](https://support.google.com/youtube/answer/171780?hl=en)
- [x] Implement anything else that you can get done to improve the app functionality!

### Walkthrough Video

![Flixster walkthrough](flixster-preview.gif)

### Reflection

* Did the topics discussed in your labs prepare you to complete the assignment? Be specific, which features in your weekly assignment did you feel unprepared to complete?

I felt that the topics prepared me for most everything for the labs, especially covering APIs in javascript and event listeners. I felt a bit unprepared to work with CSS at first, but over time started to get a better grasp at viewing the DOM and placing things better. 

* If you had more time, what would you have done differently? Would you have added additional features? Changed the way your project responded to a particular event, etc.
  
I am more interested in back-end and avoided some CSS styling early on. I think I would have changed this by spending more time planning on how my page will look and add more animation. I wanted more features, such as searching different categories/genres of movies, and maybe implemented TV shows as well. I also wanted to have a persistent navigation bar, so that you could search from anywhere in the screen, instead of having to scroll to the top.

* Reflect on your project demo, what went well? Were there things that maybe didn't go as planned? Did you notice something that your peer did that you would like to try next time?

Implementing the API and different features from it went very well. I found it relatively easy to use once I had my initial implementation. 

A lot of my styling took way more time than I hoped, and my final product is not what I envisioned. 

My peers all did amazingly well, and I wish I had more time to implement more features into my code. Next time I also plan on trying to make a prettier and more cohesive page.

### Open-source libraries used

- Add any links to open-source libraries used in your project.

### Shout out

Give a shout out to somebody from your cohort that especially helped you during your project. This can be a fellow peer, instructor, TA, mentor, etc.

I want to shout out all of the TAs, including Snigdha and Anitya for their constant encouragement and Rebecca for thoroughly walking through my code for an issue I faced. 

I also want to shout out my mentor, Tim Kindberg, for being very flexible with time, as well as being persistent in his communication with me.
