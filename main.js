/* 08/12/2024 – Primeiro script de javascript!!! ainda frontend, mas ok */

var modal = document.getElementById("modalID");

var images = document.querySelectorAll(".imgPost");
var modalImg = document.getElementById("modal-contentID")
var captionText = document.getElementById("caption");

/* Quando a imagem for clicada... */
images.forEach(function(img){
    img.onclick = function() {
        /* Muda o display do modal, atualmente "none" */
        modal.style.display = "flex";
        modal.style.flexDirection = "column";
        modal.style.justifyContent = "center";
        modal.style.alignItems = "center";

        /* Pega o endereço da mesma imagem clicada */
        modalImg.src = this.src;

        /* Pega o altText da imagem */
        captionText.innerHTML = this.alt;
    };
});

var span = document.getElementsByClassName("close")[0];

/* Quando apertar o x para fechar o modal... */
span.onclick = function() {
    /* Muda o display do modal, atualmente "block" */
    modal.style.display = "none";
}

/* ************************* */
/* para fazer o negócio da altura máxima das imagens dos posts ter o mesmo valor da largura máxima */

// Seleciona a imagem
const imgElement = document.querySelector('.imgPost');

// Função para ajustar o max-height com base no max-width computado
function ajustarAlturaImagem() {
    const computedStyle = getComputedStyle(imgElement);
    const width = computedStyle.width; // Obtém o max-width computado
    imgElement.style.maxHeight = width; // Aplica o mesmo valor no max-height
}
ajustarAlturaImagem();


