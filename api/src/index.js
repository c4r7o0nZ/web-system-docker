const express = require('express');
const { port } = require('./configuration');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/user', (req, res) => {
    const user = { name: "Kateryna", age: 25 };
    res.json({
        response: true,
        user
    });
});

app.get('/users', (req, res) => {
    const user1 = { name: "Kateryna", age: 25 };
    const user2 = { name: "Frank", age: 31 };
    const user3 = { name: "Holly", age: 20 };
    res.json({
        response: true,
        users: [user1, user2, user3]
    });
});

app.listen(port, () => {
    console.log(`Listening on ${port} port`);
});