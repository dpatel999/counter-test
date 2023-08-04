const express = require('express')
const app = express()

let count = 0;

app.get('/counter', (req, res) => {
    res.json({ count })
});

app.post('/increment', (req, res) => {
    count++;
    res.json({ count });
});

app.post('/decrement', (req, res) => {
    if (count > 0 ){
        count--;
    }

    res.json({ count });
});

app.listen(4000, () => {
    console.log(`Example app listening on port ${4000}`)
  })