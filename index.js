'use strict';

const sendRequest = () => {

// 1: Anlegen des XMLHttpRequest-Objektes
const xhr = new XMLHttpRequest();

// 2: Definieren, was wie geladen werden soll
xhr.open('get', '/data.txt');

// 3: Definieren, was nach dem Laden geschehen soll
xhr.addEventListener('load', () => {
if (xhr.status == 200) 
    
    {
    console.log(xhr)
console.log(xhr.response);
} else {
console.warn(`${xhr.responseURL} konnte nicht geladen werden: ${xhr.statusText}`); 
}
})

// 4: Absenden
xhr.send();

}

const init = () => {

const btn = document.querySelector('button');
btn.addEventListener('click', sendRequest);

}

init();


console.log("hellow worklsd");

console.log("hellow worklsd");


console.log("hellow worklsd");
