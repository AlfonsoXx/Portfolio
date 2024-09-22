const pokemon = require('pokemon');
const express = require('express')
const app = express()


// 1.
app.get('/',(req,res) =>{
    res.send("I am the Pokemon root route.!")
});

//2.
app.get("/pokemon", (req,res) => {
    res.send ("Name of pokenmon: " + pokemon.random());
})


//3. Send back a response that is an array of 5 Pokemon
app.get("/dex", (req,res) => {
    let pokemonArr = []
    for(let i=0; i< 5; i++ ){
    pokemonArr.push(pokemon.random())
    }
    res.send({pokemonArr})
})


//4. Send back a response that is an array of 5 Pokemon BUT each element is an object
app.get("/pokemon/dex", (req,res) => {
    let pokemonArr = []
    for(let i=0; i<= 5; i++ ){
        let poke = {
            name: pokemon.random(),
            attack:parseInt(Math.random()*100).toFixed(0),
            defense:parseInt(Math.random()*100).toFixed(0),
        }
    pokemonArr.push(poke)
    }
    res.send({pokemonArr})
})


//5.
app.get("/battle", (req,res) => {
    //array to hold two randomly generated Pokemon
    let pokemonArr = [];
    
    //Generate two Pokemon with random attack and defense
    for(let i=0; i< 2; i++ ){
        let poke = {
            name: pokemon.random(),
            attack:parseInt(Math.random()*100).toFixed(0),
            defense:parseInt(Math.random()*100).toFixed(0),
        }; 
     //push Pokemon into array   
    pokemonArr.push(poke);
    console.log(pokemonArr)
    }

//Determine the winner and loser
let [poke1, poke2] = pokemonArr;
let winner, loser;

//Compare attack values; if they are the same compare, compare the defense
if (poke1.attack > poke2.attack || (poke1.attack === poke2.attack && poke1.defense > poke2.defense)) {
    winner = poke1;
    loser = poke2;
    
    console.log(winner, loser)
} else {
    winner = poke2;
    loser = poke1;
    console.log(winner, loser)
}
    
    res.send(
        `The winner is ${winner.name}  with an attack of ${winner.attack} and a defense of ${winner.defense}, 
        Versus ${loser.name} who has an attack of ${loser.attack} and a defense of ${loser.defense}.`
    );
});


const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> console.log(`App is on ${PORT}`))