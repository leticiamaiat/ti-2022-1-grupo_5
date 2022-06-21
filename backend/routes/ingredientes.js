var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {

    res.json([
            {
              "id": 1,
              "tipo": "Neutro",
              "nome": "Queijo Mussarela",
              "img": "img/ingrediente-queijo-mussarela.png",
              "valor": 3
            },
            {
              "id": 2,
              "tipo": "Salgado",
              "nome": "Cebola",
              "img": "img/ingrediente-cebola.png",
              "valor": 1
            },
            {
              "id": 3,
              "tipo": "Salgado",
              "nome": "Frango",
              "img": "img/ingrediente-frango.png",
              "valor": 2
            },
            {
              "id": 4,
              "tipo": "Salgado",
              "nome": "Oregano",
              "img": "img/ingrediente-oregano.png",
              "valor": 1
            },
            {
              "id": 5,
              "tipo": "Salgado",
              "nome": "Tomate",
              "img": "img/ingrediente-carne-moida.png",
              "valor": 1
            },
            {
              "id": 6,
              "tipo": "Doce",
              "nome": "Chocolate",
              "img": "img/ingrediente-chocolate.png",
              "valor": 2
            },
            {
              "id": 7,
              "tipo": "Doce",
              "nome": "Granulado",
              "img": "img/ingrediente-granulado.png",
              "valor": 1
            },
            {
              "id": 8,
              "tipo": "Doce",
              "nome": "Morango",
              "img": "img/ingrediente-morango.png",
              "valor": 2
            },
            {
              "id": 9,
              "tipo": "Doce",
              "nome": "Doce de leite",
              "img": "img/ingrediente-doce-de-leite.png",
              "valor": 1
            },
            {
              "id": 10,
              "tipo": "Salgado",
              "nome": "Catupiry",
              "img": "img/ingrediente-catupiry.png",
              "valor": 1
            },
            {
              "id": 11,
              "tipo": "Doce",
              "nome": "Confete",
              "img": "img/ingrediente-confete.png",
              "valor": 1
            },
            {
              "id": 12,
              "tipo": "Salgado",
              "nome": "Molho de tomate",
              "img": "img/ingrediente-molho-de-tomate.jpg",
              "valor": 1
            }
          ]);
});

module.exports = router;