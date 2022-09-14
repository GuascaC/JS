'use strict';
axios
    .get("https://pokeapi.co/api/v2/pokemon")
    .then((Response) =>{
        console.log(response.data.results)
    })
    .catch((err) =>{
        console.log(err);
    });
    