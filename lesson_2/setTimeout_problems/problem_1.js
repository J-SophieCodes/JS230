function delayLog() {
  for (let sec = 1; sec <= 10; sec++) {
    setTimeout(() => console.log(sec), sec * 1000);
  }
}

delayLog();