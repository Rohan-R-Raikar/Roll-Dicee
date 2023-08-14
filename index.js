
document.querySelector(".btn").addEventListener("click",function(){
    var randomNumber1 = Math.floor((Math.random(5))*6)+1;
    var randomNumber2 = Math.floor((Math.random(5))*6)+1;
    if(randomNumber1>randomNumber2){
        document.querySelector("h1").innerText = "🚩 Play 1 Wins";
    }else if (randomNumber1===randomNumber2){
        document.querySelector("h1").innerText ="🏳️ Draw 🏳️";
    }else{
        document.querySelector("h1").innerText = "Play 2 Wins 🚩";
    }
    document.querySelector(".img1").setAttribute("src","images/dice"+randomNumber1+".png");
    document.querySelector(".img2").setAttribute("src","images/dice"+randomNumber2+".png");
});