(function(){
    const sliders = [...document.querySelectorAll('.slider-body')];
    const arrowNext = document.querySelector('#next');
    const arrowPrev = document.querySelector('#prev');
    let value;

    arrowNext.addEventListener("click" , () => changePosition(1));
    arrowPrev.addEventListener("click" , () => changePosition(-1));

    function changePosition(change){
        const currentElement = Number(document.querySelector('.slider-body-show').dataset.id);
        value = currentElement;
        value += change;
        if (value === 0 || value == sliders.length+1){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[currentElement-1].classList.toggle("slider-body-show");
        sliders[value-1].classList.toggle("slider-body-show");
    }
})()