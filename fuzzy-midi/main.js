function tocaSom (idElemento) {
    
    document.querySelector(idElemento).play();
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; // se dentro de um arquivo .js queremos guardar uma função em um atributo onclick, precisamos retirar esses parênteses, porque só assim se ele vai guardar dentro do onclick a referência, esse nome da função e não vai necessariamente executá-la no mesmo momento em que ela é guardada. Isso tem relação com a ordem de execução do código JavaScript.
const listaDeTeclas = document.querySelectorAll('.tecla'); // O querySelectorAll é uma funcionalidade do JavaScript que busca todos os elementos


let i = 0;
//enquanto
while (i < listaDeTeclas.length) {

    listaDeTeclas[i].onclick = function () { //funcoes anonimas
        tocaSom('#som_tecla_pom')
    }   //Foi necessário usar o while como estrutura de repetição para auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos.
    
    i++
    console.log(i)

}

