/*Faça um programa que peça ao usuário os valores de uma matriz 4x4 e mostre os
valores das diagonais dessa matriz.*/

function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=4;
    let linha=4;

 // Alimentando a matriz
 for(l = 0; l < linha; l++) {
    matriz[l] = [];
    for(c = 0; c < coluna; c++) {
        do {
            matriz[l][c] = parseInt(prompt("Informe o número da linha: " + (l + 1) + " | coluna: " + (c + 1)));
            if(isNaN(matriz[l][c])) {
                alert("Número inválido! Por favor, digite um número válido.");
            }
        } while (isNaN(matriz[l][c]));
    }
}

    // Contas e impressão de diagonais
    document.write("Valores da diagonal 1:");
    for (l = 0; l < linha; l++) {
        let diagonal=0;
        for (c = 0; c < coluna; c++) {
            if(l==c) {
                diagonal = matriz[l][c]
                document.write(" | " +diagonal+ " | ");
            }
        }
    }

    document.write("<br>Valores da diagonal 2:");
    for (l = 0; l < linha; l++) {
        for (c = 0; c < coluna; c++) {
            if(l+c == 3) {
                diagonal = matriz[l][c]
                document.write(" | " +diagonal+ " | ");
            }
        }
    }

      // Impressão dos dados da matriz
      document.write("<br><br>Matriz:<br>");
      for(c=0; c<coluna;c++) {
        for(l=0; l< linha; l++) {
            document.write(matriz[c][l]+"&nbsp&nbsp")
        }
            document.write("<br>");
    }
    return false;

}