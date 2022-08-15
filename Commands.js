function final(){
    var inv = document.getElementById('tipoinv')
    var ir = 0
    var valor = Number (document.getElementById('txtvalor').value)
    var juros = Number(document.getElementById('txtjuros').value)
    var tempo = Number(document.getElementById('txttempo').value)
    var totalbr = 0
    var totallq = 0
    var area2 = document.getElementById('area2')

    tempo /= 12
   if(inv.selectedIndex == 1){
       if(tempo <= 0.5){
           ir = 22.5
       } else if(tempo <= 1){
           ir = 20
       } else if(tempo <=2){
           ir = 17.5
       } else {
           ir = 15
       }
   }

   juros = ((valor * juros) / 100) * tempo
   ir = (juros * ir) / 100
   valorb = valor + juros
   valorl = valorb - ir

   area2.style.padding = '15px'
   area2.innerHTML = '<h1>Resultado</h1>'
   area2.innerHTML += `<p>Juros recebido: R$${juros.toFixed(2)}</p>`
   area2.innerHTML += `<p>Imposto de Renda sobre o juros: R$${ir.toFixed(2)}</p>`
   area2.innerHTML += `<p>Valor bruto recebido a.a: R$${valorb.toFixed(2)}</p>`
   area2.innerHTML += `<p>Valor líquido recebido a.a: R$${valorl.toFixed(2)}</p>`

    
}