/*O professor “Ludovico Volpato” necessita de uma solução em que dada uma matriz 
de 4x5 elementos, fazer um algoritmo para calcular a soma de cada linha e a soma 
de todos os elementos.*/

function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=5;
    let linha=4;
    let soma=0;

 // Alimentando a matriz
 for(l = 0; l < linha; l++) {
    matriz[l] = [];
    for(c = 0; c < coluna; c++) {
        do {
            matriz[l][c] = parseInt(prompt("Informe o número da linha: " + (l + 1) + " | coluna: " + (c + 1)));
            if(matriz[l][c] === 0 || isNaN(matriz[l][c])) {
                alert("Número inválido! Por favor, digite um número válido.");
            }
        } while (matriz[l][c] === 0 || isNaN(matriz[l][c]));
    }
}

    // Contas e impressão dos dados da matriz
    for (l = 0; l < linha; l++) {
        let somaLinha = 0;
        for (c = 0; c < coluna; c++) {
            somaLinha += matriz[l][c];
            soma += matriz[l][c];
        }
        document.write("Soma da linha " + (l + 1) + ": " + somaLinha + "<br>");
    }
    
    document.write("<br>Soma de todos os elementos: " + soma + "<br>");
    return false;

}