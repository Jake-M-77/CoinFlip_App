const coinFlipBtn = document.getElementById("flipBtn");
let coinImage = document.getElementById("coin");
let isHead = true;
let spinAmount = 5;
let spinCounter = 0;

coinFlipBtn.addEventListener("click", event => {
    console.log("Test");
    
    FlipTimes(spinAmount);
    spinCounter = 0;

});

function Sleep(ms){
    return new Promise(Resolve => setTimeout(Resolve, ms));
}

async function FlipTimes(spinAmount){
    for (let i = 0; i < spinAmount; i++) {
        AnimateCoin();
        await Sleep(COINSPINDURATION.duration);
    }
}

const COINSPIN = [
    { transform: "rotateY(180deg)" }
];

const COINSPINDURATION = {
    duration: 2000,
    iterations: 1
};

async function AnimateCoin() {
    coinImage.animate(COINSPIN, COINSPINDURATION);

    setTimeout(() => {
        UpdateCoinFace();
    }, COINSPINDURATION.duration / 2);
}

function UpdateCoinFace() {
    spinCounter++;
    if(isHead)
    {
        coinImage.src = "/images/coinTail.jpg";
    }
    else
    {
        coinImage.src = "/images/coinFace.jpg";
        
    }

    CoinRandomiser();

    isHead = !isHead;
}

function CoinRandomiser(){

    let random = Math.floor(Math.random() * 2);
    console.log(random);

    if(spinCounter === spinAmount)
    {
        random === 1 ? coinImage.src="/images/coinTail.jpg" : coinImage.src="/images/coinFace.jpg";
    }
}

    

