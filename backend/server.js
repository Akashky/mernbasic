import express from 'express'

const app = express()

app.get('/', (req, res) => {
    res.send('Server is ready!');
});

// get a list of 3 names

app.get('/api/name', (req, res) => {
    const names = [
        {
            id: 1,
            name: "Akash",
            surname: "yadav"
        },
        {
            id: 2,
            name: "Urvesh",
            surname: "Zala"
        },
        {
            id: 3,
            name: "Aditya",
            surname: "Kohli"
        },
    ]
    res.send(names)
})

const port = process.env.PORT || 3000

app.listen(port , () => {
    console.log(`Serve at http://localhost:${port}`);
});