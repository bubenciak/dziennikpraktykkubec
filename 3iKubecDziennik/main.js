const form = document.querySelector("form");
const display = document.getElementById("display");
const btn = document.getElementById("btn").querySelector("button");

btn.addEventListener("click", function () {
  const imie = document.getElementById("imie").value;
  const nazwisko = document.getElementById("nazwisko").value;
  const klasa = document.getElementById("klasa").value;
  const rok = document.getElementById("rok").value;
  const firma = document.getElementById("firma").value;
  const start = document.getElementById("start").value;
  const stop = document.getElementById("stop").value;

  display.innerHTML = `
    <h1>Dane ucznia</h1>
    Imię i nazwisko: ${imie} ${nazwisko}
    Klasa: ${klasa}, rok szkolny: ${rok}
    Odbytej w: ${firma}
    W terminie od: ${start} do ${stop}
  `;

  form.reset();
});
