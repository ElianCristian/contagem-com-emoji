function Contar() {
    var ini = document.getElementById('inicio')
    var inicio = Number(ini.value)
    var fim = document.getElementById('fim')
    var final = Number(fim.value)
    var pass = document.getElementById('passo')
    var passo = Number(pass.value)
    var resultado = document.getElementById('res')
    if(inicio == '' || fim == '' || passo == ''){
        alert('Você deixou campo vazio. Preencha os campos corretamente!')
    }
    else if (inicio < final) {
        resultado.innerHTML = 'Contando: '
        for (var i = inicio; i <= final; i += passo) {
            resultado.innerHTML += `[${i}]`
        }
    }
    else if(inicio > final){
        resultado.innerHTML = 'Contando: '
        for (var i = inicio; i >= final; i -= passo) {
            resultado.innerHTML += `[${i}]`
        }
    }
    
}