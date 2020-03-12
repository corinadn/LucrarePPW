function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57))
        return false;
    return true;
}

/* Ex. 1*/
document.getElementById('calculateSumm').addEventListener("click", function(){
	const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);
	document.getElementById('result').innerHTML = x + y; 
}); 

/* Ex. 2*/
document.getElementById('change').addEventListener("click", function(){
    const x = Number(document.getElementById('x').value);
    const y = Number(document.getElementById('y').value);
    document.getElementById('x').value = y; 
    document.getElementById('y').value = x; 
}); 

/* Ex. 3*/
document.querySelectorAll("span.verde").forEach(function(element){
    element.addEventListener("mouseover", function(){
        element.style.backgroundColor = "green";
    });
    element.addEventListener("mouseout", function(){
        element.style.backgroundColor = "red";
    });
});

/* Ex. 4*/
function paragraph(){
    const ol = document.createElement('ol');
    ol.id.list;
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.innerText = `Paragraful NR ${i}`;
        if (i % 2 === 0) {
            li.style.backgroundColor = 'blue';
        } else {
            li.style.backgroundColor = 'yellow';}
        ol.append(li) }
    document.getElementById('list').append(ol)
}; paragraph();


/* ex 5, 6 */
function element(){
    const ol = document.createElement('ol');
    ol.id.list;
    for (let i = 1; i <= 10; i++) {
        const li = document.createElement('li');
        li.innerText = `Element Nr ${i}`;
        if (i == 10) {
            li.style.backgroundColor = '#9403fc'; }
        ol.append(li) }
    document.getElementById('lista').append(ol)
}; element();

/* ex.11 */
function addElements() {
    setInterval(function() {
        var li = document.createElement('li');
        li.innerText = `Element Nr ${document.getElementById('lista').childNodes.length + 1}`;
        document.getElementById('lista').append(li)
    }, 10000);
}; addElements();

/* ex.7 */
const lis = [...document.querySelectorAll('.this-list li')];
for (const li of lis) {
    document.getElementById('removeElement').addEventListener("click", function(){
    lis[4].parentNode.removeChild(lis[4]);
  })
}

/* ex.8 */
function circleElements() {
    for (let i = 1; i <= 10; i++) {
        const p = document.createElement('p');
        p.innerText = `Element cerc`;
        p.setAttribute('class', 'cerc');
        document.getElementById('elements').append(p)
    }
}; circleElements();

/* ex.9 */
let array = [13,4,5,6,23,14,19,76,34,9];
function ascendingForm() {
        array.sort(function (a, b) {
            return a - b })
        document.getElementById('array').innerHTML = array;
}; ascendingForm();

/* ex.10 */
window.onload = function () {
    setInterval(changeColor, 5000);
    function changeColor() {   
        document.body.style.backgroundColor = '#868f89';
    }
}


/* ex.12 */
function changeSize() {
    var str = document.getElementById('counter').innerText;
    var substr = str.substring(7);
    var c = parseInt(substr) + 1;
    document.getElementById('counter').innerHTML = str.substring(0, 6) + ' ' + String(c);
} 

/* ex.13*/

for (var i = 0; i < array.length; i++) {
    (function(i) {
        setTimeout(function() {
            const li = document.createElement('li');
            li.innerText = array[i];
            document.getElementById('pause').append(li);
        }, 10000*(i+1));
    })(i);
}

/* ex.14*/
function titleFunction() {
    let t = Math.pow(Number(document.getElementById('titlu').innerText),2);
    return t
}
document.getElementById('titlu').setAttribute('title', titleFunction());

