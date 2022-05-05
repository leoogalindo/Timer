function getTimeFromSeconds(seconds){
    const data = new Date(seconds * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

const clock = document.querySelector('.relogio')
const start = document.querySelector('.iniciar')
const pause = document.querySelector('.pausar')
const reset = document.querySelector('.zerar')
let seconds = 0
let timer

function getClockStarted(){
    timer = setInterval(function(){
        seconds++
        clock.innerHTML = getTimeFromSeconds(seconds)
    }, 1000)
}

start.addEventListener('click', function(event){
    clearInterval(timer)
    getClockStarted()
    clock.style.color = 'black'
})

pause.addEventListener('click', function(event){
    clearInterval(timer)
    clock.style.color = 'red'
})

reset.addEventListener('click', function(event){
    seconds = 0
    clearInterval(timer)
    clock.innerHTML = '00:00:00'
})
