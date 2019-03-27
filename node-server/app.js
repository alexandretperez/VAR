const express = require('express');
const lowdb = require('lowdb');
const bodyParser = require('body-parser');
const FileSync = require('lowdb/adapters/FileAsync');
const id = require('uuid/v4');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

function delay() {
    return Math.random() * 500 + 500;
}

app.all('/heroes', (req, res, next) => {
    console.log({
        method: req.method,
        path: req.route.path,
        body: req.body,
        params: req.params
    });
    setTimeout(() => {
        next();
    }, delay());
});

const adapter = new FileSync('db.json');

lowdb(adapter)
    .then(db => {
        app.get('/', (req, res) => {
            res.send('Nothing here! Try /heroes');
        });

        app.get('/heroes', (req, res) => {
            const heroes = db.get('heroes').value();
            res.send(heroes);
        });

        app.post('/heroes', (req, res) => {
            db.get('heroes')
                .push(req.body)
                .last()
                .assign({ id: id() })
                .write()
                .then(h => res.send(h));
        });

        app.put('/heroes', (req, res) => {
            const hero = req.body;
            db.get('heroes')
                .find({ id: hero.id })
                .assign(hero)
                .write()
                .then(h => res.send(h));
        });

        app.delete('/heroes/:id', (req, res) => {
            db.get('heroes')
                .remove({ id: req.params.id })
                .write()
                .then(() => res.send(true));
        });

        app.get('/db', (req, res) => {
            res.send(db);
        });

        const heroes = [
            { id: id(), name: 'Batman' },
            { id: id(), name: 'Superman' },
            { id: id(), name: 'Wolverine' },
            { id: id(), name: 'Hulk' },
            { id: id(), name: 'Thor' },
            { id: id(), name: 'Magneto' },
            { id: id(), name: 'Rogue' }
        ];

        return db.defaults({ heroes }).write();
    })
    .then(() => {
        app.listen(5000, () => {
            console.log('Server is running on port 5000!');
        });
    });
