 

    const data = document.querySelector('#data') //retorno innerHTML na div data
    const relogio = document.querySelector('#relogio') //retorno innerHTML na div relogio
    const retorno = document.querySelector('#retorno') //retorno innerHTML na div retorno
    const botaoSim = document.querySelector('#bsim');
    const botaoNao = document.querySelector('#bnao');
    const botaoAvançar = document.querySelector('#bavançar');
    const atual = new Date(); //define a data atual. Os get's sao utilizados de acordo com as info do metodo newDate()
    const imgRetornoAlarme = '<img src="imagens/img-retorno-alarme.jpg" alt="imag">'; //para exibir a imagem na div retorno após o alarme
   // const imgTelaInicial = '<img src="imagens/img-tela-inicial.png" alt="imag">'; //imagem da tela inicial (gato)
    const somAlarme = '<audio src="sons/digital-alarm-clock-buzzer-458027.mp3" controls/>';
    const meuClique = document.querySelector('#Botoes'); //div que contem os botoes de clique
   
    
    
    function dataCompleta(){
    const dataHora = atual.toLocaleString('pt-BR', {// Formata a data completa
     timeZone: 'America/Fortaleza',   
     weekday: 'long',
     day: '2-digit',
     month:'long',
     year: 'numeric',  
    });

    const hora = atual.toLocaleString('pt-BR', {//Formata a hora
     timeZone: 'America/Fortaleza',
     hour: '2-digit',
     minute: '2-digit',
     second: '2-digit',
     hour12: false});
    
    data.innerHTML = dataHora; 
    relogio.innerHTML = hora;
    }

    
    function clicar(){//função de clique é executada apenas quando o alarme for disparado.

    const clicado = event.target; 
   
    if(botaoSim == clicado){     
        retorno.innerHTML = 'Nao deveria. ' + 'Aguarde até a próxima refeição!';
      } else if(botaoNao == clicado){
        retorno.innerHTML = 'ok, pode comer';
      }/*  else if(botaoAvançar == clicado){
        retorno.innerHTML = 'até mais';        
      }  */else {
        retorno.innerHTML = imgTelaInicial;
      };
    setTimeout(() => {
      retorno.innerHTML = imgTelaInicial;
    }, 6000); //tempo de 6 segundos para voltar a tela inicial
  }

   
  function alarme(){//função que é executada no horário definido para alarme
    const hora = atual.getHours(); 
    const minuto = atual.getMinutes();
    
     if(hora === 19 && minuto === 53){
      meuClique.addEventListener('click', clicar); //adiciona o evento de clique aos botões apenas quando o alarme for disparado. o evento escutador deve estar fora da função que irá executar a ação (função clicar).
      retorno.innerHTML = imgRetornoAlarme + 'Hora da refeição. Você já comeu?'; 
    }  else{
      retorno.innerHTML = imgTelaInicial;
    } 
  }

    dataCompleta(); // executa a função
    alarme(); // executa a função
   

//EXPLICAÇÕES:
  //event.target: aponta para o elemento que foi manipulado (nesse caso os botoes). o event é um objeto (criado automaticamente pelo navegador) que contem varias informações sobre o evento, ele retorna o evento que está sendo manipulado atualmente (os eventos podem ser clique, tecla pressionada, posição do mouse, input etc). obs: o event fora de um contexto de evento manipulado é sempre um valor indefinido.) o target é uma propriedade do event (somente leitura) que representa o elemento do HTML que disparou o evento (nesse caso os botões).

  //add.EventListener: é o método escutador do evento de clique. O Primeiro parametro é o tipo do evento (ex: 'click'. obs: nao se usa o prefixo 'on' para o evento. usa-se apenas 'click'); O Segundo parametro é a função que queremos chamar quando o evento ocorrer.

  //setTimeout: para que o setTimeout seja habilitado, é necessário que esteja dentro do evento de clique (addEventListener); a função do addEventListener apenas executa a ação do clique. se o setTimeout for usado fora do addEventListener, o setTimeout nao funcionará.


  
