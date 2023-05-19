input.onButtonPressed(Button.A, function () {
    if (tipo_dado == 0) {
        tipo_dado += 1
    } else if (tipo_dado == 1) {
        tipo_dado += 2
    } else if (tipo_dado == 2) {
        tipo_dado += 3
    } else if (tipo_dado == 3) {
        tipo_dado += 4
    } else if (tipo_dado == 4) {
        tipo_dado += 5
    } else if (tipo_dado == 5) {
        tipo_dado += 6
    } else if (tipo_dado == 6) {
        tipo_dado += 0
    }
    basic.showNumber(tipo_dado)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    if (tipo_dado == 0) {
        basic.showString("elige el tipo de dado")
    } else if (tipo_dado == 1) {
        Dado_4 += randint(1, 4)
    } else if (tipo_dado == 2) {
        dado_6 += randint(1, 6)
    } else if (tipo_dado == 3) {
        dado_8 += randint(1, 8)
    } else if (tipo_dado == 4) {
        dado_10 += randint(0, 9)
    } else if (tipo_dado == 5) {
        dado_12 += randint(1, 12)
    } else if (tipo_dado == 6) {
        dado_20 += randint(1, 20)
    }
})
input.onButtonPressed(Button.B, function () {
    if (tipo_dado == 0) {
        basic.showString("elige el tipo de dado")
    } else if (tipo_dado == 1) {
        basic.showNumber(Dado_4)
    } else if (tipo_dado == 2) {
        basic.showNumber(dado_6)
    } else if (tipo_dado == 3) {
        basic.showNumber(dado_8)
    } else if (tipo_dado == 4) {
        basic.showNumber(dado_10)
    } else if (tipo_dado == 5) {
        basic.showNumber(dado_12)
    } else if (tipo_dado == 6) {
        basic.showNumber(dado_20)
    }
})
let dado_20 = 0
let dado_12 = 0
let dado_10 = 0
let dado_8 = 0
let dado_6 = 0
let Dado_4 = 0
let tipo_dado = 0
tipo_dado = 0
Dado_4 = 0
dado_6 = 0
dado_8 = 0
dado_10 = 0
dado_12 = 0
dado_20 = 0
