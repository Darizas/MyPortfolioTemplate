
function openNav () {
    document.getElementById('sideNav').style.display = "block";
    document.getElementById('overlay').style.display = "block";
}
function closeNav() {
    document.getElementById('sideNav').style.removeProperty('display');
    document.getElementById('overlay').style.removeProperty('display');
}
