/*O síndico do prédio “Balança mais não cai” solicitou uma solução que armazene em 
uma matriz a renda de cada família moradora de um edifício, calculando a média e o 
total de renda do mesmo. O prédio possui 6 andares e quatro apartamentos por 
andar.*/

function validaProc() {

    let matriz=[];
    let l, c;
    let coluna=6;
    let linha=4;
    let rendaTotal=0;
    let media=0;
    let contador=0;

    // Alerta anti-poluição visual
    alert("Informe a renda da familía dos apartamentos a seguir");

    // Alimentando a matriz
    for(c=0; c<coluna;c++) {
            matriz[c]=[];
        for(l=0; l< linha; l++) {
            do{
            matriz[c][l] = parseFloat(prompt("Apart: " +(l+1)+ " | andar: " +(c+1)).replace(",", "."));
                if(matriz[c][l] == 0 || isNaN(matriz[c][l])) {
                    alert("Número inválido! Por favor, digite um  número válido.");
            }
            } while (matriz[c][l] == 0 || isNaN(matriz[c][l]));
            contador++;
            rendaTotal = rendaTotal + matriz[c][l];
            media = rendaTotal / contador;
        }
    }

    // Imprimeiro os dados da matriz
            document.write("Renda Total do prédio: R$" +rendaTotal.toFixed(2)+"<br>Média das rendas do prédio: R$"+media.toFixed(2)+"&nbsp&nbsp");
    return false;

}