function setImageVisible(id, visible) {
    var img = document.getElementById(id);
    img.style.visibility = (visible ? 'visible' : 'hidden');
}

var clicked = 0;

function changeImage(){

    if(clicked == 0){
        document.getElementById("btm_layer").style.visibility = "visible";
        document.getElementById("bowl_closed").src="./images/bowl_open.png";
        clicked = 1;
    } else {
        document.getElementById("btm_layer").style.visibility = "hidden";
        document.getElementById("bowl_closed").src="./images/bowl_closed.jpg";
        clicked = 0;

    }
    
 }

var count = 0;
var opacity = .2;
function changeMirror(){
    

    var fade = document.getElementById("question"); 

    if(count == 0){
        document.getElementById("mirror").src="./images/mirror2.jpg";
        fade.style.opacity = opacity; 

    } else if (count == 1){
        document.getElementById("mirror").src="./images/mirror3.jpg";
        fade.style.opacity = opacity; 

    } else if(count == 2){
        document.getElementById("mirror").src="./images/mirror4.jpg";
        fade.style.opacity = opacity; 

    } else if(count == 3){
        document.getElementById("mirror").src="./images/mirror5.jpg";
        fade.style.opacity = 1; 
    } else if(count == 4){
        document.getElementById("mirror").src="./images/mirror6.jpg";
        fade.src="./images/whatami2.png";

    } else if(count == 5){
        window.location.href = "doorways.html"
    }
    count++;
    opacity = opacity + .2;

}

function enterVoid(){
    window.location.href = "./paranoia.html";

}

function fallThrough(){
    window.location.href = "./void.html";

}

function toDoorways(){
    window.location.href = "./doorways.html";
}

function fadeIn() { 
    var fade = document.getElementById("question"); 
    var opacity2 = 0; 
    var intervalID = setInterval(function() { 

        if (opacity < 1) { 
            opacity2 = opacity2 + 0.1 
            fade.style.opacity = opacity2; 
        } else { 
            clearInterval(intervalID); 
        } 
    }, 200); }

if(window.location.href == "./index.html"){
    const enter = document.getElementById('enter');
    
    enter.addEventListener('click', function() { 
        window.location.href = "./doorways.html";

    });
}

    

const security_no = document.getElementById('no_risk');
const security_yes = document.getElementById('yes_risk');


security_no.addEventListener('click', function() { 
        toDoorways();

    });

security_yes.addEventListener('click', function() { 
        toDoorways();

    });

 

