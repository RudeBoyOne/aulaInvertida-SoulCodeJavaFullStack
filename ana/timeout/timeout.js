// function digaOi() {
//     alert('Olá tudo bem!');
//   }
// digaOi()

let myGreeting = setTimeout(function sayHi() {
    alert('Olá tudo bem');
  }, 2000)

let teste = "Se aparecer DEPOIS do Alert é 'SÍNCRONO' e se aparecer ANTES é 'ASSÍNCRONO'"
document.write(teste)