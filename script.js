// script.js

let yesButtonScale = 1; // Initial scale for the Yes button

function respondToInvitation(response) {
    var invitationText = document.getElementById('invitation-text');
    var yesButton = document.getElementById('yes-button');
    var noButton = document.getElementById('no-button');

    if (response) {
        invitationText.textContent = "Awesome! Appreciate it, and can't wait to see you.";
        yesButton.style.display = 'none';
        noButton.style.display = 'none';
    } else {
        yesButtonScale += 0.2; // Increase the scale by 0.2 on each No button click
        yesButton.style.transform = 'scale(' + yesButtonScale + ')';
    }
}

// script.js

let noButtonTexts = [
    "Are you sure?",
    "Double-check your decision.",
    "Think about it one more time.",
    "Confirm your choice carefully.",
    "Are you absolutely certain?",
    "Consider the impact on us.",
    "Reevaluate before proceeding.",
    "Are you sure? I will hurt me.",
    "Think of the potential consequences.",
    "Reflect on the emotional toll.",
    "Confirm your decision's weight.",
    "Are you sure? I will cry.",
    "Consider the lasting effects.",
    "Reassess the potential harm.",
    "Think twice about your choice.",
    "Are you sure? Getting sad here.",
    "Ponder the emotional aftermath.",
    "Review the possible regrets.",
    "Confirm with awareness.",
    "Are you sure? Think it through.",     "Are you sure?",
    "Double-check your decision.",
    "Think about it one more time.",
    "Confirm your choice carefully.",
    "Are you absolutely certain?",
    "Consider the impact on us.",
    "Reevaluate before proceeding.",
    "Are you sure? I will hurt me.",
    "Think of the potential consequences.",
    "Reflect on the emotional toll.",
    "Confirm your decision's weight.",
    "Are you sure? I will cry.",
    "Consider the lasting effects.",
    "Reassess the potential harm.",
    "Think twice about your choice.",
    "Are you sure? Getting sad here.",
    "Ponder the emotional aftermath.",
    "Review the possible regrets.",
    "Confirm with awareness.",
    "Are you sure? Think it through." ,     "Are you sure?",
    "Double-check your decision.",
    "Think about it one more time.",
    "Confirm your choice carefully.",
    "Are you absolutely certain?",
    "Consider the impact on us.",
    "Reevaluate before proceeding.",
    "Are you sure? I will hurt me.",
    "Think of the potential consequences.",
    "Reflect on the emotional toll.",
    "Confirm your decision's weight.",
    "Are you sure? I will cry.",
    "Consider the lasting effects.",
    "Reassess the potential harm.",
    "Think twice about your choice.",
    "Are you sure? Getting sad here.",
    "Ponder the emotional aftermath.",
    "Review the possible regrets.",
    "Confirm with awareness.",
    "Are you sure? Think it through."
];

let noButtonClickCount = 0;

function respondToNo() {
    var noButton = document.getElementById('no-button');
    var yesButton = document.getElementById('yes-button');

    noButton.textContent = noButtonTexts[noButtonClickCount];

    // Increment the index for the next text
    noButtonClickCount = (noButtonClickCount + 1) % noButtonTexts.length;

    // Check if the Yes button has been clicked, reset click count if true
    if (yesButton.getAttribute('data-clicked') === 'true') {
        resetClickCount();
        return; // Skip the following part if Yes button is clicked
    }

    // Increase the size of the Yes button
    yesButton.style.transform = `scale(${1 + 0.2 * noButtonClickCount})`;

    // Reset click count and text when the array is exhausted
    if (noButtonClickCount === 0) {
        resetClickCount();
    }
}

function respondToYes() {
    // Set a custom attribute to mark that the Yes button has been clicked
    document.getElementById('yes-button').setAttribute('data-clicked', 'true');

    // Reset click count for the No button
    resetClickCount();
}

function resetClickCount() {
    noButtonClickCount = 0;
}
