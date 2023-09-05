
let seconds = 20;
let timerInterval;

const downloadBtn = document.getElementById('downloadBtn');

function startTimer() {

    downloadBtn.style.background = "darkorange";
    downloadBtn.style.color = "black";
    downloadBtn.textContent = `Please wait ${seconds}s`;
    downloadBtn.disabled = true;
    timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {

    seconds--;
    if (seconds === 0) {
        downloadBtn.style.background = "blue";
        downloadBtn.style.color = "white";
        clearInterval(timerInterval);
        downloadBtn.textContent = 'Download Now';
        downloadBtn.disabled = false;
    } else {
        downloadBtn.style.background = "darkorange";
        downloadBtn.style.color = "black";
        downloadBtn.textContent = `Please wait ${seconds} s`;
    }

}

function downloadClicked() {

    if (downloadBtn.textContent === 'Generate Link') {
        startTimer();
    } else if (downloadBtn.textContent === 'Download Now') {
        downloadBtn.style.background = "purple";
        downloadBtn.textContent = 'Redirecting....';
        window.location.href = 'https://www.youtube.com';
    }
}