const express = require('express');


const app = express();


app.get('/', (req, res) => {
    return res.status(200).json({
        status: true,
        message: 'Welcome to jazzFit Api'
    })
})

app.listen(9090, () => {
    console.log('server is live');
})