students=   
    [
        { name: "Matheus Quirino", nota1: 7, nota2: 7 },
        { name: "Camila", nota1: 4, nota2: 5 },
        { name: "Melqui", nota1: 2, nota2: 3 },
        { name: "Mená", nota1: 10, nota2: 9.5 },
        { name: "Máx", nota1: 5, nota2: 8 }
      ]




const calcMedia = (nota1,nota2) => {
    return ((nota1 + nota2) / 2).toFixed(2)
  }
 
  

  for (let media of students) 
  if(calcMedia(media.nota1, media.nota2) >= 7) {
    alert(`A média do(a) aluno(a) ${media.name} foi : ${calcMedia(media.nota1,media.nota2)}
    Parabéns!, ${media.name}! Você foi aprovado(a) no curso!`)
} else if (media.nota1, media.nota2< 7 && media.nota1, media.nota2>=5){
    alert(`A média do(a) aluno(a) ${media.name} foi: ${calcMedia(media.nota1,media.nota2)}
    Estude para sua prova de recuperação!, ${media.name}! Boa Sorte!`)
} else  {
    alert(`A média do(a) aluno(a) ${media.name} foi: ${calcMedia(media.nota1,media.nota2)}
    Você não passou dessa vez, ${media.name}! Tente novamente no Próximo Semestre !`)
   
    };
