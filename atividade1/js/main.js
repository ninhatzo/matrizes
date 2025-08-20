function validaProc() {

    let matriz=[], resultado=[];
    let linhas=3;
    let colunas=3;
    let num;

    // Alimentando a matriz
    for(i=0; i<linhas;i++) {
            matriz[i]=[]
        for(c=0; c< colunas; c++) {
            matriz[i][c] = parseInt(prompt("Digite o valor da linha " +(i+1)+ " e coluna " +(c+1)));
        }
    }

    // Recolhendo o número a ser multiplicado
    num = parseInt(prompt("Digite um número"));

    // Conta e imprimeiro os dados da matriz
    for(i=0; i<linhas;i++) {
        resultado[i]=[]
        for(c=0; c< colunas; c++) {
            resultado[i][c] = (matriz[i][c] * num)
            document.write(resultado[i][c]+"&nbsp&nbsp")
        }
            document.write("<br>");
    }
    return false;

}