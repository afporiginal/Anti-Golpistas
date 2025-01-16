// Função para ativar proteção
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

// Salvar preferências do usuário (Tema Escuro/Claro)
document.getElementById('theme-select').addEventListener('change', function(e) {
    const selectedTheme = e.target.value;
    setTheme(selectedTheme);
});

// Função para definir tema (Escuro ou Claro)
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.style.backgroundColor = '#0f172a';
        document.body.style.color = '#fff';
        localStorage.setItem('theme', 'dark'); // Salvando na localStorage para persistência
    } else {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#333';
        localStorage.setItem('theme', 'light'); // Salvando na localStorage para persistência
    }
}

// Carregar o tema preferido ao carregar a página
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme); // Aplica o tema salvo
        document.getElementById('theme-select').value = savedTheme; // Atualiza o seletor de tema
    }
});

// Exibir histórico de ataques com animação
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
        attackItem.classList.add('attack-item');
        attackItem.innerHTML = `<strong>${attack.date}</strong>: ${attack.description}`;
        historyList.appendChild(attackItem);

        // Adicionando animação de fade-in para cada item
        setTimeout(() => {
            attackItem.classList.add('fade-in');
        }, 100);
    });
}

// Função para controlar o menu de navegação
document.querySelectorAll('.menu-bar a').forEach(menuItem => {
    menuItem.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(menuItem.getAttribute('href'));
        scrollToSection(targetSection);
    });
});

// Função para rolar até a seção ao clicar no menu
function scrollToSection(section) {
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Função para inicializar a personalização
document.getElementById('theme-select').addEventListener('change', function () {
    const theme = this.value;
    setTheme(theme);  // Chama a função de definição de tema
});

// Fechar alertas ou informações ao clicar
document.querySelectorAll('.close-alert').forEach(closeButton => {
    closeButton.addEventListener('click', function() {
        const alertBox = this.closest('.alert-box');
        alertBox.classList.add('hidden');
    });
});

// Adicionando histórico dinâmico de ataques (Exemplo de dados)
function addDynamicAttackHistory() {
    const attackHistoryButton = document.getElementById('view-attack-history');
    attackHistoryButton.addEventListener('click', function() {
        const historyContainer = document.getElementById('history-container');
        historyContainer.classList.toggle('hidden');
        displayAttackHistory(); // Chama a função para preencher o histórico
    });
}

// Inicializando a exibição do histórico de ataques
addDynamicAttackHistory();

// Função para mostrar o estado da proteção
function showProtectionStatus() {
    const statusElement = document.getElementById('protection-status');
    const isProtectionActive = localStorage.getItem('protectionStatus') === 'active';

    if (isProtectionActive) {
        statusElement.textContent = 'Proteção Ativada';
        statusElement.classList.add('active');
    } else {
        statusElement.textContent = 'Proteção Desativada';
        statusElement.classList.remove('active');
    }
}

// Exibir estado da proteção ao carregar a página
window.addEventListener('load', function() {
    showProtectionStatus();
});

// Atualizar o estado da proteção após ativação/desativação
document.getElementById('activate-vpn').addEventListener('click', function() {
    const protectionStatus = localStorage.getItem('protectionStatus') === 'active' ? 'inactive' : 'active';
    localStorage.setItem('protectionStatus', protectionStatus);
    showProtectionStatus();
});

// Função de simulação de notificação (Alertas visuais)
function showNotification(message, type = 'info') {
    const notificationContainer = document.getElementById('notification-container');
    const notification = document.createElement('div');
    notification.classList.add('notification', type);
    notification.textContent = message;
    notificationContainer.appendChild(notification);

    setTimeout(() => {
        notification.classList.add('fade-out');
        setTimeout(() => {
            notificationContainer.removeChild(notification);
        }, 500);
    }, 3000);
}

// Exemplo de uso de notificação
showNotification('Você está protegido!', 'success');

// Função para salvar configurações avançadas
function saveAdvancedSettings() {
    const vpnStatus = document.getElementById('activate-vpn').disabled ? 'active' : 'inactive';
    const advancedSettings = {
        vpnStatus: vpnStatus,
        theme: localStorage.getItem('theme')
    };

    localStorage.setItem('advancedSettings', JSON.stringify(advancedSettings));
}

// Salvar configurações ao sair
window.addEventListener('beforeunload', saveAdvancedSettings);
