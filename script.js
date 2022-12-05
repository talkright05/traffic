let red= document.getElementsByClassName("circle-red")[0];
let yellow = document.getElementsByClassName("yellowplay")[0];
let green = document.getElementsByClassName("green")[0]
red.style.background ="red";
yellow.style.background ="yellow";
green.style.background = "green";
let time = 10;


function colourFunction(){
    time--;
    if(time < 8){
        red.style.opacity = 1;
        yellow.style.opacity = 0.3;
        green.style.opacity = 0.3;
        dropdown();
    }
}

function dropdown(){
    if (time < 5){
        yellow.style.opacity = 1;
        red.style.opacity = 0.3;
        green.style.opacity = 0.3;
    }
   
    if(time < 2){
        clearInterval(interval);
        green.style.opacity = 1;
        yellow.style.opacity  = 0.3;
        red.style.opacity = 0.3
        time = 10;
        loop()
    }

}

function loop(){
 interval =setInterval(colourFunction,1000);
}
 loop();
