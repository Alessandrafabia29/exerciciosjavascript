function verificar() {
   // window.alert('FUNCIONOU!')-para ver se a função está funcionando antes de codificar.-
    var data = new Date() 
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
       var fsex = document.getElementsByName('radsex')
       var idade = ano - Number(fano.value)
       var genero = ''
       var img = document.createElement('img')
       img.setAttribute('id', 'foto')
       if (fsex[0].checked){
        genero = 'Homem'
        if (idade >=0 && idade < 10) {
          // Criança 
          img.setAttribute('src', 'bbm.png')
        } else if (idade < 21) {
            //Jovem
          img.setAttribute('src', 'jovemm.png')
        } else if (idade < 50) {
            //Adulto
          img.setAttribute('src', 'adultomasc.png')
        } else {
            //Idoso
          img.setAttribute('src', 'idoso.png')
        }
       } else if (fsex[1].checked) {
        genero = 'Mulher'
         if (idade >=0 && idade < 10) {
          // Criança 
          img.setAttribute('src', 'bbf.png')
        } else if (idade < 21) {
            //Jovem
            img.setAttribute('src', 'jovemf.png')
        } else if (idade < 50) {
            //Adulto
            img.setAttribute('src', 'adulta.png')
        } else {
            //Idoso
            img.setAttribute('src', 'idosa.png')
        }
       }
       res.style.textAlign = 'center'
       res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
       res.appendChild(img)
    }
}