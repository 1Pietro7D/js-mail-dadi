console.log("hello world");

// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte? No
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"

// Clicco il pulsante in html per generare il lancio
document
  .getElementById("my-button-dice")
  .addEventListener("click", function () {
    // log
    console.log("Good, let's go");
    // Creo delle costanti che cenerano un numero random da 1 a 6 dentro l'evento

    const computer = Math.floor(Math.random() * 6) + 1;
    const user = Math.floor(Math.random() * 6) + 1;
    // Inizio codice
    if (user > computer) {
      alert("HAI VINTO");
    } else if (user < computer) {
      alert("HAI PERSO");
    } else {
      alert("PAREGGIO");
    }
    // Fine codice
    console.log("html working progress");
  });
