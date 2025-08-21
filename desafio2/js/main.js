/*A empresa “Só soma Ltda.” necessita de uma solução que leia uma matriz 4x3 de 
números reais e mostre a soma de seus elementos.*/

function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=4;
    let linha=3;
    let soma=0;

 // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[];
        for(l=0; l< linha; l++) {
            do{
            matriz[c][l] = parseFloat(prompt("Informe o número da linha: " +(l+1)+ " | coluna: " +(c+1)).replace(",", "."));
                if(matriz[c][l] == 0 || isNaN(matriz[c][l])) {
                    alert("Número inválido! Por favor, digite um  número válido.");
            }
            } while (matriz[c][l] == 0 || isNaN(matriz[c][l]));
        soma += matriz[c][l]
        }
    }

    // Imprimeiro os dados da matriz
            document.write("Soma Total: " +soma.toFixed(2)+"&nbsp&nbsp");
    return false;

}