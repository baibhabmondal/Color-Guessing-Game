//alert("WELCOME!");
var numSquares = 6;
var easy = document.querySelector(".easy");
var hard = document.querySelector(".hard");
var navbar = document.querySelector(".navbar");
var square = document.querySelectorAll(".square");
var color = generateRandomColor(numSquares);
var random = 0;
var pickedColor = colorf();
var newGame = document.querySelector(".newgame");
var answer = document.querySelector(".answer");
var colorDisplay = document.querySelector(".colorDisplay");
colorDisplay.textContent = pickedColor;




     newGame.addEventListener("click", function(){
        //alert("clicked");
        color = generateRandomColor(numSquares);
        pickedColor = colorf();
        colorDisplay.textContent = pickedColor;
     if(numSquares === 3)
     {
        for(var i= 3; i< 6; i++)
            square[i].style.backgroundColor = "#232323";
     }


     for( var i= 0; i< color.length; i++){
        square[i].style.backgroundColor = color[i];
     }

           navbar.style.backgroundColor = "#0088ff";
           answer.style.opacity = "0";
           if(newGame.textContent === "Try Again?")
           newGame.textContent = "New Colors" ;
     newGame.classList.add("next");
     });




    function colorf(){
      var random = Math.floor(Math.random() * color.length);
     return color[random];
}



function changeBackground(c){
    for( var i = 0; i< square.length; i++)
    {
              square[i].style.backgroundColor = c;
    }


}






for(var i = 0; i<color.length; i++)
{
     square[i].style.backgroundColor = color[i];

     square[i].addEventListener("click", function(){

       var clickedColor = this.style.backgroundColor;
         console.log(clickedColor + "" + pickedColor);
//         console.log(pickedColor);

         if( clickedColor === pickedColor)
            {
                //alert("Correct!!");
              answer.style.opacity = "1";
               newGame.textContent = "Try Again?";
              newGame.classList.add("next");

              changeBackground(clickedColor);
              navbar.style.backgroundColor = clickedColor;



              }
        else
            this.style.backgroundColor = "#232323";
            // alert("Wrong you moron! give another try!");


     });

 }


   newGame.addEventListener("mouseover", function(){
        this.classList.add("hover");
     });

newGame.addEventListener("mouseout", function(){
        this.classList.remove("hover");
     });


  function generateRandomColor(num){
    //create an array
    var arr = [] ;
    //pushing random colors
    for(var i = 0; i<num; i++)
    {
        // randomColor();
      arr.push(randomColor());
    }


    //return arr
    return arr;
  }


function  randomColor(){
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random()* 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", "+ b + ")";
}


easy.addEventListener("click",function(){
    easy.classList.add("select");
    hard.classList.remove("select");
    numSquares = 3;
    color = generateRandomColor(numSquares);
        pickedColor = colorf();
        colorDisplay.textContent = pickedColor;
     for( var i= 0; i< color.length; i++){
        square[i].style.backgroundColor = color[i];
     }
        for(var i =3; i<6; i++){
            square[i].style.backgroundColor = "#232323";
        }
        navbar.style.backgroundColor = "#0088ff"
         answer.style.opacity = "0";
         if(newGame.textContent === "Try Again?")
           newGame.textContent = "New Colors" ;


});
hard.addEventListener("click",function(){
    hard.classList.add("select");
    easy.classList.remove("select");
    numSquares = 6;
color = generateRandomColor(numSquares);
        pickedColor = colorf();
        colorDisplay.textContent = pickedColor;
     for( var i= 0; i< color.length; i++){
        square[i].style.backgroundColor = color[i];
     navbar.style.backgroundColor = "#0088ff"
     }

 answer.style.opacity = "0";
         if(newGame.textContent === "Try Again?")
           newGame.textContent = "New Colors" ;


});
