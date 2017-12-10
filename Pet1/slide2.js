var left=0;
var timer;
autoSlider();
function autoSlider() {
timer = setTimeout(sliderLeft, 3000);
}

function sliderLeft()
{
    var polosa = document.getElementById('polosa');
    var polosa2 = document.getElementById('polosa2');
    left = left-150;
    if(left<-300)
    {
        left = 0;
    }
    polosa.style.left = left+"px";
    polosa2.style.left = left+"px";
    autoSlider();
}
