//self executing function als arrow function
(() => {
    let epochTime = Date.now()
    //console.log(UTCTimeStamp)

    //indien er geen historiek is start api call en cooldown timer
    if(!localStorage.getItem("epochTime")) {
        localStorage.setItem("epochTime", epochTime)
        fetchWeatherData()
    } else {
        checkWeatherTimer()
    }

    //async function api call
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

    
    function checkWeatherTimer() {
        //console.log("found old epochTime stamp: "+localStorage.getItem("epochTime"))
        let oldEpochTime = localStorage.getItem("epochTime")
        let currentEpochTime = Date.now()
        let differenceEpochTime = currentEpochTime-oldEpochTime
        
        //milliseconden naar minuten conversie
        let passedTimeMsToMin = differenceEpochTime / 1000 / 60
        //console.log(`Current epochtime - old epochtime = time past, ${currentEpochTime} - ${oldEpochTime} = ${differenceEpochTime} aka ${passedTimeMsToMin} minutes`)
        
        //Cooldowntimer voor api call fetchWeatherData
        //Check of vorige api call meer dan 15 minuten geleden was, indien ja refresh localstorage saved timestamp
        if (passedTimeMsToMin>=15) {
            localStorage.setItem("epochTime", epochTime)
            fetchWeatherData()
        } else {
            displayWeatherNotice(passedTimeMsToMin)

        }
    }

    function displayWeatherNotice(passedTimeMsToMin) {
        const weerDiv = document.getElementById("weermessage");                    
        const ptagh2 = document.createElement("h2")
        ptagh2.innerText = "Weather Notice"
        if(weerDiv) {
            weerDiv.appendChild(ptagh2)
            
            console.log(`api call nog op cooldown timer: ${passedTimeMsToMin}/15minuten`)

            //JSON parse de gestringified data zie comment hieronder over JSON.stringify
            data = JSON.parse(localStorage.getItem("apiJson"))
            //console.log(data.list)
            //access de lijst voor de komende 3 uur, 3 keer

            //console.log(data.list.length)

            //console.log(currentdate.getDate())
            JSONIterator(weerDiv)
        }
    }

    function JSONIterator(weerDiv) {
        let counter = 0
        let currentdate = new Date()

        for (let i = 0; i < data.list.length; i++) {
            //console.log(data.list[i]);
            //zet UTC om naar Date object
            let currentIdate = new Date(data.list[i].dt_txt)
            let dateHour = currentIdate.getHours()
            let dateDay = currentIdate.getDate()
            let wdesc = data.list[i].weather[0].description
            //console.log(data.list[i].main.temp)
            //console.log(data.list[i].weather[0].description)

            if (counter === 3) {
                break
            }
            
            if (dateDay>=currentdate.getDate() && counter < 3) {
            //console.log(dateDay)
            //console.log(currentdate.getDate())
            console.log(dateHour)
            console.log(currentdate.getHours())

            //check of de dag hetzelfde is, simultaan of dat het uur hoger is dan huidig uur, en totaal maar 3 keer dit zal doen (voor de komende 3 weerberichten)
            //console.log(dateDay===currentIdate.getDate())
            //console.log(dateHour>currentdate.getHours())
            if (dateDay===currentIdate.getDate() && dateHour>currentdate.getHours()){
                createDiv(dateHour, wdesc, weerDiv)
                counter++

            }
            //als het dicht bij middernacht is check voorspellingen voor de volgende dag tot counter vol is
            else {
                createDiv(dateHour, wdesc, weerDiv)
                counter++

            }
            }

        }
    }

    
    function createDiv(dateHour, wdesc, weerDiv) {
        const ptag = document.createElement("p");
        ptag.innerText = `At ${dateHour} 'o clock today the weather will have ${wdesc}`
        weerDiv.appendChild(ptag)
    }

})()


let ico = document.getElementById('hamburgermenu');
let nav = document.getElementsByTagName('nav')[0];

//addEventListener is een consumer method want eventlistener methods van js zijn volgens het observer patroon er één
ico.addEventListener('click', () => {
    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

window.onload = () => {
    //console.log("helloworld.")
    const currentPage = document.getElementsByTagName('body')[0].id
    //console.log(currentPage)

    if(currentPage === "gallery") {
        // Array destructuring assignment van variabelen
        const [cnext, cprevious, gallerypic] = [
            document.getElementById('cnext'), 
            document.getElementById('cprevious'),
            document.getElementById('gallerypicture')
        ]
        const galleryUrls = [
            "url(../img/pexels-chevanon-323682.jpg)",
            "url(../img/pexels-dana-tentis-118658-262959.jpg)",
            "url(../img/pexels-ella-olsson-572949-1640777.jpg)",
            "url(../img/pexels-julieaagaard-2097090.jpg)",
            "url(../img/pexels-rajesh-tp-749235-1633525.jpg",
            "url(../img/pexels-robinstickel-70497.jpg)",
            "url(../img/pexels-valeriya-1199957.jpg)",
            "url(../img/pexels-vanmalidate-769289.jpg)",
            "url(../img/pexels-willpicturethis-2641886.jpg)"
        ]

        //spread operator voegt "cnext, cprevious, gallerypic" samen met de inhoud van gallerUrls
        const spreadOperatorTest = [cnext, cprevious, gallerypic, ...galleryUrls];
        console.log(spreadOperatorTest)

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

        //verwachte output van galleryControls(1,2,'test',4,5,6) is een array [2,'test',4,5,6] in console log
        galleryControls(1,2,'test',4,5,6)

        //verwachte output van galleryControls(1) is niets in console log
        galleryControls(1)

        //verwachte output van galleryControls(1) is een array van [2] in console log
        galleryControls(1,2)
    }


    else if (currentPage === "about-us") {
        console.log("test")
        const button = document.getElementById("formsubmit")
        const email = document.getElementById("email")
        const name = document.getElementById("name")


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
    }
}