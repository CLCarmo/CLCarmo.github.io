document.getElementById('Button-Input').addEventListener('click', function(event) {
    
    event.preventDefault();
    const name = document.getElementById('Name-Input').value;    
    const greeting = `Hello, ${name} !`;
    let greetingElement = document.getElementById('greeting');
    
    if (!greetingElement) {
        greetingElement = document.createElement('p');
        greetingElement.id = 'greeting';
        document.querySelector('.writtenContent-Main').appendChild(greetingElement);
    }
    
    
    greetingElement.textContent = greeting;
});
