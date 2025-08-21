function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=2;
    let linha=2;
    let num;
    let soma=0;

    // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[]
        for(l=0; l< linha; l++) {
            matriz[c][l] = parseInt(prompt("Digite o valor da linha " +l+ " e coluna " +c));
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
    for (l=0; l<linha;l++) {
        if (l == num) {
            for (c=0; c< coluna; c++) {
                    soma += matriz[l][c];
            }
            document.write("Soma da linha " + num + ": " + soma + "<br>");
        }
        document.write("<br>")
    }
    return false;

}