const coin = document.getElementById("coin");
const button = document.getElementById("flipBtn");
const result = document.getElementById("result");
function flipCoin(){
    coin.classList.add("flip");
    setTimeout(function(){
        let random = Math.random();
        if(random < 0.5){
            coin.src = "resources/heads.svg";
            result.innerHTML = "Heads";
        }
        else{
            coin.src = "resources/tails.svg";
            result.innerHTML = "Tails";
        }
        coin.classList.remove("flip");
    },1000);
}
button.addEventListener("click",flipCoin);
coin.addEventListener("click",flipCoin);