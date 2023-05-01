const vermelha = document.getElementById("vermelha")

const amarela = document.getElementById("amarela")

const verde = document.getElementById("verde")


const luz = document.getElementById("luz");


vermelha.addEventListener("click", luzVermelha);
amarela.addEventListener("click", luzAmarela);
verde.addEventListener("click", luzVerde);


function luzVermelha(vermelha){
    luz.src ="imagens/luzVermelha.jpg"
};

function luzAmarela(amarela){
    luz.src ="imagens/luzAmarela.jpg"
}

function luzVerde(verde){
    luz.src ="imagens/luzVerde.jpg"
}



