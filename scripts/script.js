let ico = document.getElementById('hamburgermenu');
let nav = document.getElementsByTagName('nav')[0];

ico.addEventListener('click', () => {
    if (nav.style.display !== 'block') {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});

window.onload = () => {
    console.log("helloworld.")

    const cnext = document.getElementById('cnext')
    const cprevious = document.getElementById('cprevious')
    const gallerypic = document.getElementById('gallerypicture')
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

    cnext.addEventListener('click', () => {
        galleryControls("next")
    })

    cprevious.addEventListener('click', () => {
        galleryControls("previous")
    })
    let i = 0
    function galleryControls(direction) {
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
    }
}