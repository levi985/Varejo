const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json([{ id: 1, produto: "Notebook", total: 2999.99 }]);
});

module.exports = router;

