document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'vitor.admin' && password === 'vitinho') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'produtoseditaveis.html';
    } 
    if (username === 'caio.admin' && password === 'caio') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'produtoseditaveis.html';
    }
    if (username === 'caio.usuario' && password === 'caio') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'produtos.html';
    }else if (username === 'vitor.usuario' && password === 'vitinho') {
        localStorage.setItem('authenticated', 'true');
        window.location.href = 'produtos.html';
    } else {
        document.getElementById('message').textContent = 'Usuário ou senha incorretos.';
        document.getElementById('message').style.color = 'red';
    }
});