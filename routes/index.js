var express = require('express');
var router = express.Router();
const fetch = require('node-fetch'); // si besoin d'utiliser fetch pour du HTTP

const OWM_API_KEY = process.env.OWM_API_KEY


router.get('/movies', (req,res) => {
    fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${OWM_API_KEY}`) 
    .then(response => response.json())
    .then(apiData => {
        console.log(apiData)
        res.json({movies: apiData.results})
    })
})

module.exports = router;