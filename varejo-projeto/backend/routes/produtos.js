const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, nome: "Camiseta", preco: 49.99 }]);
});

module.exports = router;

