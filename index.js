//RGB METHOD DEFINED
var name  = prompt("Enter Your Name: ")
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    
    var result = Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
    // console.log(`result is ${result} min${min} max${max}`)
    return result
}
function getRgb(){
    return `rgb( ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)}, ${getRandomInt(0, 256)})`
}
function settingUpUI(){
    circleClass.innerHTML = "";
    for(var i = 0; i < 6; i++){
        circleClass.insertAdjacentHTML(
            'beforeend', 
            `<div class="circleWrapper flex">
                <div style="background: ${getRgb()}" class="circle"></div>
            </div>`
        );
    }
    circlesArray = Array.from( document.querySelectorAll(".circle"));
    randomNumForAns = getRandomInt(0, 6)
    ans = (circlesArray[randomNumForAns].style.background)
    tempAns.textContent = ans
}
//------------------------------------------------------------------------------------------------
var nameSelect = document.querySelector('.name')
var scoreCount = document.querySelector('.scoreCount')
var circleClass = document.querySelector(".circles");
var containerBox = document.querySelector('.container')
var ans = 0;
var counter = 0;
var circlesArray = null;
var randomNumForAns = getRandomInt(0, 6)
console.log(randomNumForAns)
var tempAns = document.querySelector('.header')

scoreCount.textContent = "";
scoreCount.textContent = counter;
settingUpUI();
console.log(ans)
//name & score
nameSelect.textContent = "";
nameSelect.textContent = `${name}`;


//win or loose condition
circleClass.addEventListener('click', function(e){
    if(Array.from((e.target.classList)).includes("circle")){
        var userPick = e.target.style.background 
        if(userPick === ans){
            containerBox.style.background = ans
            circlesArray.forEach(function(circle){
                if(circle.style.background != ans){
                    circle.style.opacity = 0;
                }
            })
                counter ++;
                scoreCount.textContent = counter;
        }
        else{
            e.target.style.opacity = 0
        }
    }
})

var resetBtn = document.querySelector('.resetBtn')
resetBtn.addEventListener('click', function(){
    settingUpUI();
})