"use stict";

// Task 1

function detonatorTimer(delay) {
  let intervalId = setInterval(function () {
    console.log(delay--);

    if (delay > 0) {
      clearInterval(intervalId);
      console.log("BOOM!");
    }
  }, 1000);
}
let delay = 3;

detonatorTimer(delay);

// Task 2
// рекурсивна
function detonatorTimer2(delay) {
  if (delay > 0) {
    console.log(delay);
    setTimeout(function () {
      detonatorTimer2(delay - 1);
    }, 1000);
  } else {
    console.log("BOOM!");
  }
}
let delay = 3;

detonatorTimer2(delay);

// Task 3
let me = {
  name: "Olya",
  residency: "Lviv",
  gender: "female",
  age: 22,
  hobby: "reading",
  defaultMood: "undifined",
  currentMood: "curiouse",
  introduce() {
    console.log(`My name is ${this.name} and I live in ${this.residency}`);
  },
  prognose() {
    console.log(`This year in August I'll be ${this.age + 1}`);
  },
  decibeMyMood() {
    console.log(
      `Mostly my mood is ${this.defaultMood}, my family says it depends on how hungry I am. But right now I'm totaly ${this.currentMood} how this code will work`
    );
  },
};

me.introduce();
me.prognose();
me.decibeMyMood();

// Task 4
let securedSelfIntroduce = me.introduce.bind(me);
let securedSelfPrognose = me.prognose.bind(me);
let securedSelfDescribeMyMood = me.decibeMyMood.bind(me);

setTimeout(securedSelfIntroduce, 1000);
setTimeout(securedSelfPrognose, 2000);
setTimeout(securedSelfDescribeMyMood, 3000);
