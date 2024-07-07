function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)

    if (elemento != null && elemento.localName == 'audio') {        //Validacao: garante que somente elementos de áudio sejam reproduzidos quando o usuário interagir com eles. Se o elemento for null ou não for um elemento de áudio, a reprodução não ocorre
        elemento.play();
    }
    else {
        alert('Elemento não encontrado ou seletor inválido')
    }
}

//document.querySelector('.tecla_pom').onclick = tocaSomPom; // se dentro de um arquivo .js queremos guardar uma função em um atributo onclick, precisamos retirar esses parênteses, porque só assim se ele vai guardar dentro do onclick a referência, esse nome da função e não vai necessariamente executá-la no mesmo momento em que ela é guardada. Isso tem relação com a ordem de execução do código JavaScript.
const listaDeTeclas = document.querySelectorAll('.tecla'); // O querySelectorAll é uma funcionalidade do JavaScript que busca todos os elementos



//enquanto
for (let i = 0; i < listaDeTeclas.length; i++) {
    
    const tecla = listaDeTeclas[i]//para tornar o codigo mais legivel
    const instrumento = tecla.classList[1] //class list para acessar todos os botoes/teclas do index

    //template string
    const idAudio = `#som_${instrumento}` //faz tocar todos os sons

    console.log(instrumento)
    tecla.onclick = function () { //funcoes anonimas
        tocaSom(idAudio)
    }   //Foi necessário usar o while como estrutura de repetição para auxiliar o acesso a cada elemento dentro da lista de teclas, podendo aplicar a rotina de associar uma função no atributo onclick de cada um destes elementos.
    
    
  tecla.onkeydown = function (e) { 

    console.log(e.code == 'Enter')

    if(e.code === 'Space' || e.code === 'Enter' ) { 
    tecla.classList.add('ativa');
    }
    
  }

  tecla.onkeyup = function () {
    tecla.classList.remove('ativa');

  }
}

