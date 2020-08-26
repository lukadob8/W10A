var firstHead = document.querySelector('h1');
firstHead.style.color = 'red';

var allText = document.querySelectorAll('p');
allText.forEach(function(p) {
    p.style.color = 'pink';
});

var secondHead = document.getElementById('header-two');
secondHead.style.fontSize = '15px';
secondHead.style.fontStyle = 'italic';

var someText = document.getElementsByClassName('text');
for(var index = 0; index < someText.length; index++) {
    someText[index].style.fontWeight = 'bold';
    someText[index].style.color = 'purple';
}

var pinHead = document.getElementsByTagName('img');
for(var index = 0; index < pinHead.length; index++) {
    pinHead[index].style.opacity = '0.4';
}

var newElement = document.createElement ('p');
var parentElement = document.getElementById('parent');
parentElement.append(newElement);

var newText = document.createTextNode ('This text was added above the image of Pinhead Larry by JS.');
newElement.appendChild(newText);
newElement.style.fontWeight = 'bold';
newElement.style.color = 'green';

var elementRemove = document.getElementById('remove');
var childRemove = document.getElementById('remove_p');
elementRemove.removeChild(childRemove);

var elementStyle = document.getElementById('applyStyle');
applyStyle.classList.add ("myStyle");

function myFunction () {
    var element = document.getElementById('applyStyle');
    element.classList.toggle('myStyle');
}

var removeStyle = document.getElementById('styleTest');
removeStyle.classList.remove('secondStyle');