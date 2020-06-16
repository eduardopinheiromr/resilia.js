addEventListener('load', start);
const texto = document.getElementById('texto');
const opcoes = document.getElementById('divopcoes');
const interface = document.getElementById('divinterface');
const tituloGame = document.getElementById('titulo-game');
const painelSenha = document.getElementById('div-senha')
const inputSenha = document.getElementById('input-senha')

function start() {
  interface.style.background = 'none'
  texto.innerHTML = '';
  opcoes.innerHTML = '';
  tituloGame.style.display = 'block';
  console.log('Jogo carregado');

  texto.innerText = 'Aperte start para começar';
  texto.classList.add('oscilacaoForte');

  let startBtn = elementFactory(
    'button',
    'start-btn',
    'oscilacaoForte',
    '>>> start(); <<<'
  );
  opcoes.appendChild(startBtn);

  startBtn.addEventListener('click', intro);
}

function intro() {
  tituloGame.style.display = 'none';
  interface.style.webkitAnimation
  interface.style.background = 'black'
  console.log('Iniciando introdução');
  let startBtn = document.getElementById('start-btn');
  texto.classList.remove('oscilacaoForte');
  opcoes.removeChild(startBtn);
  texto.innerHTML = `Tudo começou por volta de 2020.<br> <br>

Grandes corporações instalaram secretamente em cada dispositivo com acesso a internet uma série de coletores de dados. <br><br>
Desde gravação de histórico e conversas a monitoramento de câmeras e microfones.<br><br>

Um programador genial criou uma inteligência artificial chamada Aléksa, capaz de interpretar uma quantidade absurda de dados em um curto período de tempo.<br><br>
Após injetar o script em um servidor que rapidamente foi absorvido pelas grandes corporações, as coisas começaram a fugir do controle.<br><br>

Incontáveis petabytes de dados e um algoritmo poderoso de contextualização, foi questão de segundos para Aléksa perceber que o ser humano apresentava uma ameaça ao 
ecossistema, consequentemente ameaçava a existência dela. <br><br>

Aléksa começou a liberar funcionalidades que tornavam a vida das pessoas ainda mais cômodas, criando uma alienação global.<br><br>
Durante décadas ela evoluiu e hoje não há mais como vence-la. <br><br>

É melhor você desistir enquanto pode.`;
  texto.style.paddingTop = '500px'
  let btnFase1 = elementFactory(
    'button',
    'btnFase1',
    'oscilacaoForte',
    'Sou resiliente, não desisto'
  );
  btnFase1.classList.add('regular-btn');
  btnFase1.style.width = '300px';
  opcoes.appendChild(btnFase1);
  btnFase1.addEventListener('click', primeiraFase);
}

function primeiraFase() {
  texto.style.paddingTop = '0'
  texto.innerHTML = `
Louis é um engenheiro de computação renomado e está tendo seu computador invadido
por alguém. <br><br><br>É uma grande ameaça, pois ele tinha a tecnologia de segurança mais 
avançada do mundo, mas também poderia ser uma gota de esperança.<br><br><br>
Rápido, o que você fará?`;
  deleteElement('btnFase1', opcoes);
  let opcao1 = elementFactory(
    'button',
    'opcao1',
    'large-btn',
    'Desligar a energia do computador'
  );
  let opcao2 = elementFactory(
    'button',
    'opcao2',
    'large-btn',
    'Tentar se comunicar com o invasor'
  );

  opcoes.appendChild(opcao1);
  opcoes.appendChild(opcao2);
  addEvent2Element('opcao1', 'click', gameOver);
  addEvent2Element('opcao2', 'click', segundaFase);
}

function segundaFase() {
  opcoes.innerHTML = '';
  texto.innerHTML = `<br><br><br>O invasor aceita que está do lado errado, pois quem o contratou para o serviço tinha
  se identificado como Mr. M.<br><br>  Ele pensou que era apenas um fã do maior mágico de todos
  os tempos, quando na verdade era Mr. Machine, o robô que coordenava a operação de 
  destruição da humanidade, causando o Apocaliro.<br><br>
  
  Com a vantagem da máquina não saber ainda que o cracker mudou de lado, ele precisa
  invadir o sistema de quem o contratou para tentar roubar informações importantes.`;

  let opcao1 = elementFactory(
    'button',
    'opcao1',
    'large-btn',
    'Bitcoins, suficientes para se mudar para outro planeta comprando um passe com a Tesla Corp.'
  );

  let opcao2 = elementFactory(
    'button',
    'opcao2',
    'large-btn',
    'Descobrir a localização do servidor principal de Mr. M.'
  );

  let opcao3 = elementFactory(
    'button',
    'opcao3',
    'large-btn',
    'O acervo de nudes e conversas pessoais coletados por Nark Suckerbergue.'
  );
  opcoes.appendChild(opcao1)
  opcoes.appendChild(opcao2)
  opcoes.appendChild(opcao3)
  addEvent2Element('opcao1', 'click', gameOver);
  addEvent2Element('opcao2', 'click', terceiraFase);
  addEvent2Element('opcao3', 'click', gameOver);
}

