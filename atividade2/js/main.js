function validaProc() {

    let matriz=[];
    let i, c;
    let linhas=2;
    let colunas=2;
    let num;
    let soma=0;

    // Alimentando a matriz
    for(i=0; i<linhas;i++) {
            matriz[i]=[]
        for(c=0; c< colunas; c++) {
            matriz[i][c] = parseInt(prompt("Digite o valor da linha " +1+ " e coluna " +c));
        }
    }

    // Recolhendo a linha a ser multiplicada
    do {
        num = parseInt(prompt("Digite o número da linha a ser somada(0/1)"));
            if((num !== 0 && num !== 1) || isNaN(num)) {
                alert("Número inválido! Por favor, digite um  número válido.");
            }
    } while ((num !== 0 && num !== 1) || isNaN(num));

    // Conta e imprimeiro os dados da matriz
    for (i = 0; i < linhas; i++) {
        if (i == num) {
            for (c = 0; c < colunas; c++) {
                soma += matriz[i][c];
            }
            document.write("Soma da linha " + num + ": " + soma + "<br>");
        }
    }
    document.write("<br>")
    return false;

}