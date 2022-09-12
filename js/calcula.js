var digitos = document.querySelectorAll(".digit");
var visor = document.querySelector(".visor");


function tolimit(){


    visor.textContent = visor.textContent.substring(0,10);

}

function insere(num){

    
    visor.textContent += num;
    visor.textContent = visor.textContent.substring(0,15);

}

function limpa(){
    visor.textContent = ("");

}

function calcular(){
    visor.textContent = eval(visor.textContent);
}
function backspace(){
}


console.log(visor)