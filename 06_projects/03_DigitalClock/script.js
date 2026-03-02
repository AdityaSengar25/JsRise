const clock = document.querySelector('#clock');

setInterval(() => {
    const date = new Date();
    clock.textContent = date.toLocaleTimeString();

}, 1000);