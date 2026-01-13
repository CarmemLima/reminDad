 

    const data = document.querySelector('#data') //retorno innerHTML na div data
    const relogio = document.querySelector('#relogio')
    const retorno = document.querySelector('#retorno') //retorno innerHTML na div retorno
    const atual = new Date(); //define a data atual. Os get's sao utilizados de acordo com as info do metodo newDate()
    const imagemRetorno = '<img src="imagens/foto-almoço.jpg" alt="imag">'; //para exibir a imagem na div retorno
    const meuClique = document.querySelectorAll('.Botao');
    const botaoSim = document.querySelector('#bsim');
    const botaoNao = document.querySelector('#bnao');
    const botaoAvançar = document.querySelector('#bavançar');
    const somAlarme = '<audio src="sons/digital-alarm-clock-buzzer-458027.mp3" controls/>';
  
    
    
    function dataCompleta(){ 
    // Formata a data completa
    const dataHora = atual.toLocaleString('pt-BR', {
     timeZone: 'America/Fortaleza',   
     weekday: 'long',
     day: '2-digit',
     month:'long',
     year: 'numeric',  
    });
    
     //Formata a hora
    const hora = atual.toLocaleString('pt-BR', {timeZone: 'America/Fortaleza',
     hour: '2-digit',
     minute: '2-digit',
     second: '2-digit',
     hour12: false});
    
  

   data.innerHTML = dataHora; 
   relogio.innerHTML = hora;

    // Mostra mensagem (alarme) dependendo da hora
    } 
function alarme(){//função que é executada no horário definido para alarme
  const hora = atual.getHours(); 
  const minuto = atual.getMinutes(); 
  if(hora === 7 && minuto === 15){ 
    retorno.innerHTML = 'É hora do lanche da manhã! Você já lanchou?' 
  }
}

//  function meuBotao(){ função manipuladora do evento de clique (teste), ativa quando seleciona o botao Sim. o objetivo é fazer que a cada pergunta exibida apos o alarme seja acionado como uma resposta. 
 
//     retorno.innerHTML = "clicado" //apenas para teste


// }
  // add.EventListener é o método escutador do evento de clique. O Primeiro parametro é o tipo do evento (ex: 'click'. obs: nao se usa o prefixo 'on' para o evento. usa-se apenas 'click'); O Segundo parametro é a função que queremos chamar quando o evento ocorrer.
  
 meuClique.forEach(Botao => {  //callback function

  Botao.addEventListener('click', e => {  //forEachfunciona no DOM utilizando o querySelectorAll (que seleciona todos os elementos com a mesma classe, nesse caso a classe 'Botao'). Usa-se o memso nome da classe como nome da função dentro de parenteses no metodo forEach. Essa função é chamada de callback function. Dentro da callback function definimos o que que queremos fazer com cada elemento selecionado, ou seja, com cada botão. Nesse caso o objetivo é adiconar um evento de clique a cada botao.
    const action = e.target.dataset.action; //explicação do e.target.dataset.action: o 'e' é o evento que ocorreu (no caso, o clique). O 'target' é o elemento que disparou o evento (no caso, o botão clicado). O 'dataset' é uma propriedade que permite acessar os atributos de dados personalizados (data-*) do elemento. O 'action' é o nome do atributo de dados personalizado que queremos acessar (data-action).
    if(action === 'sim'){
    retorno.innerHTML = 'Nao deveria. ' + 'Aguarde até a próxima refeição!' ;
  } else if (action === 'nao') {
    retorno.innerHTML = 'ok, pode comer';
  } else if (action === 'avançar') {
    retorno.innerHTML = 'ok, até mais';
  }
  })
 })

 setInterval(meuClique, 6000); //continuar aqui. definir tempo para desaparecer a mensagem apos o clique no botao. usar o setTimeout ou setInterval?
 
 //addEventListener("click", meuBotao);
 


  
 
  //setInterval(alarme) //define o tempo maximo que uma mensagem é exibida em segundos
    
    dataCompleta(); // executa a função
    alarme();
    


  
