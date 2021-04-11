const express = require('express');
const app = express();


/*Kategorien bekommen*/
app.get('/lists', (req, res) =>
    /*Returning an array von alle den categories in die db*/

/*Liste erstellen aus der get aktion*/
app.post('/lists', (req, res) => {
    /*Wiedergabe der Kategorien an den Requester*/
}))
 /*patchen!! liste updaten*/
app.patch('/lists/:id', (req, res) => {

})

app.delete('/lists/:id', (req, res) => {

})

app.listen(3000, () => {
})
