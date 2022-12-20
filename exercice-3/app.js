const img = document.querySelector('img');

img.src = 'assets/rick.webp';
img.alt = 'Rick';




const p1 = document.querySelector('#mon-premier-paragraphe');

p1.innerText = 'Bonjour Riri';




const btnBonjour = document.querySelector('#bonjour');
const p2 = document.querySelector('#mon-second-paragraphe');

btnBonjour.addEventListener('click',()=>{
    p2.innerText = 'Bonjour Fifi';
});




const p3 = document.querySelector('#mon-troisième-paragraphe');
const btnValider = document.querySelector('#valider');
const textInput = document.querySelector('input');

btnValider.addEventListener('click',()=>{
    p3.innerText = `Bonjour ${textInput.value}`;
});