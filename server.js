const express = require('express');
// const morgan = require('morgan')
const app = express()
// app.use(morgan('dev'))


// 1. Be Polite, Greet the User
app.get('/greetings/:username', (req, res) => {
    const username = req.params.username;
res.send(`What a delight it is to see you once more, ${username}.`);
});


// 2. Rolling the Dice
app.get('/roll/:rollNumber', (req, res) => {
    const rollNumber = req.params.rollNumber
    if (isNaN(rollNumber)){
        return res.send('You must specify a number')
    }
    else {
        return res.send(`You rolled a ${rollNumber}.`)
    }
})


// 3. I Want THAT One!
app.get('/collectibles/:index', (req, res) => {
    const index = req.params.index
    const collectibles = [
        { name: 'shiny ball', price: 5.95 },
        { name: 'autographed picture of a dog', price: 10 },
        { name: 'vintage 1970s yogurt SOLD AS-IS', price: 0.99 }
      ];
    if (isNaN(index)) {
        return res.send('This item is not yet in stock. Check back soon!')
    } 
    else {
        res.send(`So, you want the ${collectibles[index].name}? For ${collectibles[index].price}, it can be yours!`)
    }
})


// 4. Filter Shoes by Query Parameters
app.get('/shoes', (req, res) => {
    
    const min = req.query.min;
    const max = req.query.max;
    const type = req.query.type;

    const shoes = [
        { name: "Birkenstocks", price: 50, type: "sandal" },
        { name: "Air Jordans", price: 500, type: "sneaker" },
        { name: "Air Mahomeses", price: 501, type: "sneaker" },
        { name: "Utility Boots", price: 20, type: "boot" },
        { name: "Velcro Sandals", price: 15, type: "sandal" },
        { name: "Jet Boots", price: 1000, type: "boot" },
        { name: "Fifty-Inch Heels", price: 175, type: "heel" }
    ];

    let shoesFilter = shoes

    if (max){
        shoesFilter.filter((shoe) => shoe.price <= max)
    }
    if (min){
        shoesFilter.filter((shoe) => shoe.price >= min)
     }
    if (type){
        shoesFilter.filter((shoe) => shoe.type === type)
    }
    res.send(shoesFilter)
});


app.listen(3000, () => {
    console.log('server is running on port 3000') 
})