var expanded = false;

function collapsetoggle() {
    let toToggle = document.getElementById('collapsablemenu');
    let toToggle2 = document.getElementById('collapsablemenu2');
    let toToggle3 = document.getElementById('menuclose');
    let toToggle4 = document.getElementById('screencover');
    if (expanded) {
        toToggle.style.display = 'none';
        toToggle2.style.display = 'none';
        toToggle3.style.display = 'none';
        toToggle4.style.display = 'none';
        expanded = false;
    } else {
        toToggle.style.display = 'block';
        toToggle2.style.display = 'flex';
        toToggle3.style.display = 'block';
        toToggle4.style.display = 'block';
        expanded = true;
    }
}