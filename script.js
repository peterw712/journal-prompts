let prompts = [
    'Describe your perfect day.',
    'What are your top three priorities right now?',
    'What are you grateful for?',
    'Write about a recent challenge and how you overcame it.',
    // Add as many prompts as you like
];
let drawPromptButton = document.querySelector('#draw-prompt-button');
let promptDisplay = document.querySelector('#prompt-display');

drawPromptButton.addEventListener('click', function() {
    if(prompts.length > 0) {
        let randomIndex = Math.floor(Math.random() * prompts.length);
        let randomPrompt = prompts[randomIndex];
        promptDisplay.textContent = randomPrompt;
    } else {
        promptDisplay.textContent = 'No prompts available.';
    }
});
