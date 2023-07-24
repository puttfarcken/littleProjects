 function tocaSom (idElementoAudio) {
    const element = document.querySelector(idElementoAudio).play();

    if (element != null && element.localName === 'audio'){
        element.play();
    }
    else {
        console.log("Elemento não encontrado");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla') 

for (let i = 0; i < listaDeTeclas.length; i++) {
    const tecla = listaDeTeclas[i];
    const instrumento = tecla.classList[1]; 
    const idAudio =`#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idAudio);
    };

    tecla.onkeydown = function (event) {
        if (event.code === 'Space' || event.code === 'Enter')
        tecla.classList.add('ativa')
    }

    tecla.onkeyup = function () {
        tecla.classList.remove('ativa');
    }
    
}


