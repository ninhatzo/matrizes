//Crie uma matriz (2x2) onde o valor de cada elemento dentro da matriz é a soma dos índices da sua posição

function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=2;
    let linha=2;

    // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[];
        for(l=0; l< linha; l++) {
            matriz[c][l] = (c+l)
        }
    }

    // Imprimindo a matriz
    for(c=0; c<coluna;c++) {
        for(l=0; l< linha; l++) {
            document.write(matriz[c][l]);
    }
    document.write("<br>")
}
    return false;

}