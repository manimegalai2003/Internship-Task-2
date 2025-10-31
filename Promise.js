function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function example1() {
  console.log("Starting...");
  
  await delay(2000); 
  console.log("2 seconds passed!");
  
  await delay(1000); 
  console.log("3 seconds passed!");
}

example1();

function example2() {
  console.log("Starting example 2...");
  
  delay(1500)
    .then(() => {
      console.log("1.5 seconds passed!");
      return delay(1000);
    })
    .then(() => {
      console.log("2.5 seconds passed!");
    });
}

example2();

function delayWithValue(ms, value) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(value);
    }, ms);
  });
}

async function example3() {
  const result = await delayWithValue(1000, "Hello after 1 second!");
  console.log(result);
}

example3();
