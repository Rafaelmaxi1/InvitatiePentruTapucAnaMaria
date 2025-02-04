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

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize= `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yesPage.html";
}
