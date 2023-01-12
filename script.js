function carregar (){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var tempo = new Date ()
    var min = tempo.toLocaleTimeString()
    var hora = tempo.getHours()
    if (hora <= 4) {
        msg.innerText = `São ${min} horas, você não deveria estar por aqui, garoto!`
        img.innerHTML = '<img src="madrugada.mini.png">'
        document.body.style.backgroundImage = "url('anoitecer.jpg')";
    }
    else if (hora < 12) {
        msg.innerText = `Bom dia, são ${min} horas. Tome esse café para despertar!`
        img.innerHTML = '<img src="manhamini.png">'
    }
    else if (hora <= 17) {
        msg.innerText = `Boa tarde, agora são ${min} horas.`
        img.innerHTML = '<img src="tarde.mini.jpg">'
        document.body.style.backgroundImage = "url('atarde.jpg')";
    }
    else {
        msg.innerText = `Já são ${min} horas, você deveria descansar criança.`
        img.innerHTML = '<img src="noite.mini.png">'
        document.body.style.backgroundImage = "url('entardecer.jpg')";
    }
}
/*function addZero(i) {

}*/