function displayTime() {
    let date = new Date();
    let time = date.toLocaleTimeString();
    document.querySelector('.clock').textContent = time;
  }
  const createClock = setInterval(displayTime, 1000);
