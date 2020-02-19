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

export default Weta;
