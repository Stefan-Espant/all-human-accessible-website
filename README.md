# Handleiding voor partners Vervoerregio Amsterdam
<!-- Geef je project een titel en schrijf in één zin wat het is -->

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
De user story die ik koos luidde alsvolgt:
> Als organisatie wil ik een overzicht van toegankelijkheidsverbeteringen kunnen bekijken, zodat ik een gevoel kan krijgen wat er moet gebeuren om mijn 
website/app toegankelijker te maken op het terrein van waarneembaarheid, robuustheid, begrijpelijkheid en bedienbaarheid

<img width="100%" alt="Schermafbeelding 2022-11-08 om 11 29 56" src="https://user-images.githubusercontent.com/89298385/200541607-26df96eb-b8a8-4a4a-bfce-cc1acccb91ba.png">
<img width="100%" alt="Schermafbeelding 2022-11-08 om 11 30 11" src="https://user-images.githubusercontent.com/89298385/200541618-da7f8558-3f81-4ea6-993a-ce14b042dd16.png">

De sitemap begint op de landingspagina met een minimalistische opmaak. Het bestaat uit 3 onderdelen: een header, een main die is opgesplitst in 2 secties (de titel van het product en de aside met 4 hoofdcatergorieën).



https://stefan-espant.github.io/all-human-accessible-website/ 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met Javascript gedaan en hoe? Misschien heb je een framwork of library gebruikt? -->
De sitemap is opgebouwd uit de 3 basistalen: HTML, CSS & Javascript.

### html
De html bestaat overal uit dezelfde indeling: een head en een body.

#### head
In de head worden 4 css bestanden in geladen die voor de style zorgen. Ook word er een favicon geladen voor in de tabbladen die snel weergeven dat het om de Toolgankelijk website gaat.

Dit zijn de linkjes naar de CSS:<br>
`<link rel="stylesheet" href="../styles/style.css" />`<br>
`<link rel="stylesheet" href="../styles/mobile.css" />`<br>
`<link rel="stylesheet" href="../styles/tablet.css" />`<br>
`<link rel="stylesheet" href="../styles/desktop.css" />`<br>

Dit is de link die de favicon projecteert:<br>
`<link rel="icon" type="image/png" href="./assets/va-favicon.png"/>`

#### body
De body bestaat overal uit dezelfde indeling: een header, een aside en een main element.

#### header
De header bevat de volgende 2 onderdelen: een logo en een balk die word verbonden door een vloeiende golf.<br> 
`<img id="logo" src="../assets/logo.png" alt="logo Vervoerregio Amsterdam"/>`<br>
`<div id="after-curve"></div>`

#### aside
De aside bestaat uit 4 knoppen die doorlinken naar de hoofdcatergorieën:<br>
`<a href="waarneembaar.html" class="categorie">`

#### main
In de main wordt alle content getoond en getoggled wanneer de gebruiker op een knop klikt.


### css
Alle pagina's hebben een `scroll-behavior: smooth;` om vloeiend te scrollen.<br>
Ook heb ik alle klikbare elementen een `transition: 0.8s` gegeven om vloeiend en aangenaam van state te veranderen. Harde animaties wordt over het algemeen als grof beschouwd.

### javascript
Javascript heb ik toegepast op de knoppen die de content laten weergeven.


## Bronnen

Om het product te bouwen heb ik de volgende websites gebruikt voor antwoorden, voorbeelden en kennis.<br>
https://css-tricks.com<br>
https://developer.mozilla.org/en-US/<br>
https://stackoverflow.com<br>
https://whaa.dev

## Licentie

![GNU GPL V3](https://www.gnu.org/graphics/gplv3-127x51.png)

This work is licensed under [GNU GPLv3](./LICENSE).
