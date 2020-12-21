const promise = new Promise((res, rej) => {
  res("will this work!");
});

promise
  .then((result) => result + "!")
  .then((result1) => result1 + "*")
  .then((result2) => result2 + "!")
  .catch((err) => console.log(err))
  .then((result3) => console.log(result3));

const promise2 = new Promise((res, rej) => {
  setTimeout(res, 1000, "HIII");
});

Promise.all([promise, promise2]).then((val) => console.log(val));
