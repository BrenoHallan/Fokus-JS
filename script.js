const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const banner = document.querySelector('.app__image')
const titulo = document.querySelector('.app__title')
const botoes = document.querySelectorAll('.app__card-button')

let tempoEmSegundos = 5
const botaoIniciarPausar = document.getElementById('start-pause')
let intervaloId = null


//musica -- no meu codigo nao funcionou.. mas enfim, isso aí.
const musicaFocoInput = document.querySelector('#alternar-musica')
const musica = new Audio('/sons/luna-rise-part-one.mp3')
musica.loop = true

musicaFocoInput.addEventListener('change', () => {
  if (musica.paused) {
    musica.play()
  } else {
    musica.pause()
  }
})

focoBt.addEventListener('click', () => {
  alterarContexto('foco')
  focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
  alterarContexto('descanso-curto')
  curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
  alterarContexto('descanso-longo')
  longoBt.classList.add('active')
})

function alterarContexto(contexto) {
  botoes.forEach(function (contexto) {
    contexto.classList.remove('active')
  })
  html.setAttribute('data-contexto', contexto)
  banner.setAttribute('src', `/imagens/${contexto}.png`)
  switch (contexto) {
    case "foco":
      titulo.innerHTML = `
            Otimize sua produtividade,<br>
                <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
      break;
    case "descanso-curto":
      titulo.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
      break;
    case "descanso-longo":
      titulo.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
    default:
      break;
  }
}

//temporizador impossível de se fazer ... caramba mano, isso é difícil demais kkkkk
function contagemRegressiva() {
  tempoEmSegundos -= 1
  console.log('tempo: ' + tempoEmSegundos)

  if (tempoEmSegundos <= 0){
    zerarContagem()
    alert('Tempo finalizado')
  }
}

botaoIniciarPausar.addEventListener('click', iniciar)

function iniciar() {
  intervaloId = setInterval(contagemRegressiva, 1000)
}

function zerarContagem() {
  clearInterval(intervaloId)
  intervaloId = null
}