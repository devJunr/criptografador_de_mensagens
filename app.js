let campoTexto = document.getElementById('entradaTexto').value;

function criptografarTexto(){
        document.getElementById('saida_texto_imagem').style.display = 'none';
        document.getElementById('saida_texto_frase').style.display = 'none';
        document.getElementById('saida_texto_mensagem-aviso').style.display = 'none';
        document.getElementById('saida_texto_mensagem').style.display = 'inline';
        document.getElementById('copiarCriptografia').style.display = 'inline';
        let textoCriptografar = document.getElementById('entradaTexto').value; // Captura o texto para cript
        console.log(textoCriptografar);
        document.getElementById('saida_texto_mensagem').style.color = '#495057';
        let texto = document.getElementById('saida_texto_mensagem');
        texto.innerHTML = textoCriptografar;
}

function descriptografarTexto(){
    alert("Botão para descriptografar texto");
}    

function recarregarPagina(){
    location.reload();
}

/*
Acrescentar criptografia da mensagem, criar a função do botão copiar, e acrescentar a estilização do textarea do campo de criptografia
*/