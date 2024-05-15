const taketime = document.querySelector(".taketime");
const Sbtn = document.querySelector(".Sbtn");
const output = document.querySelector(".output");
const Ebtn = document.querySelector(".Ebtn");


let hours;
let stopInterval;

taketime.addEventListener("change", function (e) {
    if (isNaN(e.target.value)) {
        return;

    }
    else {
        hours = e.target.value;

    }


});
Sbtn.addEventListener('click', function () {
    if (hours) {
        start();
    }

});
Ebtn.addEventListener('click', function () {
    stop();

});

function countDown() {

    --hours;
    output.innerHTML = hours;
    if (hours == 0) {
        clearInterval(stopInterval);
    }

}
function start() {

    stopInterval = setInterval(() => {
        countDown();
    }, 1000);

}
function stop() {

    clearInterval(stopInterval);


}



