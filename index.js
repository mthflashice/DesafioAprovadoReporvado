let firstNumber = prompt('Digite o primeiro número')
let secondNumber = prompt('Digite o segundo número')

firstNumber = Number(firstNumber)
secondNumber = Number(secondNumber)

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber



alert(`A soma dos dois números é` + sum)
alert('A Subtração dos números é: ' + sub)
alert('A Multiplicação dos números é : ' + multi)
alert('Divisão dos números é: ' + div)
alert('Resto da divisão: ' + restDiv)
function ParImpar(sum){
    if(sum % 2 ==0){
        (alert `O Número é 
        par!`)   
    }else{
        (alert `O Número é
        Impar!`)
    }
}
ParImpar(sum);





if(firstNumber===secondNumber){
alert(`Os números inseridos são 
iguais`)
}
if(firstNumber!=secondNumber){
    alert(`Os números inseridos são 
diferentes`)
}