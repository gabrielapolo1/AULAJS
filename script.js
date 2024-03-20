function criarRegistroAlunos(listaEstudantes){
    var resultadoFinal = "<table><thead><tr><th>Nome</th><th>RA</th><th>Nota 1</th><th>Nota 2</th><th>Média</th></tr></thead><tbody></tr>";
    var mediaIndividual = 0;
    var mediaTotal = 0;
    var somaNotas1 = 0;
    var somaNotas2 = 0;
    var aprovados = 0;
    var reprovados = 0;
    
    for(let i=0; i<listaEstudantes.length; i++){
        nota1 = listaEstudantes[i].nota1 >= 6 ? "<td style='color:blue;'>" + listaEstudantes[i].nota1 + "</td>" : "<td style='color:red;'>" + listaEstudantes[i].nota1 + "</td>";
        nota2 = listaEstudantes[i].nota2 >= 6 ? "<td style='color:blue;'>" + listaEstudantes[i].nota2 + "</td>" : "<td style='color:red;'>" + listaEstudantes[i].nota2 + "</td>";

        mediaIndividual = (listaEstudantes[i].nota1 + listaEstudantes[i].nota2) / 2;
        if(mediaIndividual >= 6){
            media = "<td style='color:blue;'>" + mediaIndividual + "</td>";
        }else{
            media = "<td style='color:red;'>" + mediaIndividual + "</td>";
        }
        somaNotas1 += listaEstudantes[i].nota1;
        somaNotas2 += listaEstudantes[i].nota2;
        
        if(mediaIndividual >= 6){
            aprovados++;
        }else{
            reprovados++
        }

        resultadoFinal += "<tr><td>"+ listaEstudantes[i].nome + "</td><td>"+ listaEstudantes[i].ra + "</td>" + nota1 + nota2 + media +"</tr>";
    }
    
    resultadoFinal += "</tbody></table><section><strong>Média Nota 1: " + somaNotas1 / listaEstudantes.length + "</strong><br><strong>Média Nota 2: "+ somaNotas2 / listaEstudantes.length + "</strong><br><strong>Aprovados: " + aprovados + "</strong><br><strong>Reprovados: " + reprovados + "</section>";
    document.write(resultadoFinal);
}
