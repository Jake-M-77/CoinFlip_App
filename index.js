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
        console.log(i);
        rty();
        await Sleep(coinSpinDuration.duration);
        
    }
}

const coinSpin = [
    { transform: "rotateY(180deg)" }
];

const coinSpinDuration = {
    duration: 2000,
    iterations: 1
};

async function rty() {
    coinImage.animate(coinSpin, coinSpinDuration);

    setTimeout(() => {
        qwe();
    }, coinSpinDuration.duration / 2);
}



function qwe() {
    let random = Math.floor(Math.random() * 2);
    console.log(random);
    
    if(spinAmount === 5)
    {
        console.log("Ran loop again!");
    }

    if(isHead)
    {
        spinCounter++;
        coinImage.src = "/images/coinTail.jpg";
    }
    else
    {
        spinCounter++;
        coinImage.src = "/images/coinFace.jpg";
        
    }

    isHead = !isHead;

    

    if(spinCounter === spinAmount)
    {
        console.log(`SpinCOUNT:${spinCounter}`);
        if(random === 1)
        {
            coinImage.src = "/images/coinTail.jpg";

        }
        else
        {
            coinImage.src = "/images/coinFace.jpg";

        }
    // }else if(spinCounter === spinAmount)
    // {
    //     console.log(`spincount-after:${spinCounter}`);
    }
}

