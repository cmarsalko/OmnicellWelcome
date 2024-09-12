function updateWelcomeMessage() {
    const nameInput = document.getElementById('name-input').value;
    const welcomeMessage = document.getElementById('welcome-message');
    const inputContainer = document.querySelector('.input-container');
    
    if (nameInput.trim() !== "") {
        welcomeMessage.textContent = `Welcome, ${nameInput}!`;
        inputContainer.classList.add('hidden');
    } else {
        welcomeMessage.textContent = 'Welcome';
    }
}
