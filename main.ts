let cantidad_lluvia = 0
let promedio = 0
input.onButtonPressed(Button.A, function () {
    // A esta variable se le está asignando el valor de 0
    cantidad_lluvia = 0
    // A esta variable se le está asignando el valor de 0
    promedio = 0
    // Este es un bucle pra representar los 5 años de lluvia
    for (let index = 0; index < 1825; index++) {
        cantidad_lluvia += randint(0, 10)
    }
    // esta variable calcula el promedio de lluvia de los 5 años.
    promedio = cantidad_lluvia / 1825
    basic.showString("P=")
    basic.showNumber(promedio)
})
