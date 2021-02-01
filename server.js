const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [
    {
        name: "Dan",
        phone: 512123456,
        email: "dan@bushong.com",
        unique: "sdfd789234r"
    }
];


// Homepage
app.get('/', (req,res) => res.sendFile(path.join(__dirname, 'index.html')));

// Tables
app.get('/tables', (req,res) => res.sendFile(path.join(__dirname, 'tables.html')));

// Reservation
app.get('/reservation', (req,res) => res.sendFile(path.join(__dirname, 'reservation.html')));

// API
app.post('/api/reservation', (req,res) => {
    const newReservation = req.body;

    reservations.push(newReservation);
    res.json(newReservation);
})

app.get('/api/reservation/', (req,res) => res.json(reservations));

app.listen(PORT, () => console.log(`app listening on PORT ${PORT}`));

