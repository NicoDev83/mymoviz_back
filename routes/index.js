var express = require('express');
var router = express.Router();

const fetch = require('node-fetch'); // si besoin d'utiliser fetch pour du HTTP

module.exports = router;

router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${process.env.OWM_API_KEY}`) 
    .then(response => response.json())
    .then(apiData => {
        res.json({movies: apiData.results})
    })
})
