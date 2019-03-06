const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Post = require('./models/post');

const app = express();
// SqmcAZrgtOf3FtG4
mongoose.connect('mongodb+srv://Test001:SqmcAZrgtOf3FtG4@kumar001-dv4pg.mongodb.net/node-angular?retryWrites=true')
    .then(() => {
        console.log('connected to database!');
    })
    .catch(() => {
        console.log('Connection Failed!');
    });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 
    'Origin, X-Requested-With, Content-type, Accept'
    );
    res.setHeader('Access-Control-Allow-Methods', 
    'GET, POST, PATCH, DELETE, OPTIONS'
    );
    next();
});

app.post('/api/posts', (req, res, next) => {
    const post = new Post({
        title: req.body.title,
        content: req.body.content
    });
    post.save();
    res.status(201).json({
        message: 'Post added successfully'
    });
});

app.use('/api/posts', (req, res, next) => {
    const posts = [
        { 
            id: 'ffrr445tre', 
            title: 'First server-side post', 
            content: 'This is coming from the server' 
        },
        { 
            id: 'gfge445tre', 
            title: 'Second Server-side post', 
            content: 'This is coming from the server' 
        }
    ];
    res.status(200).json({
        messgae: 'Posts fetched succesfully!',
        posts: posts
    });
});



module.exports = app;