const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([
        { clienteId: 1, comentario: "Ótimo atendimento!" },
        { clienteId: 2, comentario: "Produto excelente!" }
    ]);
});

module.exports = router;

