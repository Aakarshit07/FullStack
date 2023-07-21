const json = require('body-parser');
const express = require('express');
const app = express();
const PORT = 4001;
const HOSTNAME = "localHost"

app.get('/', function(req, res){
    res.send("Welcome to Men & Women Dummy Data")
})

app.get('/men', function(req, res){
    res.json({
        product1:{
            "id": "1",
            "name": "Men's T-Shirt",
            "brand": "ABC",
            "price": 190,
            "color": "Blue",
            "size": "M",
            "category": "Clothing"
        },
        product2:{
            "id": "2",
            "name": "Men's Shirt",
            "brand": "ABC",
            "price": 250,
            "color": "Grey",
            "size": "M",
            "category": "Clothing"
        },
        product3:{
            "id": "3",
            "name": "Men's Perfume",
            "brand": "ABC",
            "price": 1200,
            "color": "Titan",
            "size": "M",
            "category": "Acceories"
        },
        product4:{
            "id": "4",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },
        product5:{
            "id": "5",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },product6:{
            "id": "6",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },product7:{
            "id": "7",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },
        product8:{
            "id": "8",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },product9:{
            "id": "9",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },product10:{
            "id": "10",
            "name": "Men's Jewllery",
            "brand": "ABC",
            "price": 11190,
            "color": "Brown",
            "size": "Free",
            "category": "Jewllery"
        },

    })
        
})

app.get('/women', function(req, res){
    res.json({
        product1:{
            "id": "1",
            "name": "Women's Jewllery",
            "brand": "ABC",
            "price": 11110,
            "color": "Gold",
            "size": "M",
            "category": "Jewllery"
        },
        product2:{
            "id": "2",
            "name": "Women's Tops",
            "brand": "ABC",
            "price": 330,
            "color": "All",
            "size": "L",
            "category": "Clothing"
        },
        product3:{
            "id": "3",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product4:{
            "id": "4",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product5:{
            "id": "5",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product6:{
            "id": "6",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product7:{
            "id": "7",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product8:{
            "id": "8",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product9:{
            "id": "9",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        },
        product10:{
            "id": "10",
            "name": "Women's Sneakers",
            "brand": "ABC",
            "price": 3400,
            "color": "White",
            "size": "41",
            "category": "Shoes"
        }
    })

})

app.get('/other', function(req, res){
    res.send("<h1>Page Not Found</h1>")
})


app.listen(PORT, () => {
    console.log(`server Running at ${HOSTNAME}: ${PORT}`);
});
