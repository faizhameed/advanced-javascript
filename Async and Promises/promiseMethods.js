const primisify = (item, delay) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(item);
    }, delay);
  });
};

const a = () => primisify("a", 100);
const b = () => primisify("b", 2000);
const c = () => primisify("c", 3000);
async function parallel() {
  const promises = [a(), b(), c()];
  const [o1, o2, o3] = await Promise.all(promises);
  return `parallel is done:${o1},${o2},${o3}`;
}

parallel().then(console.log);

// race

async function race() {
  const promises = [a(), b(), c()];
  const o1 = await Promise.race(promises);
  return `race is done:${o1}`;
}
race().then(console.log);
// sequence- only goes to next promise after the previous is done
async function sequence() {
  const o1 = await a();
  const o2 = await b();
  const o3 = await c();
  return `sequence is done:${o1},${o2},${o3}`;
}

sequence().then(console.log);
