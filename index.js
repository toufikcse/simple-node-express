const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get('/', (req, res) => {
    res.send('wow i am exsited and learn express with nodemon');
});

const users = [
    {id: 0, name: 'shabana', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 1, name: 'Yasmin', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 2, name: 'Mahmud', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 3, name: 'Shabnur', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 4, name: 'Jeet', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 5, name: 'Purnima', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 6, name: 'Bobita', email: 'shabana@gmail.com', phone: '01752416985'},
    {id: 7, name: 'Kobori', email: 'shabana@gmail.com', phone: '01752416985'}
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    if(search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }  
});

// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    // console.log(req.params.id);
    res.send(user);
});

app.get('/fruits', (req, res) => {
    res.send(['mango', 'oranges', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send("Yammy Yammy tok marka fazli");
})

app.listen(port, () => {
    console.log('Listening to port', port);
})