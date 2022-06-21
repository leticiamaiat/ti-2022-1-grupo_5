var express = require('express');
var router = express.Router();

router.get('/', (req, res, next) => {
    res.json([
        {
          "id": 1,
          "tipo": "Salgada",
          "nome": "3 Queijos",
          "img": "img/esfiha-3-queijos.png",
          "valor": 5
        },
        {
          "id": 2,
          "tipo": "Salgada",
          "nome": "Atum",
          "img": "img/esfiha-atum.png",
          "valor": 4
        },
        {
          "id": 3,
          "tipo": "Salgada",
          "nome": "Bacon",
          "img": "img/esfiha-bacon.png",
          "valor": 5
        },
        {
          "id": 4,
          "tipo": "Salgada",
          "nome": "Carne",
          "img": "img/esfiha-carne.png",
          "valor": 4
        },
        {
          "id": 5,
          "tipo": "Salgada",
          "nome": "Frango com catupiry",
          "img": "img/esfiha-frango-catupiry.png",
          "valor": 5
        },
        {
          "id": 6,
          "tipo": "Salgada",
          "nome": "Manjericão",
          "img": "img/esfiha-manjericão.png",
          "valor": 4
        },
        {
          "id": 7,
          "tipo": "Doce",
          "nome": "Banana",
          "img": "img/esfiha-banana.png",
          "valor": 6
        },
        {
          "id": 8,
          "tipo": "Doce",
          "nome": "Brigadeiro",
          "img": "img/esfiha-brigadeiro.png",
          "valor": 6
        },
        {
          "id": 9,
          "tipo": "Doce",
          "nome": "Chocolate branco",
          "img": "img/esfiha-chocolate-branco.png",
          "valor": 6
        },
        {
          "id": 10,
          "tipo": "Doce",
          "nome": "Chocolate com confete",
          "img": "img/esfiha-chocolate-confete.png",
          "valor": 6
        },
        {
          "id": 11,
          "tipo": "Doce",
          "nome": "Doce de Leite",
          "img": "img/esfiha-doce-leite.png",
          "valor": 6
        },
        {
          "id": 12,
          "tipo": "Doce",
          "nome": "Morango",
          "img": "img/esfiha-morango.png",
          "valor": 6
        },
        {
          "id": 13,
          "tipo": "Personalizada",
          "nome": "Personalizada",
          "img": "img/personalizadas-salgada.png",
          "valor": 6
        }
    ]);
});

module.exports = router;