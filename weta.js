let { performance } = require("perf_hooks");
function Weta(message, target) {
  let start = performance.now();
  return data => {
    let end = performance.now();
    data === target
      ? console.log(`PASS \n✔ ${message} ${Math.floor((end - start) * 100)}ms`)
      : console.log(
          `Whoops! It failed... It should have been --${target}--\n but instead we got --${data}--`
        );
  };
}

function testing() {
  return "hi";
}

let ten = Weta("adds 1 + 2 to equal 3 ", 45150);

ten(quad(0, 300));

let quickie = n => {
  return (n * (n + 1)) / 2;
};

// answer(testing());

function quad(start, end) {
  let result = 0;
  for (let i = start; i <= end; i += 1) {
    result += i;
  }
  return result;
}
let quicksters = Weta("should be super fast", 45150);

quicksters(quickie(300));
// console.log(quad(5, 10));
