const COIN_FLIP_BTN = document.getElementById("flipBtn");
let coinImage = document.getElementById("coin");
const HEAD_COUNT_TEXT = document.getElementById("headCount");
const TAIL_COUNT_TEXT = document.getElementById("tailCount");
const PREVIOUS_FLIP_TEXT = document.getElementById("previousFlip");

let isHead = true;
let spinAmount = 5;
let spinCounter = 0;

let headCount = 0;
let tailCount = 0;
let previousFlip = "";




COIN_FLIP_BTN.addEventListener("click", event => {

    FlipTimes(spinAmount);
    spinCounter = 0;
    if (tailCount || headCount > 0) {
        PREVIOUS_FLIP_TEXT.textContent = previousFlip;
    }
});

function Sleep(ms) {
    return new Promise(Resolve => setTimeout(Resolve, ms));
}

async function FlipTimes(spinAmount) {
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
    if (isHead) {
        coinImage.src = "images/coinTail.jpg";
    }
    else {
        coinImage.src = "images/coinFace.jpg";

    }

    CoinRandomiser();

    isHead = !isHead;
}

function CoinRandomiser() {

    let random = Math.floor(Math.random() * 2);
    console.log(random);

    if (spinCounter === spinAmount) {
        random === 1 ? coinImage.src = "images/coinTail.jpg" : coinImage.src = "images/coinFace.jpg";
        random === 1 ? tailCount++ : headCount++;
        random === 1 ? previousFlip = "Tails" : previousFlip = "Heads";
        HEAD_COUNT_TEXT.textContent = headCount;
        TAIL_COUNT_TEXT.textContent = tailCount;
    }
}



