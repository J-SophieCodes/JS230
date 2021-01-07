function startCounting(count) {
  let repeat = setInterval(() => console.log(count++), 1000);
  setTimeout(() => {
    clearInterval(repeat);
    console.log('finish!');
  }, 10000);
}

startCounting(1);
