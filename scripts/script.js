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
    console.log("helloworld.")

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

    cnext.addEventListener('click', () => {
        galleryControls("next")
    })

    cprevious.addEventListener('click', () => {
        galleryControls("previous")
    })
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