const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/FinalDB', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
    console.log("Server > GET '/users' ")
    connection((db) => {
        // Here is the place to select collection
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(users);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Get Single User
router.get('/users/:userName', (req, res) => {
    console.log("Server > GET '/users' single user", req.params.id)
    connection((db) => {
        // Here is the place to select collection
        db.collection('users')
            .find({ userName: req.params.userName })
            .toArray()
            .then((user) => {
                response.data = user;
                res.json(user);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Create User
router.post('/users', (req, res) => {
    console.log("Server > POST '/users' > user ", req.body);
    connection((db) => {
        // Here is the place to select collection
        db.collection('users')
            .insertOne(req.body)
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Destroy User
router.delete('/users/:id', (req, res) => {
    console.log("Sever > DELETE '/users/:id' > id", req.params)
    connection((db) => {
        console.log("deleting", req.params.id)
        // Here is the place to select collection, Take care the type of the _id
        db.collection('users')
            .deleteOne({_id: req.params.id})
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Update User
router.put('/users/:userName', (req, res) => {
    console.log("Server > PUT '/users/:id' > id", req.body)
    connection((db) => {
        console.log("update", req.params.userName)
        // Here is the place to select collection, Take care the type of the _id
        db.collection('users')
            .update({userName: req.params.userName}, req.body)
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Get Games
router.get('/games', (req, res) => {
    console.log("Server > GET '/games' ")
    connection((db) => {
        // Here is the place to select collection
        db.collection('gamesList')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(users);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Get Single User
router.get('/games/:id', (req, res) => {
    console.log("Server > GET '/games' single user", req.params.id)
    connection((db) => {
        // Here is the place to select collection
        db.collection('gamesList')
            .find({ id: Number(req.params.id) })
            .toArray()
            .then((user) => {
                response.data = user;
                res.json(user);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});
// Update User
router.put('/games/:id', (req, res) => {
    console.log("Server > PUT '/games/:id' > id", req.body)
    connection((db) => {
        console.log("update", req.params.id)
        // Here is the place to select collection, Take care the type of the _id
        db.collection('gamesList')
            .update({id: req.params.id}, req.body)
            .catch((err) => {
                sendError(err, res);
            });
    });
});
module.exports = router;