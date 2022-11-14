// Header
var i=0;
text="welcome to our world ..."


function typing() {
    if(i<text.length){
        document.getElementById('text').innerHTML += text.charAt(i);
        i++;
        setTimeout(typing,200);
    }
}
typing();


                    // Offers

const skillsSection = document.getElementById('about');
const progressBars = document.querySelectorAll('.progress-bar');


function showProgress() {
    progressBars.forEach(progressBar=> {
        const value = progressBar.dataset.progress;
        progressBar.style.opacity =1;
        progressBar.style.width =`${value}%`;
    });
}

function hideProgress() {
    progressBars.forEach( p => {
        p.style.opacity = 0;
        p.style.width = 0;
});
}

window.addEventListener('scroll' ,() => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 2;

    if(sectionPos < screenPos) {
        showProgress();
    }else {
        hideProgress();
    }
})



                    // Wrapper

let valueDispaly = document.querySelectorAll(".num")
let interval = 4000;

valueDispaly.forEach(valueDispaly => {
    let startValue = 0;
    let endValue = parseInt(valueDispaly.getAttribute
        ("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function() {
        startValue += 1;
        valueDispaly.textContent = startValue ;
        if (startValue == endValue) {
            clearInterval(counter);
        }
    }, duration);
});

