
var circle= document.querySelector(".circle");
var main_1=document.querySelector(".main_1");
var welcome_h1 =document.querySelector(".welcome_h1");
var con11 = document.querySelector(".con11_left");


function swipe(){
circle.classList.add("cirlce_active");
main_1.classList.add( "main_2");
welcome_h1.classList.add("welcome_h1_opacity");
con11.classList.add("con11_left_2");

circle.style.transition = "all 1s";
main_1.style.transition = "all 1s";
welcome_h1.style.transition = "all .5s";
con11.style.transition = "all 1s";




text_o();

myFunction()
welcome_h1.classList.add("welecome_h1_padinf");


welcome();
}

function myFunction() {
  setTimeout(function (){
      window.open("home.html");
  }, 2000

  )

}


function text_o() {


  setTimeout(
    function(){
      welcome_h1.classList.remove("welcome_h1_opacity");
    } , 700
  )
}


function welcome(){
  setTimeout( function(){
    document.querySelector(".welcome_h1").innerText="welcome"
  } , 300

  )

}
