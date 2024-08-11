const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const heureDeTravailMiddleware = require("./middlewares/HeureDeTravailMiddleware");
app.use(heureDeTravailMiddleware);


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// Define routes
app.get('/', (req, res) => {
    res.render('home'); // Assuming you have a 'home.ejs' in 'views'
});

app.get('/services', (req, res) => {
    res.render('services'); // Assuming you have a 'services.ejs' in 'views'
});

app.get('/contact', (req, res) => {
    res.render('contact'); // Assuming you have a 'contact.ejs' in 'views'
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
