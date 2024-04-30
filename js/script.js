function somar() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    res.style.height = "30px"
    if(n1 == "" || n2 == "")
    {
        res.style.height = "50px"
        res.innerHTML = "Erro não foi possível calcular pois o valor de algum dos campos está vazio"
        res.style.color = "red"
    }
    else
    {
        var resultado = Number(n1) + Number(n2)
        res.innerHTML = `O resultado é ${resultado}`
        res.style.color = "green"
    }
}

function subtrair() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    res.style.height = "30px"
    if(n1 == "" || n2 == "")
    {
        res.style.height = "50px"
        res.innerHTML = "Erro não foi possível calcular pois o valor de algum dos campos está vazio"
        res.style.color = "red"
    }
    else
    {
        var resultado = Number(n1) - Number(n2)
        res.innerHTML = `O resultado é ${resultado}`
        res.style.color = "green"
    }
}

function multiplicar() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    res.style.height = "30px"
    if(n1 == "" || n2 == "")
    {
        res.style.height = "50px"
        res.innerHTML = "Erro não foi possível calcular pois o valor de algum dos campos está vazio"
        res.style.color = "red"
    }
    else
    {
        var resultado = Number(n1) * Number(n2)
        res.innerHTML = `O resultado é ${resultado}`
        res.style.color = "green"
    }
}

function dividir() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    res.style.height = "30px"
    if(n1 == "" || n2 == "")
    {
        res.style.height = "50px"
        res.innerHTML = "Erro não foi possível calcular pois o valor de algum dos campos está vazio"
        res.style.color = "red"
    }
    else
    {
        var resultado = Number(n1) / Number(n2)
        res.innerHTML = `O resultado é ${resultado}`
        res.style.color = "green"
    }
    
}

function resto() {
    var n1 = document.getElementById('n1').value
    var n2 = document.getElementById('n2').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    res.style.height = "30px"
    if(n1 == "" || n2 == "")
    {
        res.style.height = "50px"
        res.innerHTML = "Erro não foi possível calcular pois o valor de algum dos campos está vazio"
        res.style.color = "red"
    }
    else
    {
        var resultado = Number(n1) % Number(n2)
        res.innerHTML = `O resultado é ${resultado}`
        res.style.color = "green"
    }
}

function raiz() {
    var n1 = document.getElementById('n1').value
    var res = document.getElementById('res')
    res.innerHTML = ""
    res.style.height = "30px"
    if(n1 == "")
    {
        res.style.height = "50px"
        res.innerHTML = "Erro não foi possível calcular pois o valor de algum dos campos está vazio"
        res.style.color = "red"
    }
    else
    {
        var resultado = Math.sqrt(Number(n1))
        res.innerHTML = `O resultado é ${resultado}`
        res.style.color = "green"
    }
}