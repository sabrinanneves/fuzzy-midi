function tocaSomPom () {
    
    document.querySelector('#som_tecla_pom').play();
}


document.querySelector('.tecla_pom').onclick = tocaSomPom; // se dentro de um arquivo .js queremos guardar uma função em um atributo onclick, precisamos retirar esses parênteses, porque só assim se ele vai guardar dentro do onclick a referência, esse nome da função e não vai necessariamente executá-la no mesmo momento em que ela é guardada. Isso tem relação com a ordem de execução do código JavaScript.

