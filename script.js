var codingSwitch = False, gamingSwitch = False, CareerSwitch = False;
var codingTag = document.getElementById("codingtag");
var gamingTag = document.getElementById("gamingtag");
var careerTag = document.getElementById("careertag");

function codingTagSort() {
    //Toggle Switch
    if (codingSwitch == false){
        codingSwitch = true;
    }else if (codingSwitch == true){
        codingSwitch = false;
    }

    //Toggle Items;
    if (gamingSwitch == false){
        gamingTag.style.display = "none";
    }else if (gamingSwitch == true){
        gamingTag.style.display = "block";
    }
    if (careerSwitch == false){
        careerTag.style.display = "none";
    }else if (careerSwitch == true){
        careerTag.style.display = "block";
    }   
}
function gamingTagSort() {
    //Toggle Switch
    if (gamingSwitch == false){
        gamingSwitch = true;
    }else if (gamingSwitch == true){
        gamingSwitch = false;
    }
    //Toggle Items;
    if (codingSwitch == false){
        gamingTag.style.display = "none";
    }else if (codingSwitch == true){
        gamingTag.style.display = "block";
    }
    if (careerSwitch == false){
        careerTag.style.display = "none";
    }else if (careerSwitch == true){
        careerTag.style.display = "block";
    }
}
function careerTagSort() {
    //Toggle Switch
    if (careerSwitch == false){
        careerSwitch = true;
    }else if (careerSwitch == true){
        careerSwitch = false;
    }
    //Toggle Items;
    if (codingSwitch == false){
        codingTag.style.display = "none";
    }else if (codingSwitch == true){
        codingTag.style.display = "block";
    }    
    if (gamingSwitch == false){
        gamingTag.style.display = "none";
    }else if (gamingSwitch == true){
        gamingTag.style.display = "block";
    }
}
function resetTagSort() {
    codingTag.style.display = "block";
    gamingTag.style.display = "block";
    careerTag.style.display = "block";
}