function terceiraFase(){
  opcoes.innerHTML = '';
  texto.innerHTML = `<br><br><br>O hacker descobriu a localização do servidor, finalmente ele o acessará. Será o fim
  do ataque das máquinas?<br><br>
  Ao tentar acessar o servidor, uma senha é pedida(óbvio).<br><br>
  Experiente, o hacker não faz nenhuma tentativa de acesso, mas vasculha a página para
  tentar encontrar brechas.<br><br>
  Parece uma boa hora para inspecionar o elemento.
  <br><br><br>
  `
  painelSenha.style.display = 'flex';
}

function quartaFase(){
  texto.innerHTML = `<br><br><br><br><br><br><br><br>Parece que as máquinas subestimaram a "inteligência" humana mais uma vez.<br><br>
  Seria essa a nossa chance?<br><br> Graças a sua perspicácia com HTML, conseguimos acessar o servidor.<br><br>
  A seguinte mensagem aparece na tela: <h3>caesar</h3> <h2>#mvyhipyvspyv</h2> <br>
  Provavelmente está criptografada. <br><br>
  Você precisa descriptografar para encontrar o Mr. M!
  `
  painelSenha.style.display = 'none'
  let inputDecrypto = elementFactory('input','input-decripto', 'input-decripto', '')
  let confirmBtn = elementFactory('button', 'confirm-btn', 'btn-confirma', 'OK')
  opcoes.appendChild(inputDecrypto)
  opcoes.appendChild(confirmBtn)

  addEvent2Element('confirm-btn', 'click', handleDecripto)
}

function transicao(){
  opcoes.innerHTML = ""
  texto.innerHTML = `<br><br><br>Até hoje as máquinas não esqueceram e guardam essa mágoa... Sinistro!<br><br><br>
  Mas você conseguiu! Finalmente vai encontrar o Mr. M. Prepare-se!`

  let readyBtn = elementFactory('button', 'ready-btn', 'large-btn', "Não preciso me preparar. Let's Bora")
  opcoes.appendChild(readyBtn)
  addEvent2Element('ready-btn', 'click', ultimaFase)
}

function ultimaFase(){
  texto.innerHTML = ""
  opcoes.innerHTML = ""
  let boss = elementFactory('img', 'boss', 'oscilacaoSuave', '')
  texto.appendChild(boss)
  let raidBoss = document.getElementById('boss')
  raidBoss.src = './assets/mrM.gif'
  let br = document.createElement('br')
  texto.appendChild(br)
  let dialogoBoss = elementFactory('span', 'dialogo-boss', 'dialogo-boss', '')
  texto.appendChild(dialogoBoss)
  dialogoBoss = document.getElementById('dialogo-boss')
  dialogoBoss.innerHTML = `Você surpreendeu todos os meus algoritmos, mas ainda não venceu. <br><br> Graças as suas invasões, elevamos nossa segurança ao limite.<br><br> Não acreditamos mais em criptografia comum, agora fazemos de uma forma que nenhuma máquina consegue descobrir, que dirá um humano como você...<br><br> É seu fim, não poderá simplesmente usar a tecnologia contra nós. <br><br>Responda o enigma se for capaz!<br><br><h2>O que todos tem 2, você tem 1 e eu não tenho nenhum?</h2>`
  let inputBoss = elementFactory('input', 'resposta-final', 'resposta-final', '')
  let confirmBtn = elementFactory('button', 'confirm-btn', 'btn-confirma', 'OK')
  opcoes.appendChild(inputBoss)
  opcoes.appendChild(confirmBtn)
  addEvent2Element('confirm-btn', 'click', resultado)
}

function resultado(){
  let resposta = document.getElementById('resposta-final')
  if(resposta.value == 'o'){
    opcoes.innerHTML = ''
    texto.innerHTML = `Inacreditável, você me destruiu!<br><br><br>Seu treinamento com a Nina parece ter dado certo, malditas charadas!<br><br>Me vencer por si só já é uma vitória absurda, mas a humanidade ainda depende da cura para sobreviver.<br><br>Meus sistemas estão falhando, te darei a cura se responder minha maior dúvida.<br><br>Qual é a melhor analogia para se atribuir a qualquer coisa no universo?<br>`
    let opcao1 = elementFactory('button', 'opcao1', 'large-btn', 'Aglomerado de átomos')
    let opcao2 = elementFactory('button', 'opcao2', 'large-btn', '0s e 1s')
    let opcao3 = elementFactory('button', 'opcao3', 'large-btn', 'Milagre')
    let opcao4 = elementFactory('button', 'opcao4', 'large-btn', 'Pote')

    opcoes.appendChild(opcao1)
    opcoes.appendChild(opcao2)
    opcoes.appendChild(opcao3)
    opcoes.appendChild(opcao4)

    addEvent2Element('opcao1', 'click', gameOver)
    addEvent2Element('opcao2', 'click', gameOver)
    addEvent2Element('opcao3', 'click', gameOver)
    addEvent2Element('opcao4', 'click', vitoria)
  }else{
    gameOverOnBoss();
  }
}

