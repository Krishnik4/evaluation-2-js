
/*

-----CONSTRUCTION DE LA 1ERE DIV-----

--fait autrement plus tard, avec les 5 autres divs


const div = document.createElement('div');
div.classList.add('todo-card');
const checkboxInput = document.createElement('input');
checkboxInput.type = 'checkbox';
const title = document.createElement('p');

div.appendChild(checkboxInput);
div.appendChild(title);
todoSection.appendChild(div);



//implementation du 1er todo
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response)=>response.json())
        .then((response)=>{
            title.innerText = response.title;
            checkboxInput.checked = response.completed;
        });
*/



const todoSection = document.querySelector('#todo-list');
const divs = [];
const inputs = [];
const titles = [];

//construction des 5 divs
for(let i=0;i<5;++i){
    divs[i] = document.createElement('div');
    divs[i].classList.add('todo-card');

    inputs[i] = document.createElement('input');
    inputs[i].type = 'checkbox';

    titles[i] = document.createElement('p');

    divs[i].appendChild(inputs[i]);
    divs[i].appendChild(titles[i]);
    todoSection.appendChild(divs[i]);
}

// fonction pour remplire les 5 divs en fonction de la page
function fillDivs(todos,page) {
    for(let i=0;i<5;++i){
        titles[i].innerText = todos[i + 5*(page-1)].title;
        inputs[i].checked = todos[i + 5*(page-1)].completed;
    }
}


const btnNext = document.querySelector('#next');
const btnPrevious = document.querySelector('#previous');

fetch('https://jsonplaceholder.typicode.com/todos')
    .then((response)=>response.json())
        .then((response)=>{
            //initialisation de l'état initial de la section
            let todoList=response.slice(0,20);
            let page = 1;
            console.log(todoList);
            fillDivs(response,page);
            btnPrevious.disabled=true;

            btnNext.addEventListener('click',(e)=>{
                //désactvation du bouton si il est sur la dernière page, +activation du bouton "précédent" quand on avance de page, au cas où on était sur la 1ere page
                if(++page==4){
                    e.target.disabled=true;
                }
                btnPrevious.disabled=false;

                fillDivs(response,page);
            })

            btnPrevious.addEventListener('click',(e)=>{
                //inverse de l'autre bouton
                if(--page==1){
                    e.target.disabled=true;
                }
                btnNext.disabled=false;

                fillDivs(response,page);
                
            })

        })