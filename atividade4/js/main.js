function validaProc() {

    let matriz=[];
    let linhas=2;
    let colunas=3;

    // Alimentando a matriz
    for(i=0; i<linhas;i++) {
            matriz[i]=[]
        for(c=0; c< colunas; c++) {
            matriz[i][c] = parseInt(prompt("Digite o valor da linha " +(i+1)+ " e coluna " +(c+1)));
        }
    }

    // Imprimeiro os dados da matriz
    for(i=0; i<linhas;i++) {
        for(c=0; c< colunas; c++) {
            document.write(matriz[i][c]+"&nbsp&nbsp")
        }
            document.write("<br>");
    }
    return false;

}