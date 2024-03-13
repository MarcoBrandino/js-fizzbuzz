console.log('funziona');

// Stampa i numeri da 1 a 100
for (let i = 0; i < 100; i++) {
    const numero = i + 1;

    // SE il numero è multiplo di 3 e 5 allora stampa FizzBuzz
    if (numero % 3 === 0 && numero % 5 === 0) {
        console.log("FizzBuzz " + numero)
    }
    // ALTRIMENTI SE è multiplo di 3 stampa Fizz
    else if (numero % 3 === 0) {
        console.log("Fizz " + numero)
    }
    // ALTRIMENTI SE è multiplo di 5 stampa Buzz
    else if (numero % 5 === 0) {
        console.log("Buzz " + numero)
    }
    // ALTRIMENTI
    else {
        console.log(numero);
    }
}