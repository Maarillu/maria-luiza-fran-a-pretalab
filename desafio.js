/* Contagem de Medalhas
Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Quando escrever 'sair', o programa deverá encerrar e mostrar na tela o ranking de medalhas no formato:


#Ranking de medalhas:
#Brasil: 7 medalhas
#França: 6 medalhas
#Argentina: 3 medalhas*/

function calcularMedalhasDosPaises(){
let paises = []
let medalhas = []
let totalDeMedalhas = []

while(true) {
    let pais = prompt("digite o nome do país (ou 'sair' para terminar)")

    if (pais.toLowerCase() === "sair"){      
  break

  }

  let Medalhas = parseFloat(prompt(`digite as quantidades de ${medalhas}medalhas`))

  if (!isNaN(Medalhas)) { 
    paises.push(pais)
    medalhas.push(Medalhas)
    totalDeMedalhas += Medalhas
  } else {
    alert ("Por favor, insira um numero valido")
  }
}

if (paises.length > 0) {
  let mediaMedalhas = totalDeMedalhas / medalhas.length

  let menorMedalha = medalhas[0]
  let maiorMedalha = medalhas[0]
  let paisMaismedalhas = paises[0]
  let paisMenosmedalhas = paises[0]

for (let i = 1; i < medalhas.length; i++) {
  if (medalhas[i] > maiorMedalha) {
    maiorMedalha = medalhas[i]
    paisMaismedalhas = paises[i]
  }
  if (medalhas[i] < menorMedalha ) {
    menorMedalha = medalhas[i]
    paisMenosmedalhas = paises[i]
  }
  
}


alert (`ranking de medalhas:
  -país com mais medalhas: ${paisMaismedalhas} (${maiorMedalha})
  - país com menos medalhas ${paisMenosmedalhas} (${menorMedalha})`)
} else {
  alert("nenhum dado de medalhas foi inserido.")
}

}

calcularMedalhasDosPaises()