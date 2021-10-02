function calculate() {
    var valueinprimary = document.getElementById("value-select-primary")
            if (valueinprimary.value.length == 0) {
                alert("Número não obtido!")
            } else {
                var valueprimary = document.getElementById("select-primary").value
                var valuesecond = document.getElementById("select-second").value
                var Resultado = document.getElementById("result")

                /* manipulação da section resultado */
                var imgprimary = document.querySelector(".img-result-primary")
                var textprimary = document.querySelector(".text-result-primary")
                var valorprimary = document.querySelector(".value-result-primary")
                var imgsecond = document.querySelector(".img-result-second")
                var textsecond = document.querySelector(".text-result-second")
                var valorsecond = document.querySelector(".value-result-second")
                
                /* valores guardados em object/array */
                var valuecoin = {
                    real: [0.18,0.16],
                    dolar: [5.44,0.86],
                    euro: [1.16,6.30],
                    format: function formatar(num) {return num * this.valuefirst }
                }
                valuecoin.valuefirst = valueinprimary.value
                switch(valueprimary) {
                    case 'real': 
                        if (valuesecond == 'dolar') {
                            real(imgprimary, textprimary)
                            valorprimary.textContent = valuecoin.valuefirst
                            dolar(imgsecond, textsecond)
                            valorsecond.textContent = valuecoin.format(valuecoin.real[0]).toLocaleString('en-us',{style: 'currency', currency: 'USD'})
                        } else {    
                            real(imgprimary, textprimary)
                            valorprimary.textContent = valuecoin.valuefirst
                            euro(imgsecond, textsecond)
                            valorsecond.textContent = valuecoin.format(valuecoin.real[1]).toLocaleString('es',{style: 'currency', currency: 'EUR'})
                        } 
                        break
                    case 'dolar': 
                         if (valuesecond == 'real') {  
                            dolar(imgprimary, textprimary)
                            valorprimary.textContent = valuecoin.valuefirst
                            real(imgsecond, textsecond)
                            valorsecond.textContent = valuecoin.format(valuecoin.dolar[0]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                         } else {
                            dolar(imgprimary, textprimary)
                            valorprimary.textContent = valuecoin.valuefirst
                            euro(imgsecond, textsecond)
                            valorsecond.textContent = valuecoin.format(valuecoin.dolar[1]).toLocaleString('es',{style: 'currency', currency: 'EUR'})
                         }
                        break
                    case 'euro':
                        if (valuesecond == 'dolar') {
                           euro(imgprimary, textprimary)
                            valorprimary.textContent = valuecoin.valuefirst
                           dolar(imgsecond, textsecond)
                            valorsecond.textContent = valuecoin.format(valuecoin.euro[0]).toLocaleString('en-us',{style: 'currency', currency: 'USD'})
                        } else {
                            euro(imgprimary, textprimary)
                            valorprimary.textContent = valuecoin.valuefirst
                            real(imgsecond, textsecond)
                            valorsecond.textContent = valuecoin.format(valuecoin.euro[1]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        }
            }
            Resultado.style.display = 'block' 
    }
}

const real = (xreal,yreal) => {
     xreal.src = './assets/br.jpg'
     yreal.textContent = 'Real(BR)'
}
const dolar = (xdolar,ydolar) => {
    xdolar.src = './assets/dolar-eua.jpg'
    ydolar.textContent = 'Dolar'
}
const euro = (xeuro, yeuro) => {
    xeuro.src = './assets/euro.jpg'
    yeuro.textContent = 'Euro'
}