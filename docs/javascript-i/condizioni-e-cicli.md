---
sidebar_position: 3
---

# Condizioni e cicli

Argomenti: if, else, switch, while, do while e for

## Intro

Le istruzioni di controllo del flusso in JavaScript sono essenziali per gestire la logica di un programma. Le condizioni e i cicli sono tra le istruzioni più importanti, poiché consentono di eseguire un blocco di codice solo se una condizione è verificata o di ripetere un blocco di codice per un certo numero di volte.

## if else 

Le istruzioni if e else sono utilizzate per controllare la logica del programma in base a una determinata condizione. Se la condizione è vera, il blocco di codice specificato nell'istruzione if viene eseguito, altrimenti viene eseguito il blocco di codice specificato nell'istruzione else. Ad esempio:

```jsx
let eta = 18;

if (eta >= 18) {
  console.log("Sei maggiorenne.");
} else {
  console.log("Sei minorenne.");
}

```

In questo esempio, abbiamo utilizzato l'istruzione if per verificare se l'età è maggiore o uguale a 18. Se la condizione è vera, viene eseguito il primo blocco di codice, altrimenti viene eseguito il blocco di codice nell'istruzione else.

## switch 

L'istruzione switch viene utilizzata per selezionare tra più alternative in base al valore di una variabile. Questa istruzione può essere utile quando si desidera controllare una variabile con un gran numero di possibili valori. Ad esempio:

```jsx
let giorno = "lun";

switch (giorno) {
  case "lun":
    console.log("Oggi è lunedì.");
    break;
  case "mar":
    console.log("Oggi è martedì.");
    break;
  case "mer":
    console.log("Oggi è mercoledì.");
    break;
  default:
    console.log("Oggi è un altro giorno.");
    break;
}

```

In questo esempio, abbiamo utilizzato l'istruzione switch per selezionare la stringa corrispondente al giorno della settimana. Se il valore della variabile "giorno" corrisponde a uno dei casi specificati, viene eseguito il blocco di codice corrispondente.

## while

Il ciclo while esegue il blocco di codice finché la condizione specificata è verificata. 

La sintassi del ciclo while è la seguente:

```jsx
while (condizione) {
  // blocco di codice
}
```

Ecco un esempio di ciclo while che stampa i numeri da 0 a 4:

```jsx
let i = 0;

while (i < 5) {
  console.log(i);
  i++;
}
```

## do while

Il ciclo do while è simile al ciclo while, ma esegue il blocco di codice almeno una volta, anche se la condizione non è soddisfatta. 

La sintassi del ciclo do while è la seguente:

```jsx
do {
  // blocco di codice
} while (condizione);
```

Ecco un esempio di ciclo do while che stampa i numeri da 0 a 4:

```jsx
let i = 0;

do {
  console.log(i);
  i++;
} while (i < 5);
```


## for 

Il ciclo for è utilizzato per eseguire un blocco di codice un numero di volte predefinito. 

La sintassi del ciclo for è la seguente:

```jsx
for (inizializzazione; condizione; incremento) {
  // blocco di codice
}
```

Ecco un esempio di ciclo for che stampa i numeri da 0 a 4:

```jsx
for (let i = 0; i < 5; i++) {
  console.log(i);
}
```

In questo esempio, la variabile "i" viene inizializzata con il valore 0, la condizione del ciclo è che "i" sia minore di 5, e l'incremento è di 1 ad ogni iterazione del ciclo. All'interno del blocco di codice viene eseguita l'istruzione "console.log(i)" che stampa il valore di "i" in ogni iterazione del ciclo. Il ciclo viene eseguito 5 volte, e stampa i numeri da 0 a 4.



## Esercizi

### if else

In RunJS dichiara una variabile intera, poi controlla se il numero è pari o dispari e stampa il risultato.

### while

In vscode scrivi un programma che chiede all'utente di inserire una password, e continua a richiederla finché l'utente non inserisce la password corretta ("password123").

:::tip 

Per poter permettere l'inserimento all'utente della password puoi utilizzare questo metodo: password = `prompt("Inserisci la password:");`

:::

### do while

In vscode scrivi un programma che richiede all'utente di inserire un numero intero maggiore di zero, e continua a richiederlo finché l'utente non lo inserisce correttamente.

### for 

In RunJS o vscode scrivi un programma che stampa tutti i numeri pari da 0 a 100.


### switch

In vscode crivi un programma che chiede all'utente di inserire il giorno della settimana (con le prime tre lettere del nome: lun, mar, mer, ecc.), e stampa un messaggio diverso in base al giorno inserito.

**Congratulazioni! 🎉**

Ora ti aspetta la pausa pranzo. Buon appetito! 🍴