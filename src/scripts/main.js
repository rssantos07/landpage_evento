
AOS.init();

const dataDoEvento = new Date("jul 08, 2023 12:05:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function (){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const tempoAteOEvento = timeStampDoEvento - timeStampAtual

    const diaEmMs = 1000 * 60 * 60 * 24
    const horaEmMs = 1000 * 60 * 60
    const minutoEmMs = 1000 * 60

    const diasAteOEvento = Math.floor(tempoAteOEvento/ diaEmMs);
    const horasAteOEvento = Math.floor((tempoAteOEvento % diaEmMs)/horaEmMs);
    const minutosAteOEvento = Math.floor((tempoAteOEvento % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((tempoAteOEvento % minutoEmMs) / 1000);
     
    console.log(diasAteOEvento);
    console.log(horasAteOEvento);
    console.log(minutosAteOEvento);
    console.log(segundosAteOEvento);

    document.getElementById(`contador`).innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s `


    if(diasAteOEvento < 0) {
        clearInterval (contaAsHoras);
        document.getElementById(`contador`).innerHTML = `Evento Expirado`
    }
},1000);
