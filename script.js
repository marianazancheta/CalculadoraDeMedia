function media() {
  var nome = document.getElementById("nome").value
  var notaPrimeiroBimestre = parseFloat(document.getElementById("notaPrimeiroBi").value)
  var notaSegundoBimestre = parseFloat(document.getElementById("notaSegundoBi").value)
  var notaTerceiroBimestre = parseFloat(document.getElementById("notaTerceiroBi").value)
  var notaQuartoBimestre = parseFloat(document.getElementById("notaQuartoBi").value)
  var notaFinal = (notaPrimeiroBimestre + notaSegundoBimestre + notaTerceiroBimestre + notaQuartoBimestre)/4
  var notaFixada = notaFinal.toFixed(1)
  var aprovado;
  if (notaFinal > 5) {
    aprovado = "Aluno(a) aprovado(a)"
  } else {
    aprovado = "Aluno(a) reprovado(a)"
  }
  document.getElementById("nota").innerText = "Nota do aluno(a): " + nome;
  document.getElementById("notaAqui").innerText = notaFixada;
  document.getElementById("aprovadoAqui").innerText = aprovado;
  document.getElementById("notaPrimeiroBi").value = ""
  document.getElementById("notaSegundoBi").value = ""
  document.getElementById("notaTerceiroBi").value = ""
  document.getElementById("notaQuartoBi").value = ""
  document.getElementById("nome").value = ""
}