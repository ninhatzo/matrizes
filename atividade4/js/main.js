function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=2;
    let linha=3;

    // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[]
        for(l=0; l< linha; l++) {
            matriz[c][l] = parseInt(prompt("Digite o valor da linha " +(l+1)+ " e coluna " +(c+1)));
        }
    }

    // Imprimeiro os dados da matriz
    for(c=0; c<coluna;c++) {
        for(l=0; l< linha; l++) {
            document.write(matriz[c][l]+"&nbsp&nbsp")
        }
            document.write("<br>");
    }
    return false;

}