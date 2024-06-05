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

    cnext.addEventListener('click', () => {
        galleryControls("next")
    })

    cprevious.addEventListener('click', () => {
        galleryControls("previous")
    })

    function galleryControls(direction) {
        if (direction === "next") {
            console.log("next")
        } else if (direction === "previous"){
            console.log("previous")
        }
    }
}