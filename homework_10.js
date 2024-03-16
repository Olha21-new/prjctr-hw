"use stict";

//task 1

function durationBetweenDates(
  startDate = new Date(),
  endDate = new Date(),
  unit = "days"
) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  let timeDiff = end - start;

  if (end < start) {
    timeDiff *= -1;
  }

  let duration;
  switch (unit) {
    case "days":
      duration = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + " days";
      break;
    case "hours":
      duration = Math.floor(timeDiff / (1000 * 60 * 60)) + " hours";
      break;
    case "minutes":
      duration = Math.floor(timeDiff / (1000 * 60)) + " minutes";
      break;
    case "seconds":
      duration = Math.floor(timeDiff / 1000) + " seconds";
      break;
    default:
      duration = "Invalid unit";
  }

  return duration;
}

console.log(durationBetweenDates("02 Aug 1985", "03 Aug 1985", "seconds")); 


// 2. Масив унікальних значень

const userNames = [
  "Петро",
  "Емма",
  "Петро",
  "Емма",
  "Марта",
  "Яна",
  "Василь",
  "Антон",
  "Олена",
  "Емма",
];

function filterUnique(array) {
  const uniqueSet = new Set(array);

  const uniqueArray = Array.from(uniqueSet);
  return uniqueArray;
}

console.log(filterUnique(userNames)); 
