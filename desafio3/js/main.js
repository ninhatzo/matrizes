/*A empresa “Multiplica para ganhar Ltda.” solicitou uma solução que leia uma matriz 
5 x 5 de números inteiros e gere outra matriz, de mesmo tamanho em que cada 
elemento seja o dobro de seu respectivo da matriz original. Mostrar a matriz original */

function validaProc() {

    let matriz=[],dobro=[];
    let l, c;
    let coluna=5;
    let linha=5;

 // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[];
        for(l=0; l< linha; l++) {
            do{
            matriz[c][l] = parseInt(prompt("Informe o número da linha: " +(l+1)+ " | coluna: " +(c+1)));
                if(isNaN(matriz[c][l])) {
                    alert("Número inválido! Por favor, digite um  número válido.");
            }
            } while (isNaN(matriz[c][l]));
        }
    }

    // Conta e imprimeiro os dados da matriz
    for(c=0; c<coluna;c++) {
        dobro[c]=[];
        for(l=0; l< linha; l++) {
            dobro[c][l] = (matriz[c][l] + matriz[c][l]);
            document.write("| " +dobro[c][l]+" |"+"&nbsp&nbsp");
        }
        document.write("<br>");
    }
    return false;

}