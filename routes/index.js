const express = require('express');

// Rotas (usar apenas uma resposta(res) por vez, deixei as três para testar)
const router = express.Router();
router.get('/', (req, res) => {
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let idade = req.query.idade;

    let resposta = { NomeCompleto: nome + ' ' + sobrenome };

    res.json(resposta);

    res.send('Olá, ' + nome + ' ' + sobrenome + ', você tem ' + idade + ' anos.');

    // Transforma os parãmetros passados na url em json
    res.json(req.query)
});

router.get('/sobre', (req, res) => {
    res.send('Página SOBRE');
});

// Funcionamento do 'req' requisição, pegando pelo slug
router.get('/posts/:slug', (req, res) => {
    let slug = req.params.slug;
    res.send('Slug do post: ' + slug)
})

module.exports = router;

// GET: req.query
// POST: req.body
// PARAMETROS DA URL: req.params