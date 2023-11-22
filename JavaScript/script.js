window.onload = function() {
    document.getElementById('nome').innerText = localStorage.getItem('nome');
    document.getElementById('nomeMae').innerText = localStorage.getItem('nomeMae');
    document.getElementById('nomePai').innerText = localStorage.getItem('nomePai');
    document.getElementById('endereco').innerText = localStorage.getItem('endereco');
    document.getElementById('numero').innerText = localStorage.getItem('numero');
    document.getElementById('bairro').innerText = localStorage.getItem('bairro');
    document.getElementById('cep').innerText = localStorage.getItem('cep');
    document.getElementById('cidade').innerText = localStorage.getItem('cidade');
    document.getElementById('estado').innerText = localStorage.getItem('estado');
}

