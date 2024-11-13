import express from "express";
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// I) Declare a simple array called “posts” to temporarily store posts
let posts = [];

// II) BLOCK 1: Part 1
app.get('/posts', (req, res) => {
    res.json(posts);
});

// III) BLOCK 1: Part 2
app.get('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const post = posts.find(post => post.id === postId);

    if (!post) {
        return res.status(404).send('Post not found');
    }

    res.json(post);
});

// IV) BLOCK 2
app.post('/posts', (req, res) => {
    const { title, content } = req.body;

    // Example: Save the post to a data store
    const newPost = {
        id: posts.length + 1,
        title: title,
        content: content
    };

    posts.push(newPost);

    res.status(201).json(newPost); // Respond with the saved post
});

// V) BLOCK 3
app.put('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);
    const { title, content } = req.body;

    // Find the index of the post by ID
    const index = posts.findIndex(post => post.id === postId);

    if (index !== -1) {
        // Update the post
        posts[index].title = title;
        posts[index].content = content;
        res.json(posts[index]);
    } else {
        res.status(404).send('Post not found');
    }
});

// VI) BLOCK 4
app.delete('/posts/:id', (req, res) => {
    const postId = parseInt(req.params.id);

    // Find the index of the post by ID
    const index = posts.findIndex(post => post.id === postId);

    if (index !== -1) {
        // Remove the post from the array
        const deletedPost = posts.splice(index, 1)[0];
        res.json(deletedPost);
    } else {
        res.status(404).send('Post not found');
    }
});

// Start the server
app.listen(port, () => {
    console.log('Server is running...');
});
