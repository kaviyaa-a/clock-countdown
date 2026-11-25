const timer = document.getElementById("timer");
const count = document.getElementById("count");
const countDown = document.getElementById("countdown");
const timesUp = document.getElementById("timesUp");

const time = new Date();

function liveTime() {
    const time = new Date();
    timer.innerHTML = time.toLocaleTimeString();
}
liveTime();

let startTimer = 0;

function startTime() {
    startTimer = setInterval(() => {
        const time = new Date();
        timer.innerHTML = time.toLocaleTimeString();
    }, 1000);

}

function stopTimer() {
    clearInterval(startTimer);
}

let counter = 0;

function startCountDown() {
    clearInterval(counter);

    let countValue = Number(count.value);
    countDown.innerHTML = countValue;

    counter = setInterval(() => {
        countValue--;
        countDown.innerHTML = countValue;
        
    if(countValue == 0){
         countDown.innerHTML = '';
        timesUp.style.display = 'block';
        clearInterval(counter);
    }

    }, 1000)
}