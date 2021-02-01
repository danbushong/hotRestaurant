const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations= [
    {
        routeName: 'reservation1',
        name: "Dan",
        tableNumber: 7,

    }
    
]



app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

app.get('/tables', (req,res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reservation', (req,res) => res.sendFile(path.join(__dirname, 'reservation.html')));

app.post('/api/reservation', (req,res) => {
    const newReservation = req.body;

    reservations.push(newReservation);
    res.json(newReservation);


})

app.get('/api/reservation/')

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));

