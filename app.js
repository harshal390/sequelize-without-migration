const express = require('express')
const app = express()
const port = 3000
const db = require("./models");
const { addUser } = require("./controllers/userController");
const crudRoute = require("./routes/crudRoute");
const { queriesController } = require('./controllers/queriesController');
const { getSetVirtual } = require('./controllers/getSetVirtual');
const { rowQueries } = require('./controllers/rowQueries');
const crudContacts = require('./routes/crudContactsroute');
const { associationData } = require('./controllers/associationData');
//body-parser alternative
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/add', addUser);
app.use('/crud', crudRoute);
app.use('/crud-contacts', crudContacts);
app.get('/query', queriesController);
app.get('/get-set-virtual', getSetVirtual);
app.get('/row-queries', rowQueries);
app.get('/association-creation', associationData);

try {
    db.sequelize.sync(); //for entire tables->
    //for one by one tables -> db.users.sync();
    // db.sequelize.drop(); //for drop tables ->
    //for delete table  -> db.users.drop();
} catch (error) {
    console.log("error occurred while sync", error)
}


app.listen(port, () => {
    console.log(`Example app listening on port ${port} http://localhost:${port}`);
})