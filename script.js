async function convertCurrency() {

  const amount = document.getElementById("amount").value;
  const from = document.getElementById("from").value;
  const to = document.getElementById("to").value;

  const resultBox = document.getElementById("result");

  if (amount === "" || amount <= 0) {

    resultBox.innerText = "Enter amount";
    return;
  }

  resultBox.innerText = "Loading...";

  try {

    // Новый API
    const response = await fetch(
      `https://open.er-api.com/v6/latest/${from}`
    );

    const data = await response.json();

    // Получаем курс
    const rate = data.rates[to];

    // Считаем
    const result = amount * rate;

    resultBox.innerText =
      `${amount} ${from} = ${result.toFixed(2)} ${to}`;

  } catch (error) {

    console.error(error);

    resultBox.innerText =
      "Error converting";
  }
}