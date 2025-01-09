function showDay() {
    let day = document.getElementById('dayInput').value;
    let outputText = '';

    // Switch statement to check the input value
    switch (parseInt(day)) {
        case 1:
            outputText = "It's Monday";
            break;
        case 2:
            outputText = "It's Tuesday";
            break;
        case 3:
            outputText = "It's Wednesday";
            break;
        case 4:
            outputText = "It's Thursday";
            break;
        case 5:
            outputText = "It's Friday";
            break;
        case 6:
            outputText = "It's Saturday";
            break;
        case 7:
            outputText = "It's Sunday";
            break;
        default:
            outputText = `${day} is not a valid day (1-7). Please try again.`;
    }

    document.getElementById('output').innerText = outputText;
}