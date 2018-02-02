var express = require('express');
var low = require('lowdb');
var FileSync = require('lowdb/adapters/FileSync');
var adapter = new FileSync('db.json'); // More details in README.md
var db = low(adapter);
var app = express();
var creds = require("./secret.json");  // More details in README.md

db.defaults({
    posts: [],
    meta: {}
}).write();

app.use(express.static('public'));

app.get("/", function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get("/admin", function (req, res) {
    res.sendFile(__dirname + '/public/admin.html');
});

app.get("/api/v1", function (req, res) {
    res.sendFile(__dirname + '/db.json');
});

app.get("/api/v1/posts", function (req, res) {
    res.send(db.get('posts'));
});

app.get("/api/v1/posts/:ID", function (req, res) {
    res.send(db.get('posts.' + req.params.ID));
});

app.get("/api/v1/meta/:ID", function (req, res) {
    res.send(db.get('meta.' + req.params.ID));
});

app.get("/api/v1/meta", function (req, res) {
    res.send(db.get('meta'));
});

app.post("/posts/new", function (req, res) {
    if (req.query.title && req.query.date && req.query.body && req.query.token == creds.secret) {
        db.get('posts')
            .push({
                id: db.get('posts').size() + 1,  // More deatils in README.md
                title: req.query.title,
                date: req.query.date,
                content: req.query.body
            })
            .write();
        res.send(db.get('posts').last());
    } else {
        res.send(JSON.stringify({
            "error": "missing parameter"
        }));
    }
});
app.post("/meta/:ID", function (req, res) {
    var ID = req.params.ID;
    if (ID == "link" && req.query.text && req.query.value && req.query.token == creds.secret) {
        var linkTxt = req.query.text;           // More deatils in README.md
        var linkVal = req.query.value;
        db.get('meta.link')
            .assign({
                title: linkTxt,
                value: linkVal
            })
            .write();
        res.send(JSON.stringify({
            link: db.get('meta.link').value()
        }));

    }
    if (req.query.value && req.query.token == creds.secret) {
        db.get('meta')
            .assign({
                [ID]: req.query.value
            })
            .write();
        res.send(JSON.stringify({
            [ID]: db.get('meta.' + ID).value()
        }));
    } else {
        res.send(JSON.stringify({
            "error": "missing parameter"
        }));
    }
});


var listener = app.listen(3000, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
