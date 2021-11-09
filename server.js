const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.use('/login', (req, res) => {
    res.send({
        token: 'test123'
    });
});

// Uncommented due to the Login API running on a dedicated repository on Heroku
// const PORT = process.env.PORT || 8080;

app.listen(PORT, () => console.log(`API is running on https://web-app-challenge-gpace-login.herokuapp.com/login`));