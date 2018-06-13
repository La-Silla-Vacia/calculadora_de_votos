Source files for calculadora_de_votos
=====

## Preview

[You can find a preview of 'calculadora_de_votos' here](https://la-silla-vacia.github.io/calculadora_de_votos)

![](https://raw.githubusercontent.com/la-silla-vacia/calculadora_de_votos/master/dev/screenshot.png)

## Data
Please link to any external data used, as well as scripts for cleaning and analyzing that data, all of which should live in the `/data` directory.

## Installation
First, make sure you have [Node.js](https://nodejs.org/) and [Yarn](https://yarnpkg.com/en/) installed on your operating system.

After cloning the repository run inside the directory:
```
yarn install
```

To start watching the project and opening in the browser run:
```
yarn start
```

To deploy to GitHub Pages run:
```
yarn run deploy
```

---

## Embeding on webpage
To embed on a webpage use this code:
```html
<!-- START OF OUR INTERACTIVE -->
<div class="lsv-interactive" id="calculadora_de_votos">
<img src="https://raw.githubusercontent.com/la-silla-vacia/lsv-interactive/master/misc/lsvi-loading.gif"
     alt="Interactive is loading" style="width:100%;max-width: 320px;margin: 4em auto;display: block;">
</div>
<link type="text/css" rel="stylesheet" href="https://la-silla-vacia.github.io/calculadora_de_votos/styles.css" />
<script defer type="text/javascript" src="https://la-silla-vacia.github.io/calculadora_de_votos/script.js"></script>
<!-- END OF OUR INTERACTIE -->
```
