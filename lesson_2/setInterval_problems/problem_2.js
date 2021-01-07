let counterId;

function startCounting(count) {
  counterId = setInterval(() => console.log(count++), 1000);
}

function stopCounting(seconds) {
  setTimeout(() => {
    clearInterval(counterId);
    console.log('finish!');
  }, seconds * 1000);
}

startCounting(1);
stopCounting(10);