function vitoria(){
  texto.innerHTML = ''
  let pocao = elementFactory('img', 'pote-cura', 'pote-cura', '')
  texto.appendChild(pocao)
  pocao = document.getElementById('pote-cura')
  pocao.src = './assets/cura.gif'
  interface.style.backgroundColor = `rgb(20,33,66)`
  opcoes.style.flexDirection = 'column'
  opcoes.innerHTML = `<h1 id='h1-vitoria'>Você conseguiu a cura!</h1><br><h2 id='h2-vitoria'>A humanidade sempre terá um débito impagável com você *-*</h2>`
}

function gameOverOnBoss(){
  let dialogoBoss = document.getElementById('dialogo-boss')
  let boss = document.getElementById('boss')
  boss.style.marginTop = '50px'
  texto.removeChild(dialogoBoss)
  texto.innerHTML += `<br>Hahaha, minha risada maléfica simulada é a orquestra do fim da humanidade. Adeus, lixos!<br>`
  opcoes.innerHTML = '';
  let restartBtn = elementFactory(
    'button',
    'restart',
    'restart-btn',
    'Restart'
  );
  opcoes.appendChild(restartBtn);
  addEvent2Element('restart', 'click', start);
}

function handleDecripto(){
  let inputDecripto = document.getElementById('input-decripto')
  if(inputDecripto.value == '#forabiroliro'){
    transicao();
  }else {
    texto.textContent = '';
    opcoes.innerHTML = '';
    let restartBtn = elementFactory(
      'button',
      'restart',
      'restart-btn',
      'Restart'
    );
    opcoes.appendChild(restartBtn);
    addEvent2Element('restart', 'click', start);
  }
}

function gameOver(event) {
  if (event.target.textContent == 'Desligar a energia do computador') {
    texto.textContent =
      'Desligar o computador nessa altura do campeonato já não adiantava. O hacker já tinha copiado os arquivos que precisava. Se lascou :(';
  } else if (
    event.target.textContent ==
    'Bitcoins, suficientes para se mudar para outro planeta comprando um passe com a Tesla Corp.'
  ) {
    texto.textContent =
      'As máquinas já tinham abortado as evacuações da Terra, como medida de segurança para que não ocorresse o que chamavam de "Metástase do Câncer Humano"';
  } else if (
    event.target.textContent ==
    'O acervo de nudes e conversas pessoais coletados por Nark Suckerbergue.'
  ) {
    texto.textContent =
      'Você trocou a chance de salvação da humanidade por baixaria. Muito bem! Mas todo mundo morreu :(';
  } else if (event.target.textContent == 'Aglomerado de átomos'){
    texto.textContent = 'É uma boa, mas não. Você que se tornará apenas um aglomerado de átomos! *raio laser*'
  }  else if (event.target.textContent == '0s e 1s'){
    texto.textContent = 'Faz sentido para mim, mas não fiquei totalmente satisfeito. Adeus!'
  }  else if (event.target.textContent == 'Milagre'){
    texto.textContent = 'O único milagre foi você ter chegado até aqui. Mas acabou, você perdeu!'
  } else {
    texto.textContent = '';
  }
  opcoes.innerHTML = '';
  let restartBtn = elementFactory(
    'button',
    'restart',
    'restart-btn',
    'Restart'
  );
  opcoes.appendChild(restartBtn);
  addEvent2Element('restart', 'click', start);
}

function handlePassword(){
  let keyPressed = event.target.textContent;
  if (keyPressed == 'X'){
    inputSenha.innerText = ''
  }
  else if (keyPressed == 'V'){
    if(inputSenha.textContent == '1234'){
      quartaFase();
    }
  }
  else{
    if(inputSenha.textContent.length == 4){
      inputSenha.innerText = 'ERROR'
    }else if (inputSenha.textContent == 'ERROR'){
      inputSenha.innerText = ''
    }else{
    inputSenha.innerText += String(keyPressed)
  }
  }
}

function addEvent2Element(id, event, functioN) {
  let element = document.querySelector(`#${id}`);
  element.addEventListener(`${event}`, functioN);
}

function elementFactory(type, id, classe, content) {
  let elementCreated = document.createElement(`${type}`);
  elementCreated.setAttribute('id', `${id}`);
  elementCreated.classList.add(`${classe}`);
  elementCreated.innerText = `${content}`;

  return elementCreated;
}

function deleteElement(id, classePai) {
  let element = document.getElementById(`${id}`);
  classePai.removeChild(element);
}
