function calculate() {
    var primaryValueSelect = document.getElementById("primary-value-select")
            if (primaryValueSelect.value.length == 0) {
                alert("Número não obtido!")
            } else {
                var primarySelect = document.getElementById("primary-select").value
                var secondarySelect = document.getElementById("secondary-select").value
                var result = document.getElementById("result-container-currency")

                /* manipulação da section resultado */
                var primaryImg = document.querySelector(".primary-result-img")
                var primaryTxt = document.querySelector(".primary-result-txt")
                var primaryValue = document.querySelector(".primary-result-value")
                var secondaryImg = document.querySelector(".secondary-result-img")
                var secondaryTxt = document.querySelector(".secondary-result-txt")
                var secondaryValue = document.querySelector(".secondary-result-value")
                
                /* valores guardados em object/array */
                var valuecoin = {
                    real: [0.18,0.16],
                    dolar: [5.44,0.86],
                    euro: [1.16,6.30],
                    format: function formatar(num) {return num * this.valuefirst }
                }
                valuecoin.valuefirst = primaryValueSelect.value
                switch(primarySelect) {
                    case 'real': 
                        if (secondarySelect == 'dolar') {
                            real(primaryImg, primaryTxt)
                            primaryValue.textContent = valuecoin.valuefirst
                            dolar(secondaryImg, secondaryTxt)
                            secondaryValue.textContent = valuecoin.format(valuecoin.real[0]).toLocaleString('en-us',{style: 'currency', currency: 'USD'})
                        } else {    
                            real(primaryImg, primaryTxt)
                            primaryValue.textContent = valuecoin.valuefirst
                            euro(secondaryImg, secondaryTxt)
                            secondaryValue.textContent = valuecoin.format(valuecoin.real[1]).toLocaleString('es',{style: 'currency', currency: 'EUR'})
                        } 
                        break
                    case 'dolar': 
                         if (secondarySelect == 'real') {  
                            dolar(primaryImg, primaryTxt)
                            primaryValue.textContent = valuecoin.valuefirst
                            real(secondaryImg, secondaryTxt)
                            secondaryValue.textContent = valuecoin.format(valuecoin.dolar[0]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                         } else {
                            dolar(primaryImg, primaryTxt)
                            primaryValue.textContent = valuecoin.valuefirst
                            euro(secondaryImg, secondaryTxt)
                            secondaryValue.textContent = valuecoin.format(valuecoin.dolar[1]).toLocaleString('es',{style: 'currency', currency: 'EUR'})
                         }
                        break
                    case 'euro':
                        if (secondarySelect == 'dolar') {
                           euro(primaryImg, primaryTxt)
                            primaryValue.textContent = valuecoin.valuefirst
                           dolar(secondaryImg, secondaryTxt)
                            secondaryValue.textContent = valuecoin.format(valuecoin.euro[0]).toLocaleString('en-us',{style: 'currency', currency: 'USD'})
                        } else {
                            euro(primaryImg, primaryTxt)
                            primaryValue.textContent = valuecoin.valuefirst
                            real(secondaryImg, secondaryTxt)
                            secondaryValue.textContent = valuecoin.format(valuecoin.euro[1]).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})
                        }
            }
            result.style.display = 'block' 
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