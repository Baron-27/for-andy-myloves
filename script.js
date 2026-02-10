// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");
const confirmScreen = document.getElementById("confirmation-container");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn

noBtn.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noBtn.style.transition = "transform 0.3s ease";
    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES button click → show confirmation screen
yesBtn.addEventListener("click", () => {
    letter.style.display = "none";
    confirmScreen.style.display = "flex";
    
    setTimeout(() => {
        document.querySelector(".confirmation-window").classList.add("open");
    }, 50);

});


const sadCatImages = [
    "resources/crying/crying1.png",
    "resources/crying/crying2.png",  // Reuse or add new ones like "resources/sad2.gif"
    "resources/crying/crying3.png",
    "resources/crying/crying4.png",
    "resources/crying/crying5.png",
    "resources/crying/crying6.png",
    "resources/crying/crying7.png",
    "resources/crying/crying8.png",
    "resources/crying/crying9.png",
    "resources/crying/crying10.png",
    "resources/crying/crying11.png",
    "resources/crying/crying12.png",
    "resources/crying/crying13.png",
    "resources/crying/crying14.png",
    "resources/crying/crying15.png",

    // Add more paths as needed
];
let imageCount = 0;

const notSureBtn = document.getElementById("not-sure-btn");  // Your No button

notSureBtn.addEventListener("click", () => {
    const img = document.createElement("img");
    img.src = sadCatImages[imageCount % sadCatImages.length];
    img.style.position = "fixed";
    img.style.width = "200px";
    img.style.height = "200px";
    img.style.zIndex = "1000";
    img.style.pointerEvents = "none";
    
    // Equal 25% chance for all 4 sides (avoiding center 30-70% button area)
    const side = Math.floor(Math.random() * 4);
    let x, y, animName;
    
    switch(side) {
        case 0: // Top (0-20% height)
            x = Math.random() * 90;
            y = Math.random() * 20;
            animName = "floatDownOut";  
            break;
        case 1: // Right (85-95% width, avoid center)
            x = 85 + Math.random() * 10;
            y = 20 + Math.random() * 60;  // Skip button area vertically
            animName = "floatLeftOut";
            break;
        case 2: // Bottom (80-100% height)
            x = Math.random() * 90;
            y = 80 + Math.random() * 20;
            animName = "floatUpOut";
            break;
        case 3: // Left (0-15% width, avoid center)
            x = Math.random() * 15;
            y = 20 + Math.random() * 60;  // Skip button area vertically
            img.style.transformOrigin = "100% 50%";
            animName = "floatRightOut";
            break;
    }
    
    img.style.left = x + "%";
    img.style.top = y + "%";
    img.style.animation = `${animName} 3s ease-out forwards`;
    
    document.body.appendChild(img);
    imageCount++;

    
    imageCount++;  // Next click = next image
    
    // Optional: Shake window
    document.querySelector(".confirmation-window").style.animation = "shake 0.5s";
    setTimeout(() => {
        document.querySelector(".confirmation-window").style.animation = "";
    }, 500);

    
const sureBtn = document.getElementById("sure-btn");

sureBtn.addEventListener("click", () => {
    // Clear ALL floating images instantly
    const floatingImages = document.querySelectorAll("img[style*='z-index: 1000'], img[style*='pointer-events: none']");
    floatingImages.forEach(img => img.remove());
    
    // Hide confirmation and show final screen
    confirmScreen.style.display = "none";
    document.getElementById("final-container").style.display = "flex";
    
    setTimeout(() => {
        document.querySelector(".final-window").classList.add("open");
    }, 50);
});

});
