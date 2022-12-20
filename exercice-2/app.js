fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response)=>response.json())
        .then((response)=>console.log(response));



fetch('https://jsonplaceholder.typicode.com/users/2')
    .then((response)=>console.log(response.status));


   
fetch('https://jsonplaceholder.typicode.com/users/')
    .then((response)=>response.json())
        .then((response)=>{
            for (const user of response) {
                console.log(user);
            }
        });
