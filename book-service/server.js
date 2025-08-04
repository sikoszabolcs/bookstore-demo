const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/books', async (req, res) => {
    try {
        const authors = await axios.get('http://author-service:3000/authors');
        const ratings = await axios.get('http://rating-service:3000/ratings');

        const books = [
            {id: 1, title:"Microservices Patterns", author: authors.data[0], rating: ratings.data[2]},
            {id: 2, title:"Kubernetes Up & Running", author: authors.data[1], rating: ratings.data[2]},
        ];

        res.json(books);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({error: 'Service unavailable'});
    }
});

app.listen(PORT, () => {
  console.log(`Book service running on port ${PORT}`);
});