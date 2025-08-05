const express = require('express');
const axios = require('axios');
const os = require('os')

const app = express();
const PORT = process.env.PORT || 3000;
const POD_NAME = process.env.HOSTNAME || os.hostname();

app.get('/books', async (req, res) => {
    try {
        const authors = await axios.get('http://author-service:3000/authors');
        const ratings = await axios.get('http://rating-service:3000/ratings');

        const books = [
            {id: 1, title:"Microservices Patterns", author: authors.data[0], rating: ratings.data[2]},
            {id: 2, title:"Kubernetes Up & Running", author: authors.data[1], rating: ratings.data[2]},
        ];

        res.json({
            books: books,
            servedBy: {
                podName: POD_NAME,
                timestamp: new Date().toISOString()
            }
        });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({
            error: 'Service unavailable',
            servedBy: {
                podName: POD_NAME,
                timestamp: new Date().toISOString()
            }
        });
    }
});

// Add health check endpoints
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.get('/ready', (req, res) => {
  // Add logic to check if service is ready (DB connections, etc.)
  res.status(200).json({ status: 'ready', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Book service running on port ${PORT} in pod ${POD_NAME}`);
});