<!DOCTYPE html>
<html lang="pt-br">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <html>

  <head>
    <title>Conversor de Temperatura</title>
    <script>
      function converter() {
        var temperatura = parseFloat(document.getElementById("temperatura").value);
        var resultado = document.getElementById("resultado");

        var opcao = document.getElementById("opcao").value;
        var temperaturaConvertida;

        if (opcao === "fahrenheit") {
          temperaturaConvertida = temperatura * 1.8 + 32;
          resultado.innerHTML = temperatura + " °C é igual a " + temperaturaConvertida + " °F";
        } else if (opcao === "celsius") {
          temperaturaConvertida = (temperatura - 32) / 1.8;
          resultado.innerHTML = temperatura + " °F é igual a " + temperaturaConvertida + " °C";
        }
      }
    </script>
  </head>

<body>
  <h1>Conversor de Temperatura</h1>

  <label for="temperatura">Temperatura:</label>
  <input type="number" id="temperatura">

  <label for="opcao">Converter para:</label>
  <select id="opcao">
    <option value="fahrenheit">Fahrenheit</option>
    <option value="celsius">Celsius</option>
  </select>

  <button onclick="converter()">Converter</button>

  <p id="resultado"></p>
</body>

</html>
