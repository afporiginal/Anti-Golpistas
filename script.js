// Mostrar alerta de ataque após 40 segundos
setTimeout(function() {
    document.getElementById('attack-warning').style.display = 'block';
}, 40000); // 40 segundos

// Quando o botão de VPN for clicado
document.getElementById('vpn-button').addEventListener('click', function () {
    alert('Você está protegido com nossa VPN contra todos os ataques!');
});
