/*No Supermercado Alegria, existe um controle em relação ao valor das compras dos
clientes nos 03 últimos meses, como mostra a tabela a seguir: (Vide atividade)
Faça um programa que peça os nomes dos 3 clientes e os valores das compras
feitas por eles nos 03 últimos meses e calcule:
• A quantidade de compras;
• A média das compras, considerando essa quantidade.
Após os cálculos serem efetuados, você deve exibir o menu a seguir ao usuário:
• Ver compras de um cliente (permitir que o dono do supermercado consulte os
valores das compras dos 3 meses, da média das compras e quantidade de compras
de um cliente qualquer, consultando pelo seu nome);
• Ver todas as compras de todos os clientes (mostrar a tabela inteira com todos os
valores).
Obs.: Quando o cliente não tiver comprado naquele mês, deve ser informado
0 no valor da compra (equivale ao “R$ - “ da tabela). Guarde os nomes dos
clientes em um vetor. Os valores da tabela são exemplos, o programa poderá
receber quaisquer nomes de clientes e valores de compras.*/

function validaProc() {

    let clientes=[];
    let compras=[];
    let i, l, c, opcao, nomeOpcao;
    let coluna=3;
    let linha=3;
    let totalCompras = 0;
    let qtdCompras = 0;

    // Recolhendo o nome dos clientes
    for (i = 0; i < 3; i++) {
        do {
            clientes[i] = prompt("Informe o nome do " + (i + 1) + "º cliente:");
            
            // Verifica se o valor é nulo, vazio ou apenas espaços
            if (clientes[i] === null || clientes[i].trim() === "") {
                alert("Digite alguma informação válida!");
            }
        } while (clientes[i] === null || clientes[i].trim() === "");
    }

    // Recolhendo os valores das compras
    for (l=0;l<linha;l++) {
        compras[l] = [];
            for (c=0;c<coluna;c++) {
                do {
                compras[l][c] = parseFloat(prompt("Informe o valor das compras do " +(c+1)+ "º mês do " +(l+1)+ "º cliente").replace(",", "."));
                if (isNaN(compras[l][c])) {
                    alert("Digite um valor numérico válido!");
                }
                } while (isNaN(compras[l][c]));
            }
    }

    // Menu de opções
    do {
        opcao = parseInt(prompt("Digite o número refente a opção que deseja visualizar:\n 1- Ver compras de um cliente especifico \n 2- Ver todas as compras de todos os clientes"));
        if (opcao !== 1 && opcao !== 2) {
            alert("Opção inválida, digite uma opção válida!");
        }
    }while (opcao !== 1 && opcao !== 2);

    if (opcao == 1) { // Opção 1
        do {
            nomeOpcao = prompt("Digite o nome do cliente que deseja consultar");
            if (!clientes.includes(nomeOpcao)) {
                alert("Nome incorreto, digite exatamente o nome do cliente e corretamente!");
            }
        } while (!clientes.includes(nomeOpcao));
        
        i = clientes.indexOf(nomeOpcao);
    
        for (c = 0; c < coluna; c++) {
            totalCompras += compras[i][c];
            if (compras[i][c] > 0) { 
                qtdCompras++;
            }
        }
    
        let mediaCompras = (qtdCompras > 0) ? (totalCompras / qtdCompras).toFixed(2) : 0;
    
        document.write("Nome do cliente: " + clientes[i] + "<br>");
    
        for (c = 0; c < coluna; c++) {
            document.write("Compra " + (c + 1) + "º mês: R$ " + compras[i][c].toFixed(2) + "<br>");
        }
        document.write("Quantidade de compras: " + qtdCompras + "<br>");
        document.write("Média das compras: R$ " + mediaCompras + "<br>");
    } else if (opcao == 2) { // Opção 2
            for (i = 0; i < 3; i++) {
                let totalCompras = 0;
                let qtdCompras = 0;
                for (c = 0; c < coluna; c++) {
                    totalCompras += compras[i][c];
                    if (compras[i][c] > 0) qtdCompras++;
                }
                let mediaCompras = (qtdCompras > 0) ? (totalCompras / qtdCompras).toFixed(2) : 0;
            
                document.write("Nome do cliente: " + clientes[i] + "<br>");
                for (c = 0; c < coluna; c++) {
                    document.write("Compra " + (c + 1) + "º mês: R$ " + compras[i][c].toFixed(2) + "<br>");
                }
                document.write("Quantidade de compras: " + qtdCompras + "<br>");
                document.write("Média das compras: R$ " + mediaCompras + "<br><br>");
            }
        }
        return false;
}