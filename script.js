const messages = [
    "Esti sigura?",
    "Esti foarte sigura?",
    "Esti super foarte sigura?",
    "Tu chiar vrei sa ma faci sa plang??",
    "Pookie te rog...",
    "Esti sigura sigura ba??",
    "Haide ma te rog",
    "Hai ua nu fi chitra",
    "O sa fiu trist...",
    "O sa fiu super trist...",
    "Bine... Ma opresc din a intreba...😮‍💨",
    "S-o crezi tu ca ma opresc!!! 😹"
];

const gifs = [
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExd3lndG04ajNuc2R2aDZuYTg4d2lheGt5Ym10dnR0M2NseDM2aXFkcSZlcD12MV9pbnRlcm5naWZfYnlfaWQmY3Q9Zw/UA1n322Kgn23yY5PrL/giphy.gif",
    "https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExc2NkcTMxaWN0NnQ2eDY5cWNmNHI5bXg3a20zdDkzYmFyajdxdTBqMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7qEciAHeStgj1idG/giphy.gif",
    "https://media.giphy.com/media/fkKORiZTUQvhC/giphy.gif",
    "https://media.giphy.com/media/GyNeHf5IrpQNG/giphy.gif",
    "https://media.giphy.com/media/JJ8zrsOzsIrfbBiJQq/giphy.gif",
    "https://media.giphy.com/media/bPWyTsy2huZji/giphy.gif?cid=ecf05e47bdrft25bgpc9krdhnx5caibt6c0q8oyscg3sfim7&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/nURzWHsOTpDDa/giphy.gif?cid=790b7611gay57lnh6zhawctay9j5kcnziy1s32v4etsh7zc5&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMndubzc1MnM4ZDR3djd4MXF4YWRwbDl3NGdrYmFrbXdjd3Rwb3JlbCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/pyFsc5uv5WPXN9Ocki/giphy.gif",
    "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMHNuNjhzcXRuMGI2ZXNjMnF5dWZtc2NhaHAzdzB5dXV4NGN0dzJqYSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/3OhXBaoR1tVPW/giphy.gif",
    "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNXM2emx4a2J1MzV6Mmt3OXd5Zm1vM3V4YWk3ZjZkN2llYmVqaDFybSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Te8g0Fa6kh5Nm/giphy.gif",
    "https://media.giphy.com/media/12cYyFxlbIgXeg/giphy.gif?cid=790b7611horsatdj7p4ykqavnfkg0rssfrclva7v2zm17z64&ep=v1_gifs_search&rid=giphy.gif&ct=g",
    "https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif?cid=790b7611xxqkbz0sq2pyt2eb5939vcjmn9gqdndukbmf1qrh&ep=v1_gifs_search&rid=giphy.gif&ct=g",
];

let messageIndex = 0;
let gifIndex = 0; 

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    const gifImage = document.querySelector('.gif-container img'); // Select the image

    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;

    
    gifImage.src = gifs[gifIndex];
    gifIndex = (gifIndex + 1) % gifs.length;

    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}
