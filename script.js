var on = document.querySelector("#bty");
var off = document.querySelector("#btn");
var circle = document.querySelector("#circle");

// // thats a program for seprate buttom on and off
on.addEventListener("click", function(){
    circle.style.background = "gold";
})

off.addEventListener("click", function(){
    circle.style.background = "white";
})



// var turn = document.querySelector("#btn");
// var  = 0;
// turn.addEventListener("click", function(){
//     if(===0){
//         circle.style.background = "yellow";
//          = 1;
//     }

//     else{
//         circle.style.background = "transparent";
//          = 0;
//     }
// })

