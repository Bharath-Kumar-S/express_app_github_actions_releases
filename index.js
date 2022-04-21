import express  from 'express';
import { posts } from './assets/posts.js';
const app = express();

app.use(express.json());

app.listen(5000, () => {
    console.log('Server is running on port 5000');
})

app.get('/posts', (req, res) => {
    res.status(200).json(posts);
})