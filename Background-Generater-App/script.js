/* VARIABLES */
let direction = document.getElementsByName("directionSet");
let css = document.getElementById("code");
let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let body = document.getElementById("gradient");

 
/* FUNCTIONS */
function getSelectedRadio(){
    var i;
    for(i = 0; i < direction.length; i++){
        if(direction[i].checked === true)
            return direction[i].value;
    }
}

function setGradient(){
    let selectedDirection = getSelectedRadio();
    let css_color;

    if(selectedDirection === 'radial-gradient'){
        css_color =  selectedDirection + "("
                        + color1.value 
                        + ", " 
                        + color2.value 
                        + ")";
    }else{
        css_color = "linear-gradient(" + selectedDirection + ", " 
                        + color1.value 
                        + ", " 
                        + color2.value 
                        + ")";
    }

    body.style.background = css_color;
    

    css.textContent = body.style.background + ";";
}

/* EVENTS 
color1.addEventListener('.color1', setGradient);
color2.addEventListener('input[type="color"]', setGradient);*/