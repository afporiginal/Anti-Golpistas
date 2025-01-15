document.getElementById('vpn-button').addEventListener('click', function () {
    alert('VPN ativada! Você agora está protegido contra loiras, franjudas e cacheadas que alisam o cabelo!');
});

// Função para exibir alerta de ataque após 40 segundos
setTimeout(function () {
    document.getElementById('attack-warning').style.display = 'block';
    setTimeout(function () {
        alert('Alerta! Sua ex-namorada está tentando te atacar novamente!');
    }, 2000);
}, 40000); // 40 segundos
