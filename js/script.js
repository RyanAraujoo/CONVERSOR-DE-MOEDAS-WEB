
function validationCalculate() {
    let valueUser = document.getElementById("valueUser").value
    let primarySelect = document.getElementById("primary-select").value
    let secondarySelect = document.getElementById("secondary-select").value
    try {
        if (valueUser.length == 0) {
            alert("Número incalculável!")
        } else if (primarySelect == '' && primarySelect == 0) {
            alert("Valor do primeiro select não definido!")
        } else if (secondarySelect == '' && secondarySelect == 0) {
            alert("Valor do segundo select não definido!")
        } else if (primarySelect == secondarySelect) {
            alert("Conversão não definida!")
        } else {
            return conversionCalculate(valueUser, primarySelect, secondarySelect)
        }
    } catch (error) { throw console.log(error) }
}

function conversionCalculate(valueUser, primarySelect, secondarySelect) {
    let primaryImg = document.querySelector(".primary-result-img")
    let primaryTxt = document.querySelector(".primary-result-txt")
    let primaryValue = document.querySelector(".primary-result-value")
    let secondaryImg = document.querySelector(".secondary-result-img")
    let secondaryTxt = document.querySelector(".secondary-result-txt")
    let secondaryValue = document.querySelector(".secondary-result-value")
    //
    let pageResult = document.querySelector(".result-main-container")

    let valueCoin = {
        real: [0.20, 0.18],
        dolar: [5.08, 0.92],
        euro: [1.09, 5.54],
        coin: function formatar(num) { return num * this.valueUser },
        valueUser: parseFloat(valueUser)
    }
    // console.log(typeof valueCoin.real[1] == typeof valueCoin.valueUser)
    // console.log(typeof valueCoin.real[1])
    //  console.log(typeof valueCoin.valueUser)
    switch (primarySelect) {
        case 'real':
            if (secondarySelect == 'dolar') {
                real(primaryImg, primaryTxt)
                primaryValue.textContent = realFormat(valueCoin.valueUser)
                dolar(secondaryImg, secondaryTxt)
                secondaryValue.textContent = dolarFormat(valueCoin.coin(valueCoin.real[0]))
            } else {
                real(primaryImg, primaryTxt)
                primaryValue.textContent = realFormat(valueCoin.valueUser)
                euro(secondaryImg, secondaryTxt)
                secondaryValue.textContent = euroFormat(valueCoin.coin(valueCoin.real[1]))
            }
            break
        case 'dolar':
            if (secondarySelect == 'real') {
                dolar(primaryImg, primaryTxt)
                primaryValue.textContent = dolarFormat(valueCoin.valueUser)
                real(secondaryImg, secondaryTxt)
                secondaryValue.textContent = realFormat(valueCoin.coin(valueCoin.dolar[0]))
            } else {
                dolar(primaryImg, primaryTxt)
                primaryValue.textContent = dolarFormat(valueCoin.valueUser)
                euro(secondaryImg, secondaryTxt)
                secondaryValue.textContent = euroFormat(valueCoin.coin(valueCoin.dolar[1]))
            }
            break
        default:
            if (secondarySelect == 'dolar') {
                euro(primaryImg, primaryTxt)
                primaryValue.textContent = euroFormat(valueCoin.valueUser)
                dolar(secondaryImg, secondaryTxt)
                secondaryValue.textContent = dolarFormat(valueCoin.coin(valueCoin.euro[0]))
            } else {
                euro(primaryImg, primaryTxt)
                primaryValue.textContent = euroFormat(valueCoin.valueUser)
                real(secondaryImg, secondaryTxt)
                secondaryValue.textContent = realFormat(valueCoin.coin(valueCoin.euro[1]))
            }
    }
    pageResult.style.display = 'block'
}

const real = (xreal, yreal) => {
    xreal.src = './assets/br.jpg'
    yreal.textContent = 'Real(BR)'
}
const dolar = (xdolar, ydolar) => {
    xdolar.src = './assets/dolar-eua.jpg'
    ydolar.textContent = 'Dolar'
}
const euro = (xeuro, yeuro) => {
    xeuro.src = './assets/euro.jpg'
    yeuro.textContent = 'Euro'
}

const realFormat = (x) => {
    return x.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

const dolarFormat = (x) => {
    return x.toLocaleString('en-us', { style: 'currency', currency: 'USD' })
}

const euroFormat = (x) => {
    return x.toLocaleString('es', { style: 'currency', currency: 'EUR' })
}