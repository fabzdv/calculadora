function somar() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    var resultado = Number(n1) + Number(n2)
    res.innerHTML = `O resultado é ${resultado}`
}

function subtrair() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    var resultado = Number(n1) - Number(n2)
    res.innerHTML = `O resultado é ${resultado}`
}

function multiplicar() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    var resultado = Number(n1) * Number(n2)
    res.innerHTML = `O resultado é ${resultado}`
}

function dividir() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    var resultado = Number(n1) / Number(n2)
    res.innerHTML = `O resultado é ${resultado}`
}
