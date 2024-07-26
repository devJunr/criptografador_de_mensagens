var textoCriptografado;

function criptografarTexto(){
    document.getElementById('saida_texto_imagem').style.display = 'none';
    document.getElementById('saida_texto_frase').style.display = 'none';
    document.getElementById('saida_texto_mensagem-aviso').style.display = 'none';
    document.getElementById('saida_texto_mensagem').style.display = 'inline';
    document.getElementById('copiarCriptografia').style.display = 'inline';
    let textoCriptografar = document.getElementById('entradaTexto').value;
    console.log(textoCriptografar);
    let saida = document.getElementById('saida_texto_mensagem'); 
    var textoCriptografado = textoCriptografar
    .replace(/e/g, "enter")
    .replace(/i/g,"imes")
    .replace(/a/g,"ai")
    .replace(/o/g,"ober")
    .replace(/u/g,"ufat")  
    saida.innerHTML = textoCriptografado;
    let botaoPrint = document.getElementById('copiarCriptografia');
    botaoPrint.innerHTML = 'Copiar';
}

function descriptografarTexto(){
    document.getElementById('saida_texto_imagem').style.display = 'none';
    document.getElementById('saida_texto_frase').style.display = 'none';
    document.getElementById('saida_texto_mensagem-aviso').style.display = 'none';
    document.getElementById('saida_texto_mensagem').style.display = 'inline';
    document.getElementById('copiarCriptografia').style.display = 'inline';
    let textoDescriptografar = document.getElementById('entradaTexto').value;
    console.log(textoDescriptografar);
    let saida = document.getElementById('saida_texto_mensagem');
    var textoDesriptografado = textoDescriptografar
    .replace(/enter/g, "e")
    .replace(/imes/g,"i")
    .replace(/ai/g,"a")
    .replace(/ober/g,"o")
    .replace(/ufat/g,"u")
    saida.innerHTML = textoDesriptografado;
    let botaoPrint = document.getElementById('copiarCriptografia');
    botaoPrint.innerHTML = 'Copiar';
}    

function recarregarPagina(){
    location.reload();
}

function avisoRegras(){
    let textoDigitado = document.getElementById('entradaTexto').value;
    let acentuado = /[A-ZÀ-ÿ-ỹ]/;
    if(acentuado.test(textoDigitado)){
        document.getElementById('aviso__regras__escrita').style.color = '#ff0000'; 
    }else{
        document.getElementById('aviso__regras__escrita').style.color = '#343A40';
    }
}

function copiarTexto(){
    let textoCopiar = document.getElementById('saida_texto_mensagem').value;
    navigator.clipboard.writeText(textoCopiar);
    let exibirCopiado = document.getElementById('copiarCriptografia');
    let botaoPrint = document.getElementById('copiarCriptografia');
    botaoPrint.innerHTML = 'Copiado com sucesso !';
}