var randomNumber1=Math.random();
randomNumber1=randomNumber1*6;
randomNumber1=Math.floor(randomNumber1)+1;
console.log(randomNumber1);
var randomNumber2=Math.random();
randomNumber2=randomNumber2*6;
randomNumber2=Math.floor(randomNumber2)+1;
console.log(randomNumber2);
var images1 = "images/dice"+ randomNumber1 +".png";
var images2 = "images/dice"+ randomNumber2 +".png";
 
document.querySelector(".dice .img1").setAttribute("src",images1);
document.querySelector(".dice .img2").setAttribute("src",images2);
if(sessionStorage.getItem('flag')===null){
    document.querySelector("h1").innerHTML = "Refresh me";
    sessionStorage.setItem('flag','1');}
    else{
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 WINS!!🚩";
    document.querySelector("h1").style.fontSize="6rem";
    
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 WINS!!🚩";
    document.querySelector("h1").style.fontSize="6rem";

 
}
else{
    document.querySelector("h1").innerHTML="DRAW!!";
    document.querySelector("h1").style.fontSize="6rem";


}}