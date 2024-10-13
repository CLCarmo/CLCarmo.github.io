// Código para ativar button Hello Name
document.getElementById('Button-Input').addEventListener('click', function(event) {
    
    event.preventDefault();
    
    // Captura o valor do campo de entrada e remove espaços em branco
    const name = document.getElementById('Name-Input').value.trim();
    
    // Verifica se o campo está vazio
    if (name === '') {
        alert('Por favor, insira um nome válido.');
        return; // Sai da função se o campo estiver vazio
    }
    
    // Saudação personalizada
    const greeting = `Hello, ${name} !`;
    let greetingElement = document.getElementById('greeting');
    
    // Se o elemento de saudação ainda não existir, cria um novo
    if (!greetingElement) {
        greetingElement = document.createElement('p');
        greetingElement.id = 'greeting';
        document.querySelector('.writtenContent-Main').appendChild(greetingElement);
    }
    
    // Atualiza o texto de saudação
    greetingElement.textContent = greeting;
});

// Código para rolagem suave
document.querySelectorAll('.Bar-Menu a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Captura o ID do destino de rolagem com base no href
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        // Rola suavemente até a seção alvo
        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
