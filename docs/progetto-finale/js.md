---
sidebar_position: 4
---

# JavaScript

## Crea un file `app.js` 

All'interno di vscode crea un file JavaScript chiamato `app.js`

## Dichiarazione delle variabili

Dichiara tre variabili utilizzando la parola chiave `let`.
-   `runningTotal` per memorizzare il totale attuale delle operazioni.
-   `buffer` per memorizzare l'input dell'utente.
-   `previousOperator` per memorizzare l'operatore precedente.

## Selezionare l'elemento dello schermo

Usa il metodo `querySelector` per selezionare l'elemento dello schermo e assegnarlo alla variabile `screen`.

## Gestire il click del pulsante

-   Definisci la funzione `buttonClick` per gestire il click dei pulsanti.
-   La funzione riceve come argomento il valore del pulsante cliccato.
-   Utilizza la funzione `isNaN` per controllare se il valore è un numero o un simbolo.
-   Se il valore è un simbolo, esegui la funzione `handleSymbol`.
-   Se il valore è un numero, esegui la funzione `handleNumber`.
-   Infine, aggiorna il contenuto dello schermo con il valore di `buffer`.


## Gestire i simboli

-   Definisci la funzione `handleSymbol` per gestire i simboli.
-   La funzione riceve come argomento il simbolo cliccato.
-   Utilizza un costrutto `switch` per controllare quale simbolo è stato cliccato.
-   Se il simbolo è "C", reimposta il valore di `buffer`, `runningTotal` e `previousOperator`.
-   Se il simbolo è "=", calcola il risultato utilizzando la funzione `flushOperation`, reimposta il valore di `buffer`, `runningTotal` e `previousOperator`.
-   Se il simbolo è "←", rimuovi l'ultimo carattere da `buffer`.
-   Se il simbolo è un operatore matematico ("+", "-", "×", "÷"), esegui la funzione `handleMath`.

## Gestire i numeri

Aggiungi una nuova funzione chiamata `handleNumber`:


```jsx
function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}
```

La funzione accetta una stringa rappresentante il numero digitato dall'utente. In primo luogo, la funzione controlla se il buffer è uguale a 0. Se lo è, imposta il buffer con il valore del numero digitato. Altrimenti, concatena il numero digitato con il valore del buffer.

Aggiorna la funzione `buttonClick`:

```jsx
function buttonClick(value) {
  if (isNaN(value)) {
    handleSymbol(value);
  } else {
    handleNumber(value);
  }
  screen.innerText = buffer;
}
```

La funzione `buttonClick` controlla se il valore passato è un numero o un simbolo. Se è un numero, viene chiamata la funzione `handleNumber`. Altrimenti, viene chiamata la funzione `handleSymbol`. Infine, il valore del buffer viene visualizzato sullo schermo.

## Gestire le operazioni matematiche

Aggiungi una nuova funzione chiamata `flushOperation`:

```jsx
function flushOperation(intBuffer) {
  switch (previousOperator) {
    case "+":
      runningTotal += intBuffer;
      break;
    case "-":
      runningTotal -= intBuffer;
      break;
    case "×":
      runningTotal *= intBuffer;
      break;
    case "÷":
      runningTotal /= intBuffer;
      break;
  }
}
```

La funzione accetta un intero rappresentante il valore numerico nel buffer. La funzione esegue l'operazione matematica tra il valore nel buffer e il valore dell'operatore precedente, aggiornando il valore di `runningTotal`.

Aggiungi una nuova funzione chiamata `handleMath`:

```jsx
function handleMath(symbol) {
  if (buffer === "0") {
    // Non fare nulla
    return;
  }

  const intBuffer = parseInt(buffer);

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}
```

La funzione accetta un simbolo rappresentante l'operatore matematico digitato dall'utente. In primo luogo, controlla se il buffer è uguale a 0. Se lo è, non viene eseguita alcuna operazione. In caso contrario, la funzione converte il valore del buffer in un intero e controlla se `runningTotal` è uguale a 0. Se lo è, imposta il valore di `runningTotal` con il valore del buffer. Altrimenti, chiama la funzione `flushOperation` per eseguire l'operazione tra il valore nel buffer e il valore dell'operatore precedente.

Infine, la funzione imposta il valore dell'operatore precedente con il simbolo passato come argomento, e imposta il valore del buffer a 0.

**Congratulazioni! 🎉**

E' arrivato il momento di presentare il progetto al resto del gruppo! 