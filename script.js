// ======================================
// ELEMENTS
// ======================================

const loadingScene = document.getElementById("loadingScene");
const giftScene = document.getElementById("giftScene");
const pinScene = document.getElementById("pinScene");
const orbitScene = document.getElementById("orbitScene");
const bouquetScene = document.getElementById("bouquetScene");
const endingScene = document.getElementById("endingScene");

const giftBox = document.getElementById("giftBox");

const pinInput = document.getElementById("pinInput");
const checkPinBtn = document.getElementById("checkPinBtn");
const pinMessage = document.getElementById("pinMessage");

const bgMusic = document.getElementById("bgMusic");
const muteBtn = document.getElementById("muteBtn");

const modal = document.getElementById("modal");
const modalBody = document.getElementById("modalBody");
const closeModal = document.getElementById("closeModal");

const progressText = document.getElementById("progressText");
const daysCounter = document.getElementById("daysCounter");

const loadingProgress =
document.getElementById("loadingProgress");

const loadingText =
document.getElementById("loadingText");

const heartCore =
document.getElementById("heartCore");

const loveBtn =
document.getElementById("loveBtn");

const foreverText =
document.getElementById("foreverText");

const memoryItems =
document.querySelectorAll(".memory-item");

// ======================================
// VARIABLES
// ======================================

const CORRECT_PIN = "220526";

let isMuted = false;
let openedMemories = 0;
let heartClick = 0;

const openedList = [];

// ======================================
// SCENE
// ======================================

function showScene(scene){

[
    loadingScene,
    giftScene,
    pinScene,
    orbitScene,
    bouquetScene,
    endingScene
].forEach(s=>{

    if(s){
        s.classList.add("hidden");
    }

});

scene.classList.remove("hidden");

}

// ======================================
// BLOOM TRANSITION
// ======================================

function bloomTransition(){

const bloom =
document.createElement("div");

bloom.className =
"bloomScreen";

document.body.appendChild(bloom);

setTimeout(()=>{

    bloom.remove();

},2000);

}

// ======================================
// FLOWER RAIN
// ======================================

function createFlowerRain(amount=50){

for(let i=0;i<amount;i++){

    const flower =
    document.createElement("div");

    flower.className =
    "flower";

    flower.innerHTML =
    "🌸";

    flower.style.left =
    Math.random()*100 + "vw";

    flower.style.fontSize =
    (Math.random()*18+16)+"px";

    flower.style.animationDuration =
    (Math.random()*4+3)+"s";

    document.body.appendChild(flower);

    setTimeout(()=>{

        flower.remove();

    },7000);

}

}

// ======================================
// LOADING
// ======================================

window.addEventListener("load",()=>{

let progress = 0;

const loader =
setInterval(()=>{

    progress++;

    loadingProgress.style.width =
    progress + "%";

    loadingText.innerText =
    progress + "%";

    if(progress >= 100){

        clearInterval(loader);

        setTimeout(()=>{

            showScene(giftScene);

        },500);

    }

},30);

});

// ======================================
// DAY COUNTER
// ======================================

const startDate =
new Date("2026-05-22");

const today =
new Date();

const diff =
today - startDate;

const days =
Math.floor(
diff / (10006060*24)
);

if(daysCounter){

daysCounter.innerText =
"Sudah bersama selama " +
days +
" hari ❤️";

}

// ======================================
// GIFT
// ======================================

giftBox.addEventListener("click",()=>{

createFlowerRain(120);

bloomTransition();

setTimeout(()=>{

    showScene(pinScene);

},1500);

});

// ======================================
// PIN
// ======================================

checkPinBtn.addEventListener("click",()=>{

const pin =
pinInput.value.trim();

if(pin === CORRECT_PIN){

    pinMessage.style.color =
    "#ff4f91";

    pinMessage.innerText =
    "Anjay bener 😎❤️";

    bgMusic.volume = 0.5;

    bgMusic.play().catch(()=>{});

    createFlowerRain(120);

    bloomTransition();

    setTimeout(()=>{

        showScene(orbitScene);

    },1500);

}else{

    pinMessage.style.color =
    "crimson";

    pinMessage.innerText =
    "Kok salah gimana sie tanggal jadian kita seng 😭";

    pinInput.value = "";

}

});

// ======================================
// ENTER PIN
// ======================================

pinInput.addEventListener("keypress",(e)=>{

if(e.key === "Enter"){

    checkPinBtn.click();

}

});

// ======================================
// MUTE
// ======================================

muteBtn.addEventListener("click",()=>{

isMuted = !isMuted;

bgMusic.muted = isMuted;

muteBtn.innerHTML =
isMuted ? "🔇" : "🔊";

});

// ======================================
// HEART EASTER EGG
// ======================================

heartCore.addEventListener("click",()=>{

heartClick++;

if(heartClick >= 5){

    alert(
    "Rahasia ❤️\nAku bakal selalu milih kamu."
    );

    heartClick = 0;

}

});

// ======================================
// MEMORY MODAL
// ======================================

memoryItems.forEach(item=>{

item.addEventListener("click",()=>{

    const target =
    item.dataset.target;

    if(!openedList.includes(target)){

        openedList.push(target);

        openedMemories++;

        progressText.innerText =
        openedMemories + " / 8";

    }

    if(target === "favorite"){

        createFlowerRain(150);

        bloomTransition();

        setTimeout(()=>{

            showScene(
            bouquetScene
            );

        },1500);

        return;

    }

    const template =
    document.getElementById(target);

    if(template){

        modalBody.innerHTML =
        template.innerHTML;

        modal.classList.remove(
        "hidden"
        );

    }

});

});

// ======================================
// CLOSE MODAL
// ======================================

closeModal.addEventListener("click",()=>{

modal.classList.add("hidden");

});

modal.addEventListener("click",(e)=>{

if(e.target === modal){

    modal.classList.add("hidden");

}

});

// ======================================
// LOVE BUTTON
// ======================================

loveBtn.addEventListener("click",()=>{

foreverText.classList.remove(
"hidden"
);

createFlowerRain(200);

setTimeout(()=>{

    bloomTransition();

    setTimeout(()=>{

        showScene(
        endingScene
        );

    },1500);

},1500);

});

// ======================================
// AUTO FLOWER
// ======================================

setInterval(()=>{

createFlowerRain(4);

},8000);