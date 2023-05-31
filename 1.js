<!DOCTYPE html>
<html lang="pt-br">

<head>
    <title>Números Pares</title>
</head>

<body>
    <h1>Exibir números pares e calcular a soma</h1>
    <p>Digite um valor: <input type="number" id="valor" min="1"></p>
    <button onclick="exibirParesESoma()">Mostrar</button>
    <div id="resultado"></div>

    <script>
        function exibirParesESoma() {
            let valor = parseInt(document.getElementById('valor').value);
            let pares = [];
            let soma = 0;

            for (let i = 1; i <= valor; i++) {
                if (i % 2 === 0) {
                    pares.push(i);
                    soma += i;
                }
            }

            document.getElementById('resultado').innerHTML = `
                <p>Números pares: ${pares.join(', ')}</p>
                <p>Soma total: ${soma}</p>
            `;
        }
    </script>
</body>

</html>
