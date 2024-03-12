//Task 1
const movies = [
  {
    movieName: "The Thing",
    releaseYear: 1982,
    directedBy: "Carpenter",
    runningTimeInMinutes: 109,
  },
  {
    movieName: "Aliens",
    releaseYear: 1986,
    directedBy: "Cameron",
    runningTimeInMinutes: 137,
  },
  {
    movieName: "Men in Black",
    releaseYear: 1997,
    directedBy: "Sonnenfeld",
    runningTimeInMinutes: 98,
  },
  {
    movieName: "Predator",
    releaseYear: 1987,
    directedBy: "McTiernan",
    runningTimeInMinutes: 107,
  },
];

function byProperty(property, direction) {
  const moviesCopy = [...movies];

  return function (a, b) {
    if (direction === ">") {
      return a[property] > b[property] ? 1 : a[property] < b[property] ? -1 : 0;
    } else if (direction === "<") {
      return a[property] < b[property] ? 1 : a[property] > b[property] ? -1 : 0;
    }
  };
}

// console.log(movies.sort(byProperty("releaseYear", ">")));
// // виведе масив фільмів посортованих по року випуску, від старішого до новішого
console.log(movies.sort(byProperty("runningTimeInMinutes", ">")));
// // виведе масив фільмів посортованих по їх тривалості, від найдовшого до найкоротшого
// console.log(movies.sort(byProperty("movieName", ">")));
// // виведе масив фільмів посортованих по назві, в алфавітному порядку


// Task 2

function someFunction(arg) {
  return arg + 1;
}

function slower(func, seconds) {
  return function (...args) {
    console.log(`Chill out, you will get your result in ${seconds} seconds`);
    setTimeout(() => {
      const result = func(...args);
      console.log(result);
    }, seconds * 1000);
  };
}
let slowedSomeFunction = slower(someFunction, 5);

slowedSomeFunction(1);
