// Ativar a proteção VPN e mostrar uma mensagem
document.getElementById('activate-vpn').addEventListener('click', function() {
    alert('Você está protegido com nossa VPN super segura contra todos os ataques!');
});

// Função que mostra o alerta após 30 segundos de navegação
setTimeout(function() {
    document.getElementById('alert-section').style.display = 'block';
}, 30000); // 30 segundos

// Botão de ignorar alerta
document.getElementById('dismiss-alert').addEventListener('click', function() {
    document.getElementById('alert-section').style.display = 'none';
});

// Função para exibir um alerta adicional após 60 segundos, simulando um ataque mais sério
setTimeout(function() {
    alert('Atenção! Sua ex-namorada está tentando hackear seu sistema. Proteção adicional está em ação!');
}, 60000); // 60 segundos
