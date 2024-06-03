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
}