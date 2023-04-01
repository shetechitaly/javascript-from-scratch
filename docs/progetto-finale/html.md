---
sidebar_position: 2
---

# HTML

Argomenti: Tag HTML e Attributi 

## Intro

HTML, acronimo di **HyperText Markup Language**, è il linguaggio di markup standard utilizzato per la creazione di pagine web. È costituito da una serie di tag, o elementi, che vengono utilizzati per definire la struttura e il contenuto di una pagina web.

> [Scopri di più](https://www.w3schools.com/html/html_intro.asp)

## Tag `<html>`

Il tag `<html>` è il tag principale di ogni pagina web. Definisce l'inizio e la fine del documento HTML e contiene tutti gli altri tag. 

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Titolo della pagina</title>
  </head>
  <body>
    Contenuto della pagina
  </body>
</html>
```

## Tag `<head>`

Il tag `<head>` viene utilizzato per definire le informazioni di intestazione di una pagina web, come il titolo della pagina, la codifica dei caratteri e i collegamenti a fogli di stile CSS e script JavaScript. 

```html
<head>
  <title>Titolo della pagina</title>
  <meta charset="UTF-8">
  <link rel="stylesheet" href="style.css">
  <script src="script.js"></script>
</head>
```

## Tag `<meta>`

Il tag `<meta>` viene utilizzato per definire i metadati di una pagina web, ovvero informazioni sulla pagina che non vengono visualizzate direttamente sul browser, ma che possono essere utilizzate dai motori di ricerca e da altri strumenti per analizzare la pagina. 

```html
<meta name="description" content="Breve descrizione della pagina">
<meta name="keywords" content="Parole chiave, separare con la virgola">
<meta name="author" content="Nome dell'autore">
```

## Tag `<link>`

Il tag `<link>` viene utilizzato per collegare una pagina web a un file esterno, come un foglio di stile CSS o un'icona.

```html
<link rel="stylesheet" href="style.css">
<link rel="icon" href="favicon.ico">
```

## Tag `<script>`

Il tag `<script>` viene utilizzato per includere script JavaScript all'interno di una pagina web. 

```html
<script src="script.js"></script>
```

## Tag `<body>`

Il tag `<body>` viene utilizzato per definire il contenuto principale di una pagina web, ovvero tutto ciò che verrà visualizzato sul browser.

```html
<body>
  Contenuto della pagina
</body>
```

## Tag `<div>`

Il tag `<div>` viene utilizzato per creare un contenitore generico all'interno del quale inserire altri elementi HTML. Viene utilizzato principalmente per raggruppare elementi e applicare loro stili CSS comuni.

```html
<div>
  Contenuto del div
</div>
```

## Tag `<section>`

Il tag `<section>` viene utilizzato per dividere il contenuto di una pagina web in sezioni logiche. È spesso utilizzato per definire l'intestazione, il contenuto principale e il piè di pagina di una pagina web. 

```html
<section>
  Contenuto della sezione
</section>
```

## Tag `<button>`

Il tag `<button>` per creare un pulsante cliccabile all'interno di una pagina HTML. I pulsanti sono spesso utilizzati per consentire all'utente di interagire con il contenuto della pagina.

```html
<button>Click me!</button>
```

## Attributi HTML

Gli attributi HTML forniscono ulteriori informazioni sugli elementi HTML e possono essere utilizzati per personalizzare il comportamento e l'aspetto di tali elementi. Alcuni esempi di attributi HTML comuni includono:

- l'attributo **href**, utilizzato per specificare un URL in un link (ad esempio: `<a href="https://www.google.com">Google</a>`);
- l'attributo **src**, utilizzato per specificare la posizione di un'immagine o di un altro file multimediale (ad esempio: `<img src="immagine.jpg">`);
- l'attributo **alt**, utilizzato per fornire una descrizione testuale di un'immagine nel caso in cui questa non sia visualizzabile (ad esempio: `<img src="immagine.jpg" alt="Descrizione dell'immagine">`);
- l'attributo **title**, utilizzato per fornire un testo esplicativo per un elemento HTML (ad esempio: `<a href="https://www.google.com" title="Vai a Google">Google</a>`).

## Classi HTML

Le classi HTML sono utilizzate per identificare un gruppo di elementi HTML correlati, in modo da poter applicare stili CSS e funzionalità di scripting a tutti gli elementi della classe contemporaneamente. Le classi vengono specificate utilizzando l'attributo class. Ad esempio:

```html
<div class="contenitore">
  <h1 class="titolo">Titolo del sito web</h1>
  <p class="testo">Questo è il testo del sito web.</p>
</div>
```

## ID HTML

Gli ID HTML sono simili alle classi, ma vengono utilizzati per identificare un singolo elemento HTML specifico. Gli ID vengono specificati utilizzando l'attributo id. Ad esempio:

```html
<div id="contenitore">
  <h1 id="titolo">Titolo del sito web</h1>
  <p id="testo">Questo è il testo del sito web.</p>
</div>
```

## Progetto

Per svolgere il progetto finale non è richiesto che tu sappia l'HTML quindi puoi copiare questo codice ed incollarlo in un file `index.html` all'interno di vscode.

```html
<html>
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="https://fonts.googleapis.com/css?family=Montserrat" rel="stylesheet">
  <link href="style.css" rel="stylesheet">
  <title>Calculator</title>
</head>

<body>
  <div class="wrapper">
    <section class="screen">
      0
    </section>

    <section class="calc-buttons">
      <div class="calc-button-row">
        <button class="calc-button double">
          C
        </button>
        <button class="calc-button">
          &larr;
        </button>
        <button class="calc-button">
          &divide;
        </button>
      </div>

      <div class="calc-button-row">
        <button class="calc-button">
          7
        </button>
        <button class="calc-button">
          8
        </button>
        <button class="calc-button">
          9
        </button>
        <button class="calc-button">
          &times;
        </button>
      </div>

      <div class="calc-button-row">
        <button class="calc-button">
          4
        </button>
        <button class="calc-button">
          5
        </button>
        <button class="calc-button">
          6
        </button>
        <button class="calc-button">
          -
        </button>
      </div>

      <div class="calc-button-row">
        <button class="calc-button">
          1
        </button>
        <button class="calc-button">
          2
        </button>
        <button class="calc-button">
          3
        </button>
        <button class="calc-button">
          &plus;
        </button>
      </div>

      <div class="calc-button-row">
        <button class="calc-button triple">
          0
        </button>
        <button class="calc-button triple">
          &equals;
        </button>
      </div>

    </section>

  </div>

  <script src="app.js"></script>
</body>
</html>
```

**Ben fatto! 🎉** 

Il prossimo step sarà quello di dare uno stile alla nostra calcolatrice.