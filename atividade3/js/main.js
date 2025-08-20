//Crie uma matriz (2x2) onde o valor de cada elemento dentro da matriz é a soma dos índices da sua posição

function validaProc() {

    let matriz=[];
    let i, c;
    let linhas=2;
    let colunas=2;

    // Alimentando a matriz
    for(i=0; i<linhas;i++) {
            matriz[i]=[];
        for(c=0; c< colunas; c++) {
            matriz[i][c] = (i+c)
        }
    }

    // Imprimindo a matriz
    for(i=0; i<linhas;i++) {
        for(c=0; c< colunas; c++) {
            document.write(matriz[i][c]);
    }
    document.write("<br>")
}
    return false;

}