const userInput = prompt('Enter message:');

if (userInput) {
    for (let i = userInput.length - 1; i >= 0; i--) {
        console.log(userInput[i]);
    }
}