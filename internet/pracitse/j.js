window.onload = () => {
    const TIMER_DEFAULT_VALUE = 60;

    const startButton = document.getElementById('start');
    const stopButton = document.getElementById('stop');
    const resetButton = document.getElementById('reset');

    let timerValue = 0;
    let timerId;


    const clearCountdown = () => {
        if (timerId){
            clearInterval(timerId);
            console.log('Yes2');
            return true;
        }
        return false;
    }

    const startOrResumeCountdown = () => {
        timerValue = timerId ? timerValue: TIMER_DEFAULT_VALUE;
        timerId = setInterval(() => {
                if (timerValue > 0){
                    timerValue--;
                }
                console.log(timerValue);
            }, 1000)
    }

    if (startButton){
        startButton.addEventListener('click', () => {
            startOrResumeCountdown();
        });
    }

    if (stopButton){
        stopButton.addEventListener('click', startOrResumeCountdown);
    }

    if (resetButton){
        resetButton.addEventListener('click', () => {
            console.log('Yes');
            if (clearCountdown){
                console.log('No');
            }
        });
    }
}


