# Portfolio-Web-Advanced-Restaurant
Portfolio Web Advanced

Deze README biedt een overzicht van de functionaliteit van de Restaurant Ristorante website en beschrijft de verschillende geïmplementeerde JavaScript-functies, evenals de CSS die is gebruikt voor de styling.

## Inhoudsopgave
1. [Kenmerken](#kenmerken)
2. [JavaScript Codefragmenten](#javascript-codefragmenten)
3. [ChatGPT Logs](#chatgpt-logs)
3. [Development Documentatie Links](#development-documentatie-links)
3. [Gebruikte Afbeeldingen Links:](#gebruikte-afbeeldingen-links)

## Kenmerken
1. **Random Quote Feature**: Een promise-functie geïmplementeerd om willekeurige citaten op de console van de site weer te geven.

2. **Weerbericht Functionaliteit**: Een weerberichtfunctie toegevoegd aan de locatiepagina van het restaurant met OpenWeatherMap API, wat de gebruikerservaring verbetert.

3. **CSS Mobile-First Responsive Design**: CSS mobile-first responsive design toegepast voor een optimale weergave op verschillende apparaten, wat zorgt voor een consistente gebruikerservaring op mobiele apparaten en desktops.

4. **Gallery Display**: In de gallerijpagina van het restaurant een manuele diashow geïmplementeerd.

5. **Formulier Validatie**: Formulier validatie geïmplementeerd voor e-mailinvoerveld in de about-us pagina, wat de gebruikersinteractie en gegevensintegriteit verbetert.

6. **Interactieve Navigatie Google Maps**: Google Maps Navigatie API implementatie toegevoegd, waardoor de navigatie naar het restaurant gebruiksvriendelijker wordt.

7. **Parallax en Vervagingseffecten**: Visuele verbeteringen zoals parallax scrollen en vervagingseffecten geïntroduceerd voor een meeslepender ervaring.

8. **Introvideo Indexpagina**: Een introductievideo toegevoegd aan de indexpagina, wat de bezoekers een overzicht geeft van de sfeer en het aanbod van het restaurant.


## JavaScript Codefragmenten

### 1. Elementen selecteren
Selecteren van elementen uit de DOM via ID en tagnaam.
```javascript
let ico = document.getElementById('hamburgermenu');
let nav = document.getElementsByTagName('nav')[0];
```

### 2. Elementen manipuleren
Veranderen van de display-stijl van een DOM-element.
```javascript
nav.style.display = 'block';
```

### 3. Event aan een element koppelen
De display-stijl van een navigatiemenu wisselen wanneer een element wordt aangeklikt.
```javascript
ico.addEventListener('click', () => {
    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
```

### 4. Formulier valideren
Valideren van de e-mailinvoer van een formulier en feedback geven aan de gebruiker.
```javascript
        button.addEventListener('click', validateForm)
        function validateForm() {
            console.log("validateForm clicked")
            let emailvalue = email.value;
            let namevalue = name.value;

            const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

            console.log(emailvalue)
            console.log(emailRegex.test(emailvalue))

            //template literals
            if (emailvalue == "") {
                email.style = "border: 0.25rem solid orange;";
                    alert(`An email adres is required. ${namevalue}.`);
            }
            else if (!emailRegex.test(emailvalue)) {
                email.style = "border: 0.25rem solid orange;";
                    alert(`The email adres must be a valid format ${namevalue}.`);
            }
          }
```

### 5. Gebruik van een constante
Gebruik van een constante om de ID van de body van de huidige pagina op te slaan.
```javascript
    const currentPage = document.getElementsByTagName('body')[0].id
```

### 6. Gebruik van template literals
Gebruik van template literals voor string interpolatie.
```javascript
                    alert(`An email adres is required. ${namevalue}.`);
```

### 7. Destructuring
Destructuring assignment om meerdere elementen uit de DOM te halen.
```javascript
        const [cnext, cprevious, gallerypic] = [
            document.getElementById('cnext'), 
            document.getElementById('cprevious'),
            document.getElementById('gallerypicture')
        ]
```

### 8. Spread & Rest operator
Gebruik van de spread operator om elementen te combineren in een array.
```javascript
const spreadOperatorTest = [cnext, cprevious, gallerypic, ...galleryUrls];
```

### 9. Iteratie over een array
Itereren over een array en elke URL naar de console loggen.
```javascript
        let i = 0
        //Iteratie over een array van urls voor de gallery
        function galleryControls(direction, ...nuttelozeArgumentenOpgevangenDoorRestOperator) {
            if (direction === "next") {
                console.log("next i before" + i)
                console.log(galleryUrls[i])

                if (i >= galleryUrls.length-1) {
                    i = 0;
                } else {
                    i++;
                }
                console.log("next i current" + i)

                gallerypic.style.backgroundImage = galleryUrls[i]
                gallerypic.style.transition = "0.25s"
            } else if (direction === "previous"){
                console.log("previous i before:" + i)
                console.log(galleryUrls[i])
                if (i <= 0) {
                    i = galleryUrls.length-1;
                } else {
                    i--;
                }
                console.log("next i current" + i)

                gallerypic.style.backgroundImage = galleryUrls[i]
                gallerypic.style.transition = "0.25s"
            }
            if (nuttelozeArgumentenOpgevangenDoorRestOperator != "") {
                //rest operator vangt extra argumenten op en logged ze in console
                console.log(nuttelozeArgumentenOpgevangenDoorRestOperator)
            }
        }
```

### 10. Arrow function
Gebruik van een arrow function in een event listener.
```javascript
ico.addEventListener('click', () => {
    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
```

### 11. Callback function
Toevoegen van een event listener met een callback functie.
```javascript
//de arrow function is technisch de callback functie in dit geval
        if (cnext) {
            cnext.addEventListener('click', () => {
                galleryControls("next")
            })
        }

        //de "callbackAlternatief" is de callback functie
        if(cprevious) {
            cprevious.addEventListener('click', callbackAlternatief)
        }

        function callbackAlternatief() {
            galleryControls("previous")
        }
```

### 12. Promise
Een willekeurige quote ophalen met een promise en deze resolven met een callback functie.
```javascript
    function fetchRandomQuote(functionNameCallBack) {
        return new Promise(function(resolve) {
            fetch("https://api.quotable.io/random")
            .then(function(reply) {
                return reply.json()
            })
            .then(function(fetchedReplyAsJson) {
                //console.log(fetchedReplyAsJson)
                let quote = fetchedReplyAsJson.content
                let quoteAuthor = fetchedReplyAsJson.author
                
                //data is ontvangen en afgewerkt, promise state op 
                resolve(quote + " - " + quoteAuthor)
            })
        }).then(function(quoteAndAuthor) {
            functionNameCallBack(quoteAndAuthor)
        })
    }
```

### 13. Consumer methods
Een voorbeeld van het toevoegen van een event listener om het navigatiemenu te wisselen.
```javascript
ico.addEventListener('click', () => {
    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
```

### 14. Async & Await
Weergegevens asynchroon ophalen en opslaan in local storage.
```javascript
async function fetchWeatherData() {
        //https://openweathermap.org/forecast5
        let fetchWeatherData = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=50.8413045&lon=4.3233332&appid=a6ed1c25557808a7b8f94d5bb5eac4a1&units=metric')
        let apiJson = await fetchWeatherData.json()
        let jsonString = JSON.stringify(apiJson);

        //JSON.stringify is nodig anders wordt LocalStorage.getItem log "[object Object]"
        localStorage.setItem("apiJson", jsonString)
        //console.log(apiJson)
        checkWeatherTimer()
    }
```

### 15. Zelf-uitvoerende functie
Gebruik van een Immediately Invoked Function Expression (IIFE).
```javascript
//self executing function als arrow function
(() => {
    // code...
})()
```

### 16. Fetch om data op te halen
Data ophalen van een API en de response loggen.
```javascript
    async function fetchWeatherData() {
        //https://openweathermap.org/forecast5
        let fetchWeatherData = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=50.8413045&lon=4.3233332&appid=a6ed1c25557808a7b8f94d5bb5eac4a1&units=metric')
        let apiJson = await fetchWeatherData.json()
        let jsonString = JSON.stringify(apiJson);

        //JSON.stringify is nodig anders wordt LocalStorage.getItem log "[object Object]"
        localStorage.setItem("apiJson", jsonString)
        //console.log(apiJson)
        checkWeatherTimer()
    }
```

### 17. JSON manipuleren en weergeven
Parsen en loggen van JSON-data opgeslagen in local storage.
```javascript
async function fetchWeatherData() {
        //https://openweathermap.org/forecast5
        let fetchWeatherData = await fetch('https://api.openweathermap.org/data/2.5/forecast?lat=50.8413045&lon=4.3233332&appid=a6ed1c25557808a7b8f94d5bb5eac4a1&units=metric')
        let apiJson = await fetchWeatherData.json()
        let jsonString = JSON.stringify(apiJson);

        //JSON.stringify is nodig anders wordt LocalStorage.getItem log "[object Object]"
        localStorage.setItem("apiJson", jsonString)
        //console.log(apiJson)
        checkWeatherTimer()
    }
```

### 18. Basis CSS Animatie
Definiëren van een basis CSS-animatie voor een stuitereffect.
```css
@keyframes bounce {
    0% {
        bottom: 2rem;
    }
    50% {
        bottom: 4rem;
    }
    100% {
        bottom: 2rem;
    }
  }
```

### 19. Gebruik van een flexbox of CSS grid
Gebruik van Flexbox voor lay-out in een navigatiebalk.
```css
header div {
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
```

### 20. Gebruik van LocalStorage
De huidige epoch tijd opslaan in local storage.
```javascript
localStorage.setItem("epochTime", epochTime)
```

## ChatGPT logs
chatgpt logs:
readme generation:
https://chatgpt.com/share/1e7f1adf-fdd6-4e7d-bf13-302c4498eaf6
https://chatgpt.com/share/3b3e1a6f-2cf9-4a60-ba45-bb1f1863bb17
https://chatgpt.com/share/233c9747-f8e8-4554-99ed-8b6c7b1d9231
https://chatgpt.com/share/db7ed74e-ea6b-4cb5-9260-82b9b35818f1
https://chatgpt.com/share/ce90565f-270b-4237-9d37-606dda10da7a

Best practice project structure:
https://chatgpt.com/share/fee4ba1e-681f-4b0d-b4c2-62cdd6621a75

Detached HEAD:
https://chatgpt.com/share/541eb81f-f679-402a-93d2-1433b1683497

git commando om alle commit texts in een file te zetten en links extraction:
https://chatgpt.com/share/611a1d13-834e-4d24-8d8a-7a39857129a9

Hulp bugfix button.addEventListener('click', validateForm()), hulp met alert() en style, en bugfix value detectie in email input:
https://chatgpt.com/share/4d0514cb-0016-4888-9552-2de60aa5a101

API hulp Google Maps iframe:
https://chatgpt.com/share/875bc340-f677-4407-8d21-d1ed5a0959bb

Hulp bugfix undefined voor JS document.getElementsByTagName('body'):
https://chatgpt.com/share/e857bdf9-b76b-4f59-839a-d36c8f8246e9

Algemene software design principes met JavaScript voorbeelden:
https://chatgpt.com/share/e3ae1b04-da5e-4382-a793-73581f5e05fe

Menu volgorde:
https://chatgpt.com/share/d2592906-f20c-4e85-bbd5-22b758a2f2ff

Dish Generation:
https://chatgpt.com/share/27f1e608-d0c7-401d-bfac-234a15a73161



## Development Documentatie Links:
1. https://www.w3schools.com/jsref/dom_obj_document.asp
2. https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
3. https://openweathermap.org/forecast5
4. https://stackoverflow.com/questions/61867571/how-to-access-json-data-in-javascript
5. https://graphicscove.com/why-does-localstorage-getitem-log-object-object#:~:text=When%20you%20try%20and%20retrieve,to%20local%20storage%20with%20JSON.
6. https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
7. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
8. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
9. https://www.w3schools.com/js/js_callback.asp
10. https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
11. https://www.w3resource.com/javascript/form/email-validation.php
12. https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript
13. https://developer.mozilla.org/en-US/docs/Web/CSS/resize
14. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/scale
15. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax
16. https://www.geeksforgeeks.org/destructuring-assignment-in-javascript/
17. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
18. https://www.w3schools.com/howto/howto_js_slideshow_gallery.asp
19. https://www.freeiconspng.com/img/1182#google_vignette
20. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/rotate
21. https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter
22. https://developer.mozilla.org/en-US/docs/Web/CSS/transform-function/translate
23. https://www.w3schools.com/howto/howto_css_image_text.asp
24. https://www.w3schools.com/html/html_favicon.asp
25. https://stackoverflow.com/questions/49907306/strange-gap-at-the-bottom-of-the-html-video-element-when-using-object-fit-cove
26. https://www.w3schools.com/css/css_positioning.asp
27. https://www.w3schools.com/css/css3_animations.asp
28. https://www.w3schools.com/css/css_rwd_mediaqueries.asp
29. https://stackoverflow.com/questions/807878/how-to-make-javascript-execute-after-page-load
30. https://www.w3schools.com/jsref/met_document_addeventlistener.asp
31. https://www.w3schools.com/js/js_best_practices.asp
32. https://www.w3schools.com/js/js_htmldom_document.asp
33. https://www.w3schools.com/js/js_htmldom_elements.asp
34. https://www.w3schools.com/js/js_htmldom_events.asp
35. https://www.w3schools.com/js/js_htmldom_eventlistener.asp
36. https://www.w3schools.com/csSref/pr_pos_z-index.php
37. https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_parallax
38. https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter

## Gebruikte Afbeeldingen Links:
1. https://www.pexels.com/nl-nl/foto/restaurant-eetgelegenheid-eetcafe-trottoir-15638789/
2. https://www.pexels.com/photo/fries-and-burger-on-plate-70497/
3. https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/
4. https://www.pexels.com/photo/white-cream-on-white-bowl-1633525/
5. https://www.pexels.com/photo/steak-food-769289/
6. https://www.pexels.com/photo/fish-salad-dish-262959/
7. https://www.pexels.com/photo/burger-with-fried-fries-on-black-plate-with-sauce-on-the-side-1199957/
8. https://www.pexels.com/photo/salad-on-a-plate-2097090/
9. https://www.pexels.com/photo/cooked-food-in-stainless-steel-plate-2641886/
10. https://www.pexels.com/photo/close-up-of-steak-meal-served-in-plate-323682/
11. https://www.flaticon.com/free-icons/hamburger
12. https://www.pexels.com/photo/man-in-white-dress-shirt-holding-silver-bowl-4253312/