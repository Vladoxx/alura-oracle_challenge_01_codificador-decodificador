const textarea = document.querySelector('textarea');

// Criptografando
function criptografar() {

    const texto = textarea.value;
    const separador = texto.split('');
    const recebeTexto = [];

    for (let i = 0; i < separador.length; i++) {
        let mostra = separador[i]

        if (mostra === "e") {
            mostra = "enter";
        } else if (mostra === "i") {
            mostra = "imes";
        } else if (mostra === "a") {
            mostra = "ai";
        } else if (mostra === "o") {
            mostra = "ober";
        } else if (mostra === "u") {
            mostra = "ufat";
        } 

        recebeTexto.push(mostra)

    }

    const conteudo = document.querySelector('.text_conteudo');
    conteudo.style.display = "block";
    const apareceNaTela = document.querySelector('#apareceNaTela').innerHTML = recebeTexto.join('');
    // apareceNaTela.style.visibility = "visible"
    document.querySelector('.mensaje').innerHTML = '';
    // const frame = document.querySelector('.frame');
    // frame.style.display = "none";
    const apareceButton = document.querySelector('.copiar');
    apareceButton.style.visibility = "visible";

    textarea.focus();

    return apareceNaTela;

}

const button1 = document.getElementById('criptografia');
button1.onclick = criptografar;
textarea.focus();

// Desencriptando
function descriptografar() {

    let texto = textarea.value;
    texto = texto.split('ai').join('a');
    texto = texto.split('enter').join('e');
    texto = texto.split('imes').join('i');
    texto = texto.split('ober').join('o');
    texto = texto.split('ufat').join('u');

    document.querySelector('#apareceNaTela').innerHTML = texto;
    document.querySelector('.mensaje').innerHTML = '';
    const apareceButton = document.querySelector('.copiar');
    apareceButton.style.visibility = "visible";
    textarea.value = "";
    textarea.focus();

    return texto;

}

const button2 = document.getElementById('descriptografia');
button2.onclick = descriptografar;

// Copiar

function copiarTexto() {

    const copiar = document.querySelector('.recebe_text');
    copiar.select();
    copiar.setSelectionRange(0, 400);
    document.execCommand('copy');
    textarea.value = "";

}

















