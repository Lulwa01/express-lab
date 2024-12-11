const express = require('express');
const app = express()


// 1. Be Polite, Greet the User
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
res.send(`What a delight it is to see you once more, ${username}.`);
});


// 2. Rolling the Dice
app.get('/roll/:rollNumber', (req, res) => {
    const rollNumber = req.params.rollNumber
    if (rollNumber !== number){
        return res.send('You must specify a number')

    } else {
        res.send(`You rolled a ${rollNumber}.`)
}})


// 3. I Want THAT One!
app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    if (collectibles !== index){
        return res.send('This item is not yet in stock. Check back soon!')
    } else {
        res.send(`So, you want the ${collectibles.name}? For ${collectibles.price}, it can be yours!`)
    }
})


// 4. Filter Shoes by Query Parameters
app.get('/shoes', (req, res) => {
    
    const min = req.params.min;
    const max = req.params.max;
    const type = req.params.type;

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    if (shoes.filter((shoe) => shoe.price <= max)){
        
    }
    if (shoes.filter((shoe) => shoe.price >= min)){

    }
    if (shoes.filter((shoe) => shoe.type === type)){

    }
    res.send(shoes)
});


app.listen(3000, () => {
    console.log('server is running on port 3000') 
})