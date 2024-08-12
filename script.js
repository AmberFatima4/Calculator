const display = document.getElementById('display');
const buttons = document.getElementsByClassName('btn');

function handleButtonClick(event) {
    const buttonText = event.target.textContent;

    if (buttonText === 'C') {
        // Clear the display
        display.value = '';
    } else if (buttonText === '=') {
        // Calculate the result
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Error'; // Show error if calculation fails
        }
    } else {
        // Append the clicked button's text to the display
        display.value += buttonText;
    }
}

// Attach the click event to all buttons
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', handleButtonClick);
}