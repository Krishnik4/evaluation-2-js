setTimeout(()=>{
    console.log('Hello World')
},3000)




let i=-1; //increment, commence à -1 afin de pouvoir mettre ++i dans console.log et qu'il commence quand même à 0
let intervalID = setInterval(()=>{
    if(i<10){
        console.log(++i);
    }
    else{
        clearInterval(intervalID);
    }
},1000);
