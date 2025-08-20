function validaProc() {

    let matriz=[], resultado=[];
    let coluna=3;
    let linha=3;
    let num;

    // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[]
        for(l=0; l< linha; l++) {
            matriz[c][l] = parseInt(prompt("Digite o valor da linha " +(l+1)+ " e coluna " +(c+1)));
        }
    }

    // Recolhendo o número a ser multiplicado
    num = parseInt(prompt("Digite um número"));

    // Conta e imprimeiro os dados da matriz
    for(c=0; c<coluna;c++) {
        resultado[c]=[]
        for(l=0; l< linha; l++) {
            resultado[c][l] = (matriz[c][l] * num)
            document.write(resultado[c][l]+"&nbsp&nbsp")
        }
            document.write("<br>");
    }
    return false;

}