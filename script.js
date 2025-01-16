// Função para abrir e fechar o menu lateral
document.getElementById('menu-button').addEventListener('click', function() {
    const sideMenu = document.getElementById('side-menu');
    sideMenu.classList.toggle('open');
    const content = document.getElementById('home');
    content.classList.toggle('shifted');
});

// Função para exibir seções de acordo com a seleção do menu
document.querySelectorAll('.side-menu a').forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSectionId = menuItem.getAttribute('href').substring(1);
        showSection(targetSectionId);
    });
});

// Função para mostrar uma seção específica
function showSection(sectionId) {
    // Esconde todas as seções
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Exibe a seção desejada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.style.display = 'block';
    }
}

// Função de ativação de proteção
document.getElementById('activate-protection').addEventListener('click', function() {
    activateProtection();
});

// Função para ativar VPN ou Proteção (Simulação)
function activateProtection() {
    const protectionButton = document.getElementById('activate-protection');
    protectionButton.disabled = true;
    protectionButton.textContent = 'Proteção Ativada!';
    
    // Simulando um delay para ativar a proteção (Exemplo de simulação de operação)
    setTimeout(() => {
        alert('Proteção ativada com sucesso!');
        protectionButton.textContent = 'Desativar Proteção';
        protectionButton.disabled = false;
    }, 2000);
}

// Função para carregar o histórico de ataques
function displayAttackHistory() {
    const historyList = document.getElementById('history-list');
    const attacks = [
        { date: '23/01/2025', description: 'Tentativa de invasão detectada e neutralizada com sucesso.' },
        { date: '20/01/2025', description: 'Ataque de phishing bloqueado.' },
        { date: '15/01/2025', description: 'Malware neutralizado com sucesso.' }
    ];

    historyList.innerHTML = ''; // Limpa o histórico atual

    attacks.forEach((attack) => {
        const attackItem = document.createElement('li');
        attackItem.innerHTML = `<strong>${attack.date}</strong>: ${attack.description}`;
        historyList.appendChild(attackItem);
    });
}

// Exibindo o histórico ao acessar a página
document.getElementById('history-link').addEventListener('click', displayAttackHistory);

// Função para exibir a área de configurações
document.getElementById('settings-link').addEventListener('click', function() {
    showSection('settings');
});

// Função para exibir a área de proteção
document.getElementById('protection-link').addEventListener('click', function() {
    showSection('protection');
});

// Função para exibir a área de personalização
document.getElementById('customization-link').addEventListener('click', function() {
    showSection('customization');
});

// Função para voltar à tela inicial
document.getElementById('home-link').addEventListener('click', function() {
    showSection('home');
});

// Função de customização (Exemplo básico de ajuste de tema)
document.getElementById('theme-switch').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